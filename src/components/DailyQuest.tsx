import { Dumbbell, Footprints, Timer, Flame, CheckCircle2, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

interface Quest {
  id: number;
  name: string;
  description: string;
  target: number;
  unit: string;
  icon: React.ElementType;
  color: string;
  completed: boolean;
  xpReward: number;
}

const DailyQuest = () => {
  const [quests, setQuests] = useState<Quest[]>([
    {
      id: 1,
      name: "100 Pompes",
      description: "Renforce ton corps supérieur",
      target: 100,
      unit: "pompes",
      icon: Dumbbell,
      color: "cyan",
      completed: false,
      xpReward: 50,
    },
    {
      id: 2,
      name: "100 Squats",
      description: "Développe ta puissance des jambes",
      target: 100,
      unit: "squats",
      icon: Flame,
      color: "orange",
      completed: false,
      xpReward: 50,
    },
    {
      id: 3,
      name: "100 Abdos",
      description: "Forge un core d'acier",
      target: 100,
      unit: "abdos",
      icon: Timer,
      color: "purple",
      completed: false,
      xpReward: 50,
    },
    {
      id: 4,
      name: "10km Course",
      description: "Augmente ton endurance",
      target: 10,
      unit: "km",
      icon: Footprints,
      color: "green",
      completed: false,
      xpReward: 100,
    },
  ]);

  const [currentXP, setCurrentXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [showXpPopup, setShowXpPopup] = useState(false);

  // XP needed for each level (increases progressively)
  const getXPForLevel = (lvl: number) => lvl * 100;
  const xpForCurrentLevel = getXPForLevel(level);
  const xpProgress = (currentXP / xpForCurrentLevel) * 100;

  useEffect(() => {
    if (currentXP >= xpForCurrentLevel) {
      setCurrentXP(currentXP - xpForCurrentLevel);
      setLevel(level + 1);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }
  }, [currentXP, xpForCurrentLevel, level]);

  const toggleQuest = (id: number) => {
    const quest = quests.find(q => q.id === id);
    if (!quest) return;

    if (!quest.completed) {
      // Completing quest - add XP
      setXpGained(quest.xpReward);
      setShowXpPopup(true);
      setTimeout(() => setShowXpPopup(false), 1500);
      setCurrentXP(prev => prev + quest.xpReward);
    } else {
      // Uncompleting quest - remove XP
      setCurrentXP(prev => Math.max(0, prev - quest.xpReward));
    }

    setQuests(quests.map(q => 
      q.id === id ? { ...q, completed: !q.completed } : q
    ));
  };

  const completedCount = quests.filter(q => q.completed).length;
  const progress = (completedCount / quests.length) * 100;

  return (
    <section className="py-20 relative">
      {/* Level Up Animation */}
      {showLevelUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-scale-in text-center">
            <div className="system-window px-12 py-8 border-2 border-primary animate-pulse-glow">
              <div className="font-orbitron text-primary text-sm tracking-widest mb-2">
                [ NIVEAU SUPÉRIEUR ]
              </div>
              <div className="font-orbitron text-6xl font-black text-primary text-glow mb-2">
                LV. {level}
              </div>
              <div className="text-foreground">Tu deviens plus fort !</div>
            </div>
          </div>
        </div>
      )}

      {/* XP Gained Popup */}
      {showXpPopup && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          <div className="animate-fade-up font-orbitron text-2xl text-primary text-glow">
            +{xpGained} XP
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        {/* Level & XP Display */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="system-window rounded-xl p-6 animate-pulse-glow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="font-orbitron text-2xl font-black text-background">
                    {level}
                  </span>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm font-orbitron">NIVEAU ACTUEL</div>
                  <div className="font-orbitron text-2xl font-bold text-foreground">
                    Chasseur Rang {level < 10 ? 'E' : level < 25 ? 'D' : level < 50 ? 'C' : level < 75 ? 'B' : level < 100 ? 'A' : 'S'}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="w-5 h-5" />
                  <span className="font-orbitron text-xl font-bold">{currentXP} / {xpForCurrentLevel} XP</span>
                </div>
                <div className="text-muted-foreground text-sm">
                  Prochain niveau
                </div>
              </div>
            </div>
            
            {/* XP Progress Bar */}
            <div className="relative">
              <div className="stat-bar h-4">
                <div 
                  className="stat-bar-fill transition-all duration-500"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-orbitron text-xs text-foreground/80">
                  {Math.round(xpProgress)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="system-window inline-block px-6 py-3 mb-6">
            <span className="font-orbitron text-primary text-sm tracking-widest">
              [QUÊTE QUOTIDIENNE]
            </span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Programme de</span>
            <span className="text-primary text-glow ml-3">Sung Jin-Woo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Complète les 4 exercices quotidiens pour débloquer ton potentiel caché
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-3">
            <span className="font-orbitron text-sm text-muted-foreground">
              PROGRESSION QUOTIDIENNE
            </span>
            <span className="font-orbitron text-primary text-glow">
              {completedCount}/{quests.length}
            </span>
          </div>
          <div className="stat-bar h-3">
            <div 
              className="stat-bar-fill transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Quest Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {quests.map((quest) => (
            <div
              key={quest.id}
              onClick={() => toggleQuest(quest.id)}
              className={`quest-card rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                quest.completed ? 'border-primary/50 bg-primary/5' : ''
              }`}
            >
              {/* Quest Icon */}
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                quest.completed 
                  ? 'bg-primary/20' 
                  : 'bg-muted'
              }`}>
                {quest.completed ? (
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                ) : (
                  <quest.icon className={`w-7 h-7 ${
                    quest.color === 'cyan' ? 'text-primary' :
                    quest.color === 'orange' ? 'text-orange-500' :
                    quest.color === 'purple' ? 'text-secondary' :
                    'text-green-500'
                  }`} />
                )}
              </div>

              {/* Quest Info */}
              <h3 className={`font-orbitron text-lg font-bold mb-2 ${
                quest.completed ? 'text-primary text-glow' : 'text-foreground'
              }`}>
                {quest.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {quest.description}
              </p>

              {/* Quest Target & XP Reward */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground font-orbitron">
                  OBJECTIF
                </span>
                <span className={`font-orbitron font-bold ${
                  quest.completed ? 'text-primary' : 'text-foreground'
                }`}>
                  {quest.target} {quest.unit}
                </span>
              </div>
              
              {/* XP Reward */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-orbitron">
                  RÉCOMPENSE
                </span>
                <span className="font-orbitron font-bold text-secondary flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +{quest.xpReward} XP
                </span>
              </div>

              {/* Completion Status */}
              <div className={`mt-4 text-center py-2 rounded font-orbitron text-xs tracking-wider ${
                quest.completed 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {quest.completed ? '✓ COMPLÉTÉ' : 'CLIQUER POUR VALIDER'}
              </div>
            </div>
          ))}
        </div>

        {/* Warning Message */}
        <div className="mt-12 text-center">
          <div className="system-window inline-block px-8 py-4 border-destructive/30">
            <p className="text-destructive font-orbitron text-sm">
              ⚠️ ATTENTION : L'échec de la quête entraînera une pénalité
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyQuest;
