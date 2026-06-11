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
    <section id="rewards" className="bg-background overflow-hidden border-t border-border">

      {/* ── TOP BANNER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border-b border-border py-3 px-6 flex items-center justify-center gap-2"
      >
        <span className="text-yellow-400 text-sm font-bold">➜</span>
        <span className="text-foreground font-display font-bold text-sm uppercase tracking-wider">
          The more shows you attend, the more{" "}
          <span className="text-yellow-400">EPIC</span> it gets!
        </span>
      </motion.div>

      <div className="w-full max-w-[1440px] mx-auto px-6 py-12 grid md:grid-cols-[260px_1fr] gap-8 items-center">

        {/* ── LEFT: Heading block ── */}
        {/* ── LEFT: Heading block ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center h-full gap-6 pr-4 lg:pr-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 w-max shadow-sm">
            <span className="text-yellow-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Level Up Your Status 👑
            </span>
          </div>

          <h2 className="font-black uppercase leading-[0.85] tracking-tight flex flex-col" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 drop-shadow-sm text-5xl md:text-7xl">
              BHAI LOG
            </span>
            <span className="text-foreground text-5xl md:text-7xl">
              STATUS
            </span>
          </h2>

          <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-medium max-w-sm">
            Attend more shows. Unlock more <span className="text-yellow-500 font-bold underline decoration-yellow-500/30 underline-offset-4">madness!</span>
          </p>

          {/* Quote box */}
          <div className="relative mt-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border-l-4 border-yellow-400 rounded-r-2xl p-5 shadow-lg w-max pr-12">
            <div className="absolute top-0 right-2 text-6xl text-yellow-400/10 font-serif leading-none">"</div>
            <p className="text-foreground font-black text-sm md:text-base uppercase leading-relaxed tracking-widest relative z-10" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              COME TOGETHER.<br />
              LAUGH TOGETHER.<br />
              STAY TOGETHER.
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
              className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              {/* Show count header */}
              <div className="bg-card border-b border-border px-3 py-2 text-center">
                <p className="font-display font-black text-yellow-500 text-sm uppercase leading-none">{m.shows}</p>
                <p className="text-foreground/50 text-[9px] font-bold uppercase tracking-widest mt-1">{m.tag}</p>
              </div>

              {/* Icon area */}
              <div className="flex-1 flex items-center justify-center py-5 px-2">
                {m.icon}
              </div>

              {/* Desc */}
              <div className="px-3 pb-4 flex flex-col items-center text-center gap-3">
                <p className="text-foreground/70 font-medium text-[10px] leading-snug">{m.desc}</p>
                {/* Stars or infinity */}
                <div className="flex items-center justify-center gap-0.5 mt-auto">
                  {m.infinity ? (
                    <span className="text-yellow-500 font-black text-xl drop-shadow-sm leading-none">∞</span>
                  ) : (
                    <>
                      {[...Array(5)].map((_, j) => (
                        <span
                          key={j}
                          className="text-yellow-400 text-[12px] drop-shadow-sm leading-none"
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
      className="border border-border rounded-lg bg-card overflow-hidden"
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
        <span className="flex-1 text-foreground text-xs font-semibold leading-snug">{question}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`text-foreground/40 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-3 pl-12">
          <p className="text-foreground/50 text-xs leading-relaxed">{answer}</p>
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
      <div className="bg-card border-2 border-yellow-400/60 rounded-lg px-3 py-2 text-center" style={{ boxShadow: "0 0 10px rgba(250,204,21,0.2)" }}>
        <p className="text-yellow-400 font-black text-xs uppercase leading-none">SPECIAL</p>
        <p className="text-yellow-400 font-black text-xs uppercase leading-none">OFFER</p>
      </div>
    </div>
  );
}

function TshirtCard() {
  return (
    <div className="flex flex-col items-center justify-center h-16 gap-1">
      <span className="text-foreground/80 text-3xl">👕</span>
      <p className="text-foreground font-black text-[7px] uppercase tracking-tight text-center leading-none">DESI COMEDY<br /><span className="text-red-500">LIVE</span></p>
    </div>
  );
}

function VipBadge() {
  return (
    <div className="flex items-center justify-center h-16">
      <div className="bg-card border-2 border-yellow-400 rounded-lg px-4 py-2 text-center" style={{ boxShadow: "0 0 12px rgba(250,204,21,0.3)" }}>
        <p className="text-yellow-400 font-black text-base uppercase leading-none">VIP</p>
        <p className="text-foreground/70 font-bold text-[9px] uppercase tracking-widest leading-none mt-0.5">ACCESS</p>
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
