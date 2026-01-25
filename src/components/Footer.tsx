import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-orbitron text-xl font-bold">
              <span className="text-foreground">ARISE</span>
              <span className="text-primary ml-1">TRAINING</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Quêtes</a>
            <a href="#" className="hover:text-primary transition-colors">Rangs</a>
            <a href="#" className="hover:text-primary transition-colors">Communauté</a>
            <a href="#" className="hover:text-primary transition-colors">À propos</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span className="font-orbitron">© 2024</span> Inspiré par Solo Leveling
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-orbitron">
            [ SYSTÈME DE QUÊTES QUOTIDIENNES ACTIVÉ ]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
