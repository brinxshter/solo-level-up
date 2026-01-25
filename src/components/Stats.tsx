import { TrendingUp, Users, Target, Trophy } from "lucide-react";

const stats = [
  {
    label: "Chasseurs Actifs",
    value: "12,847",
    icon: Users,
    change: "+234 cette semaine",
  },
  {
    label: "Quêtes Complétées",
    value: "1.2M",
    icon: Target,
    change: "+15% ce mois",
  },
  {
    label: "Niveau Moyen",
    value: "47",
    icon: TrendingUp,
    change: "En progression",
  },
  {
    label: "Rangs S Atteints",
    value: "156",
    icon: Trophy,
    change: "Élite des chasseurs",
  },
];

const Stats = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="system-window rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary group-hover:text-glow transition-all">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-primary/70">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
