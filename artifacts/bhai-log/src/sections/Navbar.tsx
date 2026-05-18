import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-white text-xl tracking-tight leading-none">
              DESI
            </span>
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-white text-xl tracking-tight leading-none">
                COMEDY
              </span>
              <span className="bg-red-600 text-white text-[9px] font-black px-1 py-[1px] rounded-sm leading-none tracking-wide">
                LIVE
              </span>
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7 font-sans text-xs font-bold tracking-widest text-white/80">
          <a href="#benefits" className="hover:text-yellow-400 transition-colors uppercase">Bhai Log Benefits</a>
          <a href="#how-it-works" className="hover:text-yellow-400 transition-colors uppercase">How It Works</a>
          <a href="#rewards" className="hover:text-yellow-400 transition-colors uppercase">Rewards</a>
          <a href="#social-proof" className="hover:text-yellow-400 transition-colors uppercase">Galery</a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors uppercase">FAQ</a>
        </div>

        <a
          href="#join"
          className="bg-yellow-400 text-black px-5 py-2.5 font-display font-black text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          style={{ boxShadow: "0 0 20px rgba(250,204,21,0.4)" }}
        >
          JOIN BHAI LOG <span className="text-base">⚡</span>
        </a>
      </div>
    </motion.nav>
  );
}
