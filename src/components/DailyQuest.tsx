import { Dumbbell, Footprints, Timer, Flame, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Quest {
  id: number;
  name: string;
  description: string;
  target: number;
  unit: string;
  icon: React.ElementType;
  color: string;
  completed: boolean;
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
    },
  ]);

  const toggleQuest = (id: number) => {
    setQuests(quests.map(q => 
      q.id === id ? { ...q, completed: !q.completed } : q
    ));
  };

  const completedCount = quests.filter(q => q.completed).length;
  const progress = (completedCount / quests.length) * 100;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
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

              {/* Quest Target */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-orbitron">
                  OBJECTIF
                </span>
                <span className={`font-orbitron font-bold ${
                  quest.completed ? 'text-primary' : 'text-foreground'
                }`}>
                  {quest.target} {quest.unit}
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
