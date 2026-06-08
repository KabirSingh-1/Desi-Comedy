import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-background overflow-hidden px-6 pt-20 pb-24 md:pb-32">

      {/* Background geometric shapes */}
      <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/15 pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-primary/15 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-5 mt-10 md:mt-16">

        {/* Top small text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-primary font-bold text-xs md:text-sm tracking-[0.2em] uppercase"
        >
          <span>🎤</span>
          <span>DESI COMEDY LIVE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative font-black uppercase leading-[0.9] tracking-normal flex flex-col items-center mt-2"
          style={{ fontSize: "clamp(3.8rem, 11vw, 8.5rem)", fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {/* Sparkle top-left */}
          <motion.svg
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -top-6 -left-8 md:-top-8 md:-left-16 w-8 h-8 md:w-12 md:h-12 text-primary/40 pointer-events-none"
            viewBox="0 0 24 24" fill="none"
          >
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor" />
          </motion.svg>

          {/* Sparkle bottom-right */}
          <motion.svg
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="absolute -bottom-2 -right-6 md:-bottom-4 md:-right-12 w-6 h-6 md:w-8 md:h-8 text-foreground/20 pointer-events-none"
            viewBox="0 0 24 24" fill="none"
          >
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor" />
          </motion.svg>

          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            <span className="text-foreground">HASSO</span>
            <span className="text-primary relative inline-block isolate">
              KHELO
              <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-auto text-blue-500 -z-10" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                <path d="M0,10 Q50,22 100,2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <span className="text-foreground mt-1 md:mt-2">JEETO</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground/80 text-base md:text-[19px] max-w-2xl mt-4 leading-relaxed px-4"
        >
          Bay Area's boldest Bollywood comedy night — live music,
          <br className="hidden md:block" />
          crowd chaos, and Bollywood Bingo™ like you've never seen it.
        </motion.p>

        {/* Buttons Section with Decorative Arrow */}
        <div className="relative mt-8 w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#join"
              className="w-full sm:w-auto bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 md:py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center relative overflow-hidden group"
              style={{ boxShadow: "0 8px 24px -6px var(--color-primary)" }}
            >
              <span className="relative z-10">GET TICKETS</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
            <a
              href="#shows"
              className="w-full sm:w-auto bg-transparent border-2 border-foreground text-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 md:py-4 rounded-full hover:bg-foreground/5 transition-all flex items-center justify-center"
            >
              SEE ALL SHOWS
            </a>
          </motion.div>

          {/* Decorative Sleek Arrow pointing to buttons */}
          <motion.svg
            initial={{ opacity: 0, strokeDasharray: "0 100", strokeDashoffset: 0 }}
            animate={{ opacity: 1, strokeDasharray: "100 100", strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="absolute -top-8 -right-8 md:-top-12 md:-right-16 w-12 md:w-16 h-auto text-primary/60 hidden md:block pointer-events-none"
            viewBox="0 0 100 100" fill="none"
          >
            <path d="M10 20 Q 80 20 80 80" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M60 75 L 80 80 L 85 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </div>

      </div>
    </section>
  );
}
