import { Skull, Swords, Clock, ChevronRight } from "lucide-react";

const SpecialMission = () => {
  const scrollToQuests = () => {
    const questsSection = document.getElementById('daily-quests');
    if (questsSection) {
      questsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="system-window inline-block px-6 py-3 mb-6 border-destructive/50">
            <span className="font-orbitron text-destructive text-sm tracking-widest animate-pulse">
              [MISSION SPÉCIALE DÉTECTÉE]
            </span>
          </div>
        </div>

        {/* Special Mission Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative system-window rounded-2xl p-8 md:p-12 border-2 border-destructive/30 bg-gradient-to-br from-destructive/5 to-transparent animate-pulse-glow">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-destructive/20 to-transparent rounded-bl-full" />
            
            {/* Mission Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-destructive to-destructive/50 flex items-center justify-center animate-pulse">
                <Skull className="w-8 h-8 text-destructive-foreground" />
              </div>
              <div>
                <div className="font-orbitron text-xs text-destructive tracking-widest mb-1">
                  RANG: S
                </div>
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                  Mission de l'Éveil
                </h3>
              </div>
            </div>

            {/* Mission Description */}
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
              Tu as été choisi par le Système. Complète les 4 quêtes quotidiennes de Sung Jin-Woo 
              pour débloquer ton véritable potentiel et devenir un Chasseur de Rang S.
            </p>

            {/* Mission Objectives */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                <Swords className="w-5 h-5 text-primary" />
                <span className="text-foreground">100 Pompes • 100 Squats • 100 Abdos</span>
              </div>
              <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">10km de Course</span>
              </div>
            </div>

            {/* Rewards */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
                <span className="font-orbitron text-primary text-sm">+250 XP</span>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-2">
                <span className="font-orbitron text-secondary text-sm">Titre: "Éveil"</span>
              </div>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-2">
                <span className="font-orbitron text-destructive text-sm">Rang S Débloqué</span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToQuests}
              className="group btn-primary-glow w-full md:w-auto flex items-center justify-center gap-3"
            >
              <span>Commencer l'Entraînement</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Warning */}
            <div className="mt-6 text-center md:text-left">
              <span className="text-destructive/70 font-orbitron text-xs tracking-wider">
                ⚠️ AVERTISSEMENT : L'échec de la mission entraînera une pénalité sévère
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMission;
