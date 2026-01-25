import { Crown, Star, Shield, Sword, Flame } from "lucide-react";

const ranks = [
  {
    rank: "S",
    name: "Rang S - Monarque",
    requirement: "365 jours de quêtes complétées",
    color: "from-yellow-400 to-orange-500",
    textColor: "text-yellow-400",
    icon: Crown,
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.4)]",
  },
  {
    rank: "A",
    name: "Rang A - Élite",
    requirement: "180 jours de quêtes complétées",
    color: "from-purple-400 to-pink-500",
    textColor: "text-purple-400",
    icon: Star,
    glow: "shadow-[0_0_30px_rgba(192,132,252,0.4)]",
  },
  {
    rank: "B",
    name: "Rang B - Vétéran",
    requirement: "90 jours de quêtes complétées",
    color: "from-cyan-400 to-blue-500",
    textColor: "text-cyan-400",
    icon: Shield,
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.4)]",
  },
  {
    rank: "C",
    name: "Rang C - Guerrier",
    requirement: "30 jours de quêtes complétées",
    color: "from-green-400 to-emerald-500",
    textColor: "text-green-400",
    icon: Sword,
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.4)]",
  },
  {
    rank: "E",
    name: "Rang E - Débutant",
    requirement: "Commence ton aventure",
    color: "from-gray-400 to-gray-500",
    textColor: "text-gray-400",
    icon: Flame,
    glow: "",
  },
];

const Ranks = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="system-window inline-block px-6 py-3 mb-6">
            <span className="font-orbitron text-primary text-sm tracking-widest">
              [SYSTÈME DE RANGS]
            </span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Monte en</span>
            <span className="text-secondary text-glow-purple ml-3">Grade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comme dans les donjons, ta persévérance déterminera ton rang
          </p>
        </div>

        {/* Ranks Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {ranks.map((rank, index) => (
            <div
              key={index}
              className={`quest-card rounded-xl p-6 flex items-center gap-6 ${rank.glow}`}
            >
              {/* Rank Badge */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${rank.color} flex items-center justify-center flex-shrink-0`}>
                <span className="font-orbitron text-2xl font-black text-white">
                  {rank.rank}
                </span>
              </div>

              {/* Rank Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <rank.icon className={`w-5 h-5 ${rank.textColor}`} />
                  <h3 className={`font-orbitron text-lg font-bold ${rank.textColor}`}>
                    {rank.name}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {rank.requirement}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="hidden md:block">
                <div className={`px-4 py-2 rounded font-orbitron text-xs ${rank.textColor} bg-current/10 border border-current/30`}>
                  {index === ranks.length - 1 ? 'ACTUEL' : 'À DÉBLOQUER'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ranks;
