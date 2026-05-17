import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-secondary/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-tight mb-8">
            EVERY COMIC NEEDS AN AUDIENCE.<br />
            <span className="text-primary text-neon">EVERY BHAI NEEDS BHAI LOG.</span>
          </h2>
          
          <a href="#join" className="inline-block bg-primary text-primary-foreground px-10 py-5 font-display font-bold text-2xl uppercase hover:bg-yellow-400 transition-all neon-glow skew-x-[-5deg] hover:scale-110 active:scale-95 mb-24">
            <div className="skew-x-[5deg]">JOIN BHAI LOG TODAY ⚡</div>
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mt-12">
          <div className="font-display font-bold text-2xl tracking-tighter text-white mb-6 md:mb-0">
            BHAI<span className="text-primary">LOG</span>
          </div>
          
          <div className="flex gap-6 font-display uppercase tracking-widest text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter/X</a>
          </div>
          
          <div className="text-muted-foreground text-sm font-sans mt-6 md:mt-0">
            © {new Date().getFullYear()} Desi Comedy Live. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
