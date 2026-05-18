import { motion } from "framer-motion";
import concertImage from "@assets/image_1779084650600.png";

const milestones = [
  {
    shows: "1 SHOW",
    tag: "WELCOME BHAI",
    icon: <RockHandIcon />,
    desc: "Welcome perks & exclusive offers.",
    stars: 1,
    cardBg: "#1a1a1a",
  },
  {
    shows: "2 SHOWS",
    tag: "VIBE CHECK",
    icon: <SpecialOfferCard />,
    desc: "Unlock special discounts & offers.",
    stars: 2,
    cardBg: "#1a1a1a",
  },
  {
    shows: "4 SHOWS",
    tag: "TRUE BHAI",
    icon: <TshirtCard />,
    desc: "Get exclusive branded merch.",
    stars: 3,
    cardBg: "#1a1a1a",
  },
  {
    shows: "6 SHOWS",
    tag: "VIP BHAI",
    icon: <VipBadge />,
    desc: "Priority seating, early access & more.",
    stars: 4,
    cardBg: "#1a1a1a",
  },
  {
    shows: "10 SHOWS",
    tag: "OG BHAI",
    icon: <CrownNeon />,
    desc: "Meet & greet invites, exclusive experiences.",
    stars: 5,
    cardBg: "#1a1a1a",
  },
  {
    shows: "15+ SHOWS",
    tag: "LEGEND BHAI",
    icon: <GoldMic />,
    desc: "Founders shoutouts, special surprises & more!",
    stars: 0,
    cardBg: "#1a1a1a",
    infinity: true,
  },
];

export function Rewards() {
  return (
    <section id="rewards" className="bg-black overflow-hidden border-t border-white/10">

      {/* ── TOP BANNER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#111] border-b border-white/10 py-3 px-6 flex items-center justify-center gap-2"
      >
        <span className="text-yellow-400 text-sm font-bold">➜</span>
        <span className="text-white font-display font-bold text-sm uppercase tracking-wider">
          The more shows you attend, the more{" "}
          <span className="text-yellow-400">EPIC</span> it gets!
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[260px_1fr] gap-8 items-center">

        {/* ── LEFT: Heading block ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-widest">
            <span>→</span> LEVEL UP YOUR <span>👑</span>
          </div>
          <h2 className="font-display font-black uppercase leading-[0.88]">
            <span className="block text-yellow-400" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>BHAI LOG</span>
            <span className="block text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>STATUS</span>
          </h2>
          <p className="text-white/70 text-sm leading-snug">
            Attend more shows. Unlock more{" "}
            <span className="text-yellow-400 underline decoration-yellow-400/50">madness!</span>
          </p>
          {/* Quote box */}
          <div className="border border-white/20 rounded-full px-5 py-3 bg-[#1a1a1a] mt-2">
            <p className="text-white font-display font-black text-xs uppercase leading-tight text-center tracking-wide">
              COME TOGETHER.<br />LAUGH TOGETHER.<br />STAY TOGETHER.
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT: Milestone cards row ── */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col rounded-xl border border-white/15 bg-[#141414] overflow-hidden"
            >
              {/* Show count header */}
              <div className="bg-[#1f1f1f] border-b border-white/10 px-3 py-2 text-center">
                <p className="font-display font-black text-yellow-400 text-xs uppercase leading-none">{m.shows}</p>
                <p className="text-white/50 text-[9px] uppercase tracking-widest mt-0.5">{m.tag}</p>
              </div>

              {/* Icon area */}
              <div className="flex-1 flex items-center justify-center py-4 px-2">
                {m.icon}
              </div>

              {/* Desc */}
              <div className="px-3 pb-3 flex flex-col items-center text-center gap-2">
                <p className="text-white/60 text-[10px] leading-snug">{m.desc}</p>
                {/* Stars or infinity */}
                <div className="flex items-center justify-center gap-0.5">
                  {m.infinity ? (
                    <span className="text-yellow-400 font-black text-base">∞</span>
                  ) : (
                    <>
                      {[...Array(6)].map((_, j) => (
                        <span
                          key={j}
                          className={`text-[10px] ${j < m.stars ? "text-yellow-400" : "text-white/10"}`}
                        >★</span>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MIDDLE BLOCK: BTS + FAQ + Final CTA ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

          {/* ── COL 1: Behind the Scenes ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="font-display font-black text-yellow-400 text-xl uppercase leading-tight">
                BEHIND THE SCENES.
              </h3>
              <h3 className="font-display font-black text-yellow-400 text-xl uppercase leading-tight">
                BEFORE EVERYONE ELSE.
              </h3>
            </div>

            {/* 3 polaroids */}
            <div className="flex gap-2">
              {["Backstage Pass", "Raw Moments", "Unfiltered Jokes"].map((label, i) => (
                <div
                  key={label}
                  className="flex-1 bg-white p-1 pb-5 shadow-lg relative"
                  style={{ transform: `rotate(${[-3, 2, -2][i]}deg)` }}
                >
                  <img
                    src={concertImage}
                    alt={label}
                    className="w-full object-cover"
                    style={{ height: 70, objectPosition: i === 0 ? "top" : "center" }}
                  />
                  <p className="absolute bottom-1 left-0 right-0 text-center text-black text-[8px] font-bold">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Perk tiles */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 bg-[#141414] border border-white/10 rounded-xl p-3">
                <span className="text-yellow-400 text-xl flex-shrink-0">🎁</span>
                <div>
                  <p className="text-white font-bold text-xs uppercase leading-tight">MONTHLY MERCH GIVEAWAY.</p>
                  <p className="text-white/50 text-[10px] mt-0.5 leading-snug">Lucky winners. Exclusive merch. Only for BhaiLog.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#141414] border border-white/10 rounded-xl p-3">
                <span className="text-yellow-400 text-xl flex-shrink-0">👕</span>
                <div>
                  <p className="text-white font-bold text-xs uppercase leading-tight">ATTEND 4 SHOWS IN A YEAR</p>
                  <p className="text-white/50 text-[10px] mt-0.5 leading-snug">& get official Desi Comedy Live branded merch.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── COL 2: FAQ ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <h3 className="font-display font-black text-white text-2xl uppercase">FAQ</h3>
              <svg width="18" height="26" viewBox="0 0 18 26" fill="none" className="text-yellow-400">
                <path d="M10 2L2 14h7L6 24l12-14h-8z" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              {faqItems.map((item, i) => (
                <FaqAccordion key={i} question={item.q} answer={item.a} delay={i * 0.05} />
              ))}
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <p className="text-white/50 text-xs" style={{ fontFamily: "'Caveat', cursive", fontSize: "0.95rem" }}>
                More questions? We got you ←
              </p>
              <a
                href="mailto:hello@desicomedylive.com"
                className="bg-yellow-400 text-black font-bold text-xs uppercase px-4 py-2 flex items-center gap-1 hover:bg-yellow-300 transition-colors rounded-sm"
              >
                CONTACT US →
              </a>
            </div>
          </motion.div>

          {/* ── COL 3: Final CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="font-display font-black text-white uppercase leading-tight" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                YOU DON'T JUST WATCH.
              </h3>
              <h3 className="font-display font-black text-white uppercase leading-tight flex items-center gap-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                YOU BELONG. <span className="text-red-500">❤️</span>
              </h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              BhaiLog isn't just a club. It's a movement of people who believe in laughter, stories & our Jolly Bhai!
            </p>

            {/* Comedian pointing (using image) */}
            <div className="relative h-32 overflow-hidden rounded-xl">
              <img
                src={concertImage}
                alt="Jolly Bhai"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* CTA box */}
            <div
              className="rounded-xl overflow-hidden border-2 border-yellow-400"
              style={{ boxShadow: "0 0 24px rgba(250,204,21,0.3)" }}
            >
              <div className="bg-[#141414] px-5 py-4 text-center">
                <p className="font-display font-black text-yellow-400 text-2xl uppercase leading-none">
                  JOIN BHAI LOG TODAY!
                </p>
              </div>
              <div className="bg-red-700 px-5 py-3 text-center">
                <a
                  href="#join"
                  className="font-display font-black text-white text-sm uppercase tracking-widest hover:text-yellow-400 transition-colors"
                >
                  BE PART OF SOMETHING EPIC.
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Accordion ─── */
function FaqAccordion({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="border border-white/10 rounded-lg bg-[#141414] overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
      >
        <span className="w-5 h-5 rounded-full border border-yellow-400/60 flex items-center justify-center flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#FACC15" strokeWidth="1" />
            <path d="M6 4v4M4 6h4" stroke="#FACC15" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="flex-1 text-white text-xs font-semibold leading-snug">{question}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`text-white/40 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-3 pl-12">
          <p className="text-white/50 text-xs leading-relaxed">{answer}</p>
        </div>
      )}
    </motion.div>
  );
}

const faqItems = [
  { q: "Is BhaiLog membership free?", a: "Yes! Absolutely free to join. Always will be." },
  { q: "How do discounts & offers work?", a: "You'll get exclusive promo codes via WhatsApp before tickets go live to the public." },
  { q: "Will I get updates on WhatsApp?", a: "Yes — show announcements, exclusive drops, and surprise gifts. No spam, promise." },
  { q: "Can I cancel anytime?", a: "Of course. Opt out whenever. But trust us — you won't want to." },
  { q: "Is this only for Bay Area shows?", a: "BhaiLog is global. Physical shows are city-specific but drops & content are for everyone." },
  { q: "How do I unlock rewards?", a: "Rewards stack with every show you attend. Check the timeline above for each milestone." },
];

/* ─── Milestone Icon Components ─── */

function RockHandIcon() {
  return (
    <div className="text-yellow-400 text-4xl flex items-center justify-center h-16">
      🤘
    </div>
  );
}

function SpecialOfferCard() {
  return (
    <div className="flex items-center justify-center h-16">
      <div className="bg-[#222] border-2 border-yellow-400/60 rounded-lg px-3 py-2 text-center" style={{ boxShadow: "0 0 10px rgba(250,204,21,0.2)" }}>
        <p className="text-yellow-400 font-black text-xs uppercase leading-none">SPECIAL</p>
        <p className="text-yellow-400 font-black text-xs uppercase leading-none">OFFER</p>
      </div>
    </div>
  );
}

function TshirtCard() {
  return (
    <div className="flex flex-col items-center justify-center h-16 gap-1">
      <span className="text-white/80 text-3xl">👕</span>
      <p className="text-white font-black text-[7px] uppercase tracking-tight text-center leading-none">DESI COMEDY<br /><span className="text-red-500">LIVE</span></p>
    </div>
  );
}

function VipBadge() {
  return (
    <div className="flex items-center justify-center h-16">
      <div className="bg-[#1a0a0a] border-2 border-yellow-400 rounded-lg px-4 py-2 text-center" style={{ boxShadow: "0 0 12px rgba(250,204,21,0.3)" }}>
        <p className="text-yellow-400 font-black text-base uppercase leading-none">VIP</p>
        <p className="text-white/70 font-bold text-[9px] uppercase tracking-widest leading-none mt-0.5">ACCESS</p>
      </div>
    </div>
  );
}

function CrownNeon() {
  return (
    <div className="flex items-center justify-center h-16">
      <span
        className="text-4xl"
        style={{ filter: "drop-shadow(0 0 8px rgba(239,68,68,0.8))" }}
      >
        👑
      </span>
    </div>
  );
}

function GoldMic() {
  return (
    <div className="flex items-center justify-center h-16">
      <span
        className="text-4xl"
        style={{ filter: "drop-shadow(0 0 8px rgba(250,204,21,0.8))" }}
      >
        🎤
      </span>
    </div>
  );
}

/* need useState */
import { useState } from "react";
