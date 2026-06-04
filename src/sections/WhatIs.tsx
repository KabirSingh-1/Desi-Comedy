import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

export function WhatIs() {
  return (
    <section id="what-is" className="bg-background overflow-hidden pt-16 md:pt-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── LEFT: Clean Image Presentation ── */}
        <div className="relative max-w-xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/carousel-images/img10.jpg"
              alt="Jolly Bhai on stage"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Stamp Overlay */}
            <div className="absolute bottom-6 right-6 w-20 h-20 bg-primary rounded-full flex flex-col items-center justify-center text-primary-foreground rotate-12 shadow-lg border-2 border-white/20">
              <span className="font-black text-[9px] uppercase tracking-widest leading-none mt-1">BHAI LOG</span>
              <span className="text-xl my-1">👑</span>
              <span className="font-black text-[9px] uppercase tracking-widest leading-none">FAMILY</span>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-card border border-border p-6 rounded-xl shadow-xl max-w-[280px]"
          >
            <p className="text-foreground/90 font-medium italic leading-relaxed text-sm md:text-base">
              "Comedy is not just jokes, it's connection."
            </p>
            <p className="text-primary text-sm font-bold mt-3">— Jolly Bhai</p>
          </motion.div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className="flex flex-col gap-6 mt-12 lg:mt-0 relative">
          
          {/* Decorative SVG at right end */}
          <motion.svg 
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-0 right-0 md:-right-8 lg:-right-16 w-20 h-20 md:w-32 md:h-32 text-primary/10 pointer-events-none z-0" 
            viewBox="0 0 100 100" fill="currentColor"
          >
            <path d="M50 0 L60 35 L95 25 L65 50 L85 85 L50 65 L15 85 L35 50 L5 25 L40 35 Z" />
          </motion.svg>

          {/* Heading */}
          <motion.div {...fadeUp(0.1)} className="relative z-10">
            <h2 className="font-black uppercase leading-[0.9] tracking-normal flex flex-wrap items-baseline gap-x-4 gap-y-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}>
              <span className="text-foreground">WHAT IS</span>
              <span className="text-primary flex items-center gap-3">
                BHAILOG?
              </span>
            </h2>
          </motion.div>

          {/* Tag Pill */}
          <motion.div {...fadeUp(0.2)}>
            <div className="inline-flex items-center bg-foreground text-background px-5 py-2 text-sm font-bold rounded-full gap-2">
              BhaiLog means <span className="text-primary font-black ml-1">Bhai Ke Log.</span>
            </div>
          </motion.div>

          {/* Body text */}
          <motion.p {...fadeUp(0.3)} className="text-foreground/80 text-lg leading-relaxed max-w-lg">
            Any gender, any nationality – agar aapko Jolly Bhai ke jokes pasand hai aur aap
            uski journey ko support karna chahte ho, toh aap already mere BhaiLog ho! <span className="text-red-500">❤️</span>
          </motion.p>

          {/* Statement box */}
          <motion.div
            {...fadeUp(0.4)}
            className="border-l-4 border-primary pl-6 py-2 mt-4"
          >
            <p className="font-black text-foreground text-xl md:text-2xl uppercase leading-snug tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              THIS ISN'T JUST A DISCOUNT CLUB.
              <br />
              IT'S FAMILY. IT'S MADNESS. IT'S US.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="mt-24 border-t border-border bg-foreground/[0.02]">
        <div className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 items-start">
          {bottomItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3"
            >
              <div className="text-3xl mb-1">{item.icon}</div>
              <div className="text-foreground font-bold text-sm uppercase tracking-widest leading-tight">
                {item.title}
              </div>
              <div className="text-foreground/60 text-sm leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bottomItems = [
  {
    icon: "👥",
    title: "We Laugh Together",
    desc: "Live shows that bring us closer.",
  },
  {
    icon: "🎁",
    title: "Insider Access",
    desc: "Things we share before the world sees it.",
  },
  {
    icon: "🏆",
    title: "Win Cool Stuff",
    desc: "Merch, shoutouts, giveaways & more.",
  },
  {
    icon: "🤘",
    title: "Support The Journey",
    desc: "Your support keeps Jolly Bhai going.",
  },
  {
    icon: "🙂",
    title: "We Are Bhai Log",
    desc: "A community built on laughter & love.",
  },
];
