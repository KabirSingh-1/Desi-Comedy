import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ALL_IMAGES = [
  "/carousel-images/img10.jpg",
  "/carousel-images/img11.jpg",
  "/carousel-images/img12.jpg",
  "/carousel-images/img13.jpg",
  "/carousel-images/img14.jpg",
  "/carousel-images/img15.jpg",
  "/carousel-images/img16.jpg",
  "/carousel-images/img17.jpg",
];

export function ImageCarousel() {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices(prev => {
        const next = [...prev];
        const slotToReplace = Math.floor(Math.random() * 4);
        let newImageIndex;
        do {
          newImageIndex = Math.floor(Math.random() * ALL_IMAGES.length);
        } while (next.includes(newImageIndex));
        next[slotToReplace] = newImageIndex;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="what-is" className="py-16 md:py-24 bg-background relative border-b border-border/50">
      <div className="w-full max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-4"
          >
            <h2 className="font-black uppercase leading-[0.9] tracking-normal flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}>
              <span className="text-foreground">WHAT IS</span>
              <span className="text-primary">BHAILOG?</span>
            </h2>
          </motion.div>

          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="inline-flex items-center bg-foreground text-background px-5 py-2 text-sm font-bold rounded-full gap-2">
              BhaiLog means <span className="text-primary font-black ml-1">Bhai Ke Log.</span>
            </div>
          </motion.div>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Any gender, any nationality – agar aapko Jolly Bhai ke jokes pasand hai aur aap
            uski journey ko support karna chahte ho, toh aap already mere BhaiLog ho! <span className="text-red-500">❤️</span>
          </motion.p>

          {/* Statement box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-4 border-primary pl-6 py-2 text-left"
          >
            <p className="font-black text-foreground text-xl md:text-2xl uppercase leading-snug tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              IT'S FAMILY. IT'S MADNESS. IT'S US.
            </p>
          </motion.div>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px] lg:h-[700px]">

          {/* Main Large Feature (Left side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg h-[400px] md:h-auto cursor-pointer"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeIndices[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={ALL_IMAGES[activeIndices[0]]}
                alt="Main Comedy Event"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <span className="bg-primary text-primary-foreground text-xs font-black px-3 py-1 uppercase tracking-wider rounded-sm">Sold Out</span>
              <p className="mt-2 font-black uppercase text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}>San Francisco</p>
            </div>
          </motion.div>

          {/* Top Right Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg h-[250px] md:h-auto cursor-pointer"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeIndices[1]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={ALL_IMAGES[activeIndices[1]]}
                alt="Crowd cheering"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </AnimatePresence>
          </motion.div>

          {/* Top Right Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg h-[250px] md:h-auto cursor-pointer"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeIndices[2]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={ALL_IMAGES[activeIndices[2]]}
                alt="Standup setup"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </AnimatePresence>
          </motion.div>

          {/* Bottom Right Wide Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg h-[300px] md:h-auto cursor-pointer"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeIndices[3]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={ALL_IMAGES[activeIndices[3]]}
                alt="Audience chaos"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
