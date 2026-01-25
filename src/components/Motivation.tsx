import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Je ne suis pas devenu fort parce que j'étais spécial. Je suis devenu spécial parce que je suis devenu fort.",
    author: "Sung Jin-Woo",
  },
  {
    text: "La différence entre un chasseur de rang E et un chasseur de rang S, c'est la volonté de ne jamais abandonner.",
    author: "Philosophie des Chasseurs",
  },
  {
    text: "Chaque quête complétée est un pas vers ta transformation. Arise.",
    author: "Le Système",
  },
];

const Motivation = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="system-window inline-block px-6 py-3 mb-6">
            <span className="font-orbitron text-secondary text-sm tracking-widest">
              [MOTIVATION]
            </span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Paroles de</span>
            <span className="text-primary text-glow ml-3">Chasseurs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="system-window rounded-xl p-8 relative group hover:border-secondary/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{quote.text}"
              </blockquote>
              <cite className="text-primary font-orbitron text-sm not-italic">
                — {quote.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motivation;
