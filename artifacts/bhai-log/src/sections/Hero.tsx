import { motion } from "framer-motion";
import heroImage from "@assets/image_1779032112481.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 overflow-hidden flex items-center">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-4">
            An exclusive founders club by Desi Comedy Live
          </div>
          
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.9] text-white uppercase">
            NOT JUST COMEDY FANS.<br />
            <span className="text-primary text-neon">YOU'RE BHAI LOG.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-lg mt-4">
            The inner circle for those who live for the laughs. Get raw, unfiltered access, insane perks, and become part of the most unhinged comedy community.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a href="#join" className="bg-primary text-primary-foreground px-8 py-4 font-display font-bold text-xl uppercase hover:bg-yellow-400 transition-all neon-glow skew-x-[-5deg] hover:scale-105 active:scale-95">
              <div className="skew-x-[5deg]">JOIN BHAI LOG ⚡</div>
            </a>
            <a href="#rewards" className="bg-transparent border-2 border-white/20 text-white px-8 py-4 font-display font-bold text-xl uppercase hover:bg-white/10 transition-all skew-x-[-5deg] hover:scale-105 active:scale-95">
              <div className="skew-x-[5deg]">GET FOUNDER ACCESS</div>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-white/10 pt-8">
            <Stat label="Members" value="5000+" />
            <Stat label="Sold Out Shows" value="250+" />
            <Stat label="Top Comedians" value="50+" />
            <Stat label="Audience Laughs" value="∞" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative z-10 clip-rough bg-card border-4 border-primary p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src={heroImage} 
              alt="Bhai Log Comedy" 
              className="w-full h-auto object-cover filter contrast-125 saturate-120"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center pl-2 neon-glow-red animate-pulse">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent" />
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-primary text-black font-display font-black text-xl px-4 py-2 rotate-12 shadow-xl border-2 border-black"
          >
            JOLLY BHAI
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 font-['Caveat',cursive] text-secondary text-3xl md:text-4xl -rotate-12 bg-black/80 px-4 py-2 border border-secondary"
          >
            Watch The Madness ⤴
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
      <div className="font-display font-bold text-3xl text-white">{value}</div>
      <div className="font-mono text-xs text-muted-foreground uppercase">{label}</div>
    </div>
  );
}
