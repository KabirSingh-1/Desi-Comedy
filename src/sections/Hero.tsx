import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Ticket, Calendar, Users, Building2, Smile } from "lucide-react";

const BACKGROUND_IMAGES = [
  "/carousel-images/img18.jpg",
  "/carousel-images/img6.jpg",
  "/carousel-images/img4.jpg",
  "/carousel-images/img9.jpg",
  "/carousel-images/img12.jpg",
  "/carousel-images/img14.jpg",
  "/carousel-images/img17.jpg",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4500); // Crossfade every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full bg-black overflow-hidden flex flex-col items-center justify-center pt-24 pb-32">

      {/* Background Image Slideshow & Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={BACKGROUND_IMAGES[currentImageIndex]}
            alt="Standup Comedy Background"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 0.8, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Dark gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10 pointer-events-none"></div>
      </div>

      <div className="w-full max-w-7xl relative z-20 flex flex-col items-center px-6 mt-10 md:mt-16">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#D98719] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6"
        >
          <Mic className="w-4 h-4 md:w-5 md:h-5 text-[#D98719]/80" />
          <span>DESI COMEDY LIVE</span>
        </motion.div>

        {/* Centered Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center font-black uppercase leading-[1.1] tracking-[0.03em] mb-8 drop-shadow-2xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-5 justify-center text-[clamp(2rem,3.5vw,3.5rem)] text-white">
            <span>LIVE COMEDY.</span>
            <span className="text-white/90">REAL PEOPLE.</span>
          </div>
          <span className="text-[#D98719] text-[clamp(2rem,3.5vw,3.5rem)] md:text-[clamp(2.2rem,4.5vw,4.2rem)] mt-2 drop-shadow-[0_4px_16px_rgba(217,135,25,0.6)]">
            UNFORGETTABLE NIGHTS.
          </span>
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-base md:text-xl max-w-3xl text-center leading-relaxed font-sans mb-10 md:mb-12"
        >
          Join thousands of comedy lovers for unforgettable live shows, exclusive perks and a community that feels like family.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto"
        >
          <a
            href="#join"
            className="w-full sm:w-auto bg-[#D98719] text-black font-black text-sm md:text-base uppercase tracking-widest px-8 md:px-10 py-4 md:py-4 rounded-xl hover:bg-[#F2A032] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-[0_8px_30px_-6px_rgba(217,135,25,0.4)]"
          >
            <Ticket size={20} strokeWidth={2.5} className="text-black/80" />
            BOOK A SHOW
          </a>
          <a
            href="#shows"
            className="w-full sm:w-auto bg-transparent border-[2.5px] border-[#D98719] text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 md:px-10 py-4 md:py-4 rounded-xl hover:bg-[#D98719]/10 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)] backdrop-blur-sm"
          >
            <Calendar size={20} strokeWidth={2.5} className="text-[#D98719]" />
            SEE ALL SHOWS
          </a>
        </motion.div>

        {/* Floating Dark Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl mt-16 md:mt-24 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]"
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start lg:justify-center">
            <div className="text-[#D98719]">
              <Ticket size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-white">100+</span>
              <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">LIVE SHOWS</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10"></div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:justify-center">
            <div className="text-[#D98719]">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-white">5000+</span>
              <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">HAPPY MEMBERS</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10"></div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:justify-center">
            <div className="text-[#D98719]">
              <Building2 size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-white">50+</span>
              <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">CITIES</span>
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-white/10"></div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:justify-center mt-4 md:mt-0">
            <div className="text-[#D98719]">
              <Smile size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-xl text-white leading-tight">COUNTLESS<br />MEMORIES</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
