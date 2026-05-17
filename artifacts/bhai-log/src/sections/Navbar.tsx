import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <Link href="/">
        <div className="font-display font-bold text-2xl tracking-tighter cursor-pointer text-white">
          BHAI<span className="text-primary">LOG</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold tracking-wider">
        <a href="#benefits" className="text-white hover:text-primary transition-colors">BENEFITS</a>
        <a href="#how-it-works" className="text-white hover:text-primary transition-colors">HOW IT WORKS</a>
        <a href="#rewards" className="text-white hover:text-primary transition-colors">REWARDS</a>
        <a href="#faq" className="text-white hover:text-primary transition-colors">FAQ</a>
      </div>

      <a href="#join" className="bg-primary text-primary-foreground px-6 py-2 font-display font-bold text-lg tracking-wide uppercase hover:bg-yellow-400 transition-all neon-glow skew-x-[-10deg] hover:scale-105 active:scale-95">
        <div className="skew-x-[10deg]">Join Bhai Log ⚡</div>
      </a>
    </motion.nav>
  );
}
