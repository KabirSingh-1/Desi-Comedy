import { motion } from "framer-motion";
import { Ticket, Star, Crown, Diamond, Zap } from "lucide-react";

const milestones = [
  { shows: 1, title: "Welcome Perks", icon: Ticket },
  { shows: 2, title: "Special Offer Unlock", icon: Star },
  { shows: 4, title: "Exclusive Merch", icon: Zap },
  { shows: 6, title: "VIP Status", icon: Crown },
  { shows: 10, title: "Founder Perks", icon: Diamond },
];

export function Rewards() {
  return (
    <section id="rewards" className="py-24 relative overflow-hidden bg-black z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase">
            LEVEL UP YOUR <span className="text-primary text-neon">BHAI LOG STATUS</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-2 bg-primary -translate-y-1/2 hidden md:block neon-glow shadow-[0_0_15px_rgba(250,204,21,0.5)]" 
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
                  className="flex flex-row md:flex-col items-center gap-4 text-left md:text-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-card border-2 border-primary flex items-center justify-center neon-glow group-hover:scale-110 transition-transform bg-black z-10 relative">
                    <Icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                    <div className="absolute -top-2 -right-2 bg-secondary text-white font-mono text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border border-black">
                      {m.shows}
                    </div>
                  </div>
                  
                  <div className="flex-1 md:flex-none">
                    <div className="font-mono text-xs text-muted-foreground uppercase mb-1">
                      {m.shows} {m.shows === 1 ? 'Show' : 'Shows'}
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-white uppercase group-hover:text-primary transition-colors">
                      {m.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
