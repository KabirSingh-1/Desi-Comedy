import { motion } from "framer-motion";
import concertImage from "@assets/image_1779084650600.png";
import whatisImage from "@assets/image_1779084939015.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export function WhatIs() {
  return (
    <section id="what-is" className="bg-[#0d0d0d] overflow-hidden">

      {/* ── TOP BLOCK ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* ── LEFT: Photo collage ── */}
        <div className="relative h-[420px] md:h-[480px]">

          {/* Red tape strips */}
          <div className="absolute top-2 left-24 w-16 h-5 bg-red-600 rotate-[-8deg] z-30 opacity-90" />
          <div className="absolute top-0 right-16 w-14 h-5 bg-red-600 rotate-[5deg] z-30 opacity-90" />

          {/* Photo 1 – large, behind, rotated left (comedian on stage looking at crowd) */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, x: -30 }}
            whileInView={{ opacity: 1, rotate: -6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-6 left-0 w-52 md:w-60 bg-white p-2 pb-8 shadow-2xl z-10"
          >
            <img
              src={concertImage}
              alt="Comedian on stage"
              className="w-full h-36 md:h-44 object-cover object-top"
            />
          </motion.div>

          {/* Photo 2 – audience selfie, top-right, rotated right */}
          <motion.div
            initial={{ opacity: 0, rotate: 10, x: 30 }}
            whileInView={{ opacity: 1, rotate: 7, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute top-2 left-[170px] md:left-[200px] w-44 md:w-52 bg-white p-2 pb-8 shadow-2xl z-20"
          >
            <img
              src={concertImage}
              alt="Audience having fun"
              className="w-full h-32 md:h-40 object-cover object-center"
            />
          </motion.div>

          {/* Photo 3 – backstage/mirror shot, bottom-center, slight tilt */}
          <motion.div
            initial={{ opacity: 0, rotate: 5, y: 30 }}
            whileInView={{ opacity: 1, rotate: 3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="absolute bottom-10 left-[60px] md:left-[80px] w-48 md:w-56 bg-white p-2 pb-8 shadow-2xl z-20"
          >
            <div className="relative">
              <img
                src={concertImage}
                alt="Backstage moment"
                className="w-full h-36 md:h-44 object-cover object-bottom"
                style={{ filter: "saturate(0.8) brightness(0.9)" }}
              />
              {/* "Jolly Bhai" tag on jacket */}
              <div className="absolute bottom-2 right-2 bg-black text-white font-display font-black text-xs px-1.5 py-0.5 tracking-wide">
                JOLLY BHAI
              </div>
            </div>
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-8 right-4 md:right-0 w-44 bg-[#1a1a1a] border border-white/20 p-3 z-30 shadow-xl"
          >
            <p className="text-white/80 text-xs italic leading-snug">
              "Comedy is not just jokes, it's connection."
            </p>
            <p className="text-yellow-400 text-xs font-bold mt-1.5">— Jolly Bhai</p>
          </motion.div>

          {/* Sticky note */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-2 left-0 w-36 bg-yellow-300 p-3 z-30 shadow-lg"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <p className="text-black text-base font-bold leading-snug">
              Not just a show, it's a vibe. It's family.
            </p>
            <div className="mt-2 text-xl">🙂</div>
          </motion.div>

          {/* Circular stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-14 left-24 w-16 h-16 rounded-full border-2 border-red-600 flex flex-col items-center justify-center z-40 bg-black/60"
          >
            <span className="text-red-600 font-black text-[8px] uppercase tracking-wider text-center leading-none">BHAI LOG</span>
            <span className="text-yellow-400 text-sm mt-0.5">👑</span>
            <span className="text-red-600 font-black text-[8px] uppercase tracking-wider">FAMILY</span>
          </motion.div>
        </div>

        {/* ── RIGHT: Text content + cartoon ── */}
        <div className="relative flex flex-col gap-5">

          {/* Heading */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-black uppercase leading-[0.88]">
              <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
                WHAT IS
              </span>
              <span className="block text-yellow-400 flex items-center gap-3" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
                BHAILOG?
                <span className="text-3xl md:text-5xl text-white/80 font-black ml-1">👑</span>
              </span>
            </h2>
          </motion.div>

          {/* "BhaiLog means Bhai Ke Log" pill */}
          <motion.div {...fadeUp(0.2)}>
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-1.5 text-sm font-bold rounded-full gap-2">
              BhaiLog means{" "}
              <span className="text-yellow-300 font-black ml-1">Bhai Ke Log.</span>
            </div>
          </motion.div>

          {/* Body text */}
          <motion.p {...fadeUp(0.3)} className="text-white/75 text-base md:text-lg leading-relaxed max-w-md">
            Any gender, any nationality – agar aapko Jolly Bhai ke jokes pasand hai aur aap
            uski journey ko support karna chahte ho, toh aap already mere BhaiLog ho!{" "}
            <span className="text-red-500">❤️</span>
          </motion.p>

          {/* Statement box */}
          <motion.div
            {...fadeUp(0.4)}
            className="border-2 border-yellow-400 px-5 py-4 mt-2 relative"
          >
            {/* Brush stroke background feel */}
            <div className="absolute inset-0 bg-yellow-400/5" />
            <p className="font-display font-black text-white text-lg md:text-xl uppercase leading-snug relative">
              THIS ISN'T JUST A DISCOUNT CLUB.
              <br />
              IT'S FAMILY. IT'S MADNESS. IT'S US.
            </p>
          </motion.div>

          {/* Cartoon character - Jolly Bhai pointing illustration (CSS-built) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -right-4 bottom-0 hidden lg:block pointer-events-none"
            style={{ width: 130 }}
          >
            <img
              src={whatisImage}
              alt="Jolly Bhai"
              className="w-full object-contain"
              style={{
                clipPath: "inset(0 0 0 72%)",
                transform: "scaleX(-1) translateX(-40px)",
                width: 420,
                maxWidth: "none",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="border-t border-white/10 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-6 gap-6 items-start">
          {bottomItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1.5"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-white font-display font-black text-sm uppercase tracking-wide leading-tight">
                {item.title}
              </div>
              <div className="text-white/50 text-xs leading-snug">{item.desc}</div>
            </motion.div>
          ))}

          {/* CTA yellow box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-yellow-400 p-4 flex items-center justify-center"
          >
            <p
              className="text-black font-black uppercase text-sm leading-snug text-center"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem" }}
            >
              Aandar Aao, Apne Logon Ke Saath!
            </p>
          </motion.div>
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
    title: "We Get Insider Access",
    desc: "Things we share before the world sees it.",
  },
  {
    icon: "🏆",
    title: "We Win Cool Stuff",
    desc: "Merch, shoutouts, giveaways & more.",
  },
  {
    icon: "🤘",
    title: "We Support The Journey",
    desc: "Your support keeps Jolly Bhai going.",
  },
  {
    icon: "🙂",
    title: "We Are Bhai Log",
    desc: "A community built on laughter & love.",
  },
];
