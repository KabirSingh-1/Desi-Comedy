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
            <span className="block text-foreground" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>STATUS</span>
          </h2>
          <p className="text-foreground/70 text-sm leading-snug">
            Attend more shows. Unlock more{" "}
            <span className="text-yellow-400 underline decoration-yellow-400/50">madness!</span>
          </p>
          {/* Quote box */}
          <div className="border border-border rounded-full px-5 py-3 bg-card mt-2">
            <p className="text-foreground font-display font-black text-xs uppercase leading-tight text-center tracking-wide">
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
              className="flex flex-col rounded-xl border border-border bg-card overflow-hidden"
            >
              {/* Show count header */}
              <div className="bg-card border-b border-border px-3 py-2 text-center">
                <p className="font-display font-black text-yellow-400 text-xs uppercase leading-none">{m.shows}</p>
                <p className="text-foreground/50 text-[9px] uppercase tracking-widest mt-0.5">{m.tag}</p>
              </div>

              {/* Icon area */}
              <div className="flex-1 flex items-center justify-center py-4 px-2">
                {m.icon}
              </div>

              {/* Desc */}
              <div className="px-3 pb-3 flex flex-col items-center text-center gap-2">
                <p className="text-foreground/60 text-[10px] leading-snug">{m.desc}</p>
                {/* Stars or infinity */}
                <div className="flex items-center justify-center gap-0.5">
                  {m.infinity ? (
                    <span className="text-yellow-400 font-black text-base">∞</span>
                  ) : (
                    <>
                      {[...Array(6)].map((_, j) => (
                        <span
                          key={j}
                          className={`text-[10px] ${j < m.stars ? "text-yellow-400" : "text-foreground/10"}`}
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

      {/* ── MIDDLE BLOCK: BTS + Final CTA ── */}
      <div className="border-t border-border bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        {/* Decorative ambient glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-32 grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

          {/* ── COL 1: Behind the Scenes ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10 relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative">
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Exclusive Access</p>
              </div>
              <h3 className="font-display font-black text-foreground text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight">
                BEHIND THE <span className="text-yellow-400 drop-shadow-md">SCENES.</span>
                <br />
                BEFORE EVERYONE <span className="text-yellow-400 drop-shadow-md">ELSE.</span>
              </h3>
            </div>

            {/* 3 polaroids */}
            <div className="flex gap-4 relative z-10 pt-4 pb-8">
              {[
                { label: "Backstage Pass", img: "/carousel-images/img14.jpg" },
                { label: "Raw Moments", img: "/carousel-images/img15.jpg" },
                { label: "Unfiltered Jokes", img: "/carousel-images/img16.jpg" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -15, rotate: 0, scale: 1.08, zIndex: 20 }}
                  className="flex-1 bg-[#f8f9fa] p-2 pb-8 shadow-2xl relative border border-black/10 rounded-sm cursor-pointer transition-all duration-300"
                  style={{ transform: `rotate(${[-6, 4, -4][i]}deg)` }}
                >
                  <div className="w-full aspect-square overflow-hidden mb-3">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover grayscale-[0.2] contrast-[1.15]"
                    />
                  </div>
                  <p className="absolute bottom-2 left-0 right-0 text-center text-black/90 font-black tracking-wider uppercase drop-shadow-sm" style={{ fontFamily: "'Caveat', cursive", fontSize: "16px" }}>
                    {item.label}
                  </p>
                  
                  {/* Tape strip effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm" style={{ transform: `rotate(${[3, -2, 4][i]}deg)` }} />
                </motion.div>
              ))}
            </div>

            {/* Perk tiles */}
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-5 bg-background/50 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-card hover:border-yellow-400/30 transition-all group">
                <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-yellow-400/20 transition-all">
                  <span className="text-yellow-400 text-2xl drop-shadow-md">🎁</span>
                </div>
                <div>
                  <p className="text-foreground font-black text-[15px] uppercase tracking-wider leading-none">MONTHLY MERCH GIVEAWAY</p>
                  <p className="text-foreground/50 text-xs mt-1.5 font-medium">Exclusive drops for BhaiLog only.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-background/50 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-card hover:border-yellow-400/30 transition-all group">
                <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-yellow-400/20 transition-all">
                  <span className="text-yellow-400 text-2xl drop-shadow-md">👕</span>
                </div>
                <div>
                  <p className="text-foreground font-black text-[15px] uppercase tracking-wider leading-none">ATTEND 4 SHOWS IN A YEAR</p>
                  <p className="text-foreground/50 text-xs mt-1.5 font-medium">Unlock official Desi Comedy Live apparel.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── COL 2: Final CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="font-display font-black text-foreground uppercase leading-[0.85] text-[3.5rem] lg:text-[4.5rem] tracking-tight">
                YOU DON'T JUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">WATCH.</span>
              </h3>
              <h3 className="font-display font-black text-foreground uppercase leading-[0.85] text-[3.5rem] lg:text-[4.5rem] tracking-tight mt-2 flex items-center gap-4">
                YOU BELONG. <span className="text-red-600 animate-pulse drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">❤️</span>
              </h3>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed max-w-lg font-medium">
              BhaiLog isn't just a club. It's a movement of people who believe in laughter, unscripted stories, and raw comedy.
            </p>

            {/* Comedian pointing (using image) */}
            <div className="relative h-56 lg:h-72 w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10 group cursor-pointer">
              <img
                src="/carousel-images/img17.jpg"
                alt="Jolly Bhai"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-display font-black text-3xl uppercase tracking-widest drop-shadow-2xl">
                  "JOKES HUMARE.<br/><span className="text-yellow-400">LOG TUMHARE."</span>
                </p>
              </div>
            </div>

            {/* Premium VIP Ticket CTA */}
            <div className="mt-4 relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 z-20">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              
              <div className="relative bg-[#0a0a0a] rounded-3xl flex flex-col border border-white/10 shadow-2xl">
                {/* Top Half: Content */}
                <div className="relative px-8 pt-10 pb-8 text-center bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-t-3xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">VIP Access Open</span>
                  </div>

                  <h4 className="font-display font-black text-white text-4xl md:text-5xl uppercase tracking-tight leading-none drop-shadow-lg mb-2">
                    JOIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm">BHAI LOG</span>
                  </h4>
                  <p className="text-white/50 text-sm font-medium uppercase tracking-widest">The ultimate founders club.</p>
                </div>

                {/* Perforated Divider */}
                <div className="relative h-8 bg-transparent w-full flex items-center justify-between z-10 -my-4">
                  {/* Left Cutout */}
                  <div className="absolute left-[-2px] w-8 h-8 rounded-full bg-background border border-white/10 shadow-[inset_-3px_0_6px_rgba(0,0,0,0.6)]" />
                  {/* Dashed Line */}
                  <div className="w-full h-[2px] border-b-2 border-dashed border-white/10 mx-6" />
                  {/* Right Cutout */}
                  <div className="absolute right-[-2px] w-8 h-8 rounded-full bg-background border border-white/10 shadow-[inset_3px_0_6px_rgba(0,0,0,0.6)]" />
                </div>

                {/* Bottom Half: Button Area */}
                <div className="relative px-6 sm:px-8 pt-8 pb-8 bg-[#09090b] flex flex-col items-center rounded-b-3xl z-0">
                  <a
                    href="#join"
                    className="relative overflow-hidden w-full rounded-xl group/btn transform transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 transition-opacity duration-300 group-hover/btn:opacity-90" />
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]" />
                    <div className="relative px-4 sm:px-6 py-4 flex items-center justify-center gap-2 sm:gap-3 border border-red-500/50">
                      <span className="font-display font-black text-white text-base sm:text-lg lg:text-xl uppercase tracking-widest drop-shadow-md">
                        BE PART OF SOMETHING EPIC
                      </span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white transform transition-transform duration-300 group-hover/btn:translate-x-1 flex-shrink-0">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </a>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mt-4">Secure your spot today.</p>
                </div>
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
