import { ArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[scan-line_4s_linear_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* System Alert Badge */}
        <div className="animate-fade-up mb-8">
          <span className="level-badge animate-pulse-glow">
            <Zap className="w-4 h-4" />
            SYSTÈME ACTIVÉ
          </span>
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-up-delay-1 font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6">
          <span className="text-foreground">ARISE</span>
          <br />
          <span className="text-primary text-glow">TRAINING</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-rajdhani">
          Comme Sung Jin-Woo, transforme ta faiblesse en puissance.
        </p>
        <p className="animate-fade-up-delay-2 text-lg text-muted-foreground/70 max-w-xl mx-auto mb-12 font-rajdhani">
          Complète tes quêtes quotidiennes. Monte de niveau. Deviens le plus fort.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary-glow">
            Commencer l'Entraînement
          </button>
          <button className="btn-system rounded-lg">
            Voir les Quêtes
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-primary/50" />
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
    </section>
  );
};

export default Hero;
