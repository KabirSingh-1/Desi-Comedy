import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex-shrink-0 flex items-center group">
          <img 
            src="/logo.jpeg" 
            alt="Desi Comedy Live Logo" 
            className="h-12 md:h-16 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
          />
        </a>

        <div className="hidden md:flex items-center gap-7 font-sans text-xs font-bold tracking-widest text-foreground/80">
          <a href="#benefits" className="hover:text-primary transition-colors uppercase">Bhai Log Benefits</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors uppercase">How It Works</a>
          <a href="#rewards" className="hover:text-primary transition-colors uppercase">Rewards</a>
          <a href="#social-proof" className="hover:text-primary transition-colors uppercase">Galery</a>
          <a href="#faq" className="hover:text-primary transition-colors uppercase">FAQ</a>
        </div>

        <a
          href="#join"
          className="bg-primary text-primary-foreground px-5 py-2.5 font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 rounded-md"
          style={{ boxShadow: "0 4px 20px -6px var(--color-primary)" }}
        >
          JOIN BHAI LOG <span className="text-base">⚡</span>
        </a>
      </div>
    </motion.nav>
  );
}
