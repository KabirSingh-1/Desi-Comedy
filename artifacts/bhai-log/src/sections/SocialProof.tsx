import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The energy at the last show was insane! Getting those early access tickets was the best decision ever.",
    name: "Rohan M.",
    role: "OG Bhai Log",
    rating: 5
  },
  {
    quote: "I thought it was just a mailing list, but the behind-the-scenes content makes you feel like you're actually part of the crew.",
    name: "Sneha P.",
    role: "Joined 3 months ago",
    rating: 5
  },
  {
    quote: "Scored VIP tickets through the Bhai Log drop when everyone else was complaining it sold out in 2 minutes. Worth it.",
    name: "Kabir S.",
    role: "4 Shows Attended",
    rating: 5
  }
];

export function SocialProof() {
  return (
    <section className="py-24 relative bg-[#0a0a0a] overflow-hidden clip-rough border-y border-white/10 my-12 z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[20vw] text-white/5 whitespace-nowrap pointer-events-none select-none mix-blend-overlay">
        CROWD ENERGY
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight">
            PEOPLE AREN'T JUST WATCHING SHOWS. <span className="text-secondary text-neon-red">THEY'RE BECOMING BHAI LOG.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Decorative SOLD OUT Stamp */}
          <motion.div 
            initial={{ opacity: 0, scale: 2, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring", bounce: 0.5 }}
            className="absolute -top-12 -right-8 md:-right-12 z-20 font-display font-black text-5xl md:text-6xl text-secondary border-8 border-secondary p-4 rotate-[-15deg] opacity-80 mix-blend-screen pointer-events-none neon-glow-red"
          >
            SOLD OUT
          </motion.div>

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-white/10 p-8 flex flex-col relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="text-primary/20 w-16 h-16 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="font-sans text-lg text-white mb-8 flex-grow italic relative z-10">
                "{t.quote}"
              </p>
              
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="font-display font-bold text-xl text-white tracking-wide">{t.name}</div>
                <div className="font-mono text-xs text-primary uppercase">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
