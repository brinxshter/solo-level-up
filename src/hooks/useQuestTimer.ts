import { useState, useEffect, useCallback } from "react";

const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;
const STORAGE_KEY = "arise-training-data";

interface QuestData {
  startTime: number;
  completedQuests: number[];
  currentXP: number;
  level: number;
  penaltyApplied: boolean;
}

export const useQuestTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(TWELVE_HOURS_MS);
  const [showPenalty, setShowPenalty] = useState(false);
  const [penaltyAmount, setPenaltyAmount] = useState(0);

  const getStoredData = useCallback((): QuestData | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return null;
  }, []);

  const saveData = useCallback((data: Partial<QuestData>) => {
    const current = getStoredData() || {
      startTime: Date.now(),
      completedQuests: [],
      currentXP: 0,
      level: 1,
      penaltyApplied: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...data }));
  }, [getStoredData]);

  const resetQuests = useCallback((applyPenalty: boolean, currentXP: number, level: number) => {
    let newXP = currentXP;
    let newLevel = level;
    let penalty = 0;

    if (applyPenalty) {
      // Penalty: lose 50% of current XP and potentially drop a level
      penalty = Math.floor(currentXP * 0.5) + 50;
      newXP = Math.max(0, currentXP - penalty);
      
      // If XP goes negative and level > 1, drop a level
      if (newXP <= 0 && newLevel > 1) {
        newLevel = newLevel - 1;
        newXP = Math.floor((newLevel * 100) / 2); // Start at half XP of previous level
      }

      setPenaltyAmount(penalty);
      setShowPenalty(true);
      setTimeout(() => setShowPenalty(false), 4000);
    }

    const newData: QuestData = {
      startTime: Date.now(),
      completedQuests: [],
      currentXP: newXP,
      level: newLevel,
      penaltyApplied: false,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    
    return { newXP, newLevel };
  }, []);

  const initializeTimer = useCallback(() => {
    const stored = getStoredData();
    
    if (!stored) {
      // First time - initialize
      saveData({ startTime: Date.now() });
      setTimeRemaining(TWELVE_HOURS_MS);
      return null;
    }

    const elapsed = Date.now() - stored.startTime;
    const remaining = TWELVE_HOURS_MS - elapsed;

    if (remaining <= 0) {
      // Time's up! Check if all quests were completed
      const allCompleted = stored.completedQuests.length >= 4;
      return { 
        shouldReset: true, 
        applyPenalty: !allCompleted && !stored.penaltyApplied,
        storedData: stored 
      };
    }

    setTimeRemaining(remaining);
    return { shouldReset: false, storedData: stored };
  }, [getStoredData, saveData]);

  useEffect(() => {
    const interval = setInterval(() => {
      const stored = getStoredData();
      if (stored) {
        const elapsed = Date.now() - stored.startTime;
        const remaining = TWELVE_HOURS_MS - elapsed;
        setTimeRemaining(Math.max(0, remaining));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [getStoredData]);

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    timeRemaining,
    formattedTime: formatTime(timeRemaining),
    showPenalty,
    penaltyAmount,
    initializeTimer,
    resetQuests,
    saveData,
    getStoredData,
    isUrgent: timeRemaining < 60 * 60 * 1000, // Less than 1 hour
    isCritical: timeRemaining < 15 * 60 * 1000, // Less than 15 minutes
  };
};
