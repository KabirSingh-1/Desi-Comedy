import { motion } from "framer-motion";
import concertImage from "@assets/image_1779084650600.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

const cards = [
  {
    icon: <PercentIcon />,
    iconColor: "red",
    title: "DEEP DISCOUNTS",
    subtitle: "ON EVERY SHOW",
    desc: "Special discounts on every live show.",
  },
  {
    icon: <TicketIcon />,
    iconColor: "yellow",
    title: "BUY 1 GET 1",
    subtitle: "ON SELECT SHOWS",
    desc: "BOGO tickets on select shows.",
  },
  {
    icon: <ClockIcon />,
    iconColor: "yellow",
    title: "48 HOURS",
    subtitle: "EARLY ACCESS",
    desc: "48 hours advance tickets before anyone else.",
    badge: "48h",
  },
  {
    icon: <GiftIcon />,
    iconColor: "yellow",
    title: "EXCLUSIVE",
    subtitle: "MERCH",
    desc: "Special merchandise gifts for members.",
  },
  {
    icon: <ClapperIcon />,
    iconColor: "yellow",
    title: "BEHIND THE",
    subtitle: "SCENES",
    desc: "Exclusive BTS clips before going on social media.",
  },
  {
    icon: <MegaphoneIcon />,
    iconColor: "red",
    title: "SHOUTOUTS &",
    subtitle: "SPECIAL MENTIONS",
    desc: "Get shoutouts on our shows & socials.",
  },
  {
    icon: <GiftIcon />,
    iconColor: "yellow",
    title: "MONTHLY",
    subtitle: "GIVEAWAYS",
    desc: "Monthly drawing of exclusive merch.",
  },
  {
    icon: <TshirtIcon />,
    iconColor: "yellow",
    title: "4 SHOWS =",
    subtitle: "MERCH",
    desc: "Attend 4 shows in a year & get branded merch.",
  },
  {
    icon: <StarIcon />,
    iconColor: "yellow",
    title: "FIRST DIBS ON",
    subtitle: "SPECIAL DROPS",
    desc: "Members-only drops & hidden offers.",
  },
  {
    icon: <PeopleIcon />,
    iconColor: "yellow",
    title: "PRIORITY COMMUNITY",
    subtitle: "ACCESS",
    desc: "Be the first to know, be the first to grab.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-black py-16 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="relative flex items-start justify-between mb-10">

          {/* Top-left: BHAI LOG ONLY badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 border-2 border-yellow-400 p-3 flex flex-col items-center justify-center gap-1 hidden md:flex"
            style={{ boxShadow: "0 0 16px rgba(250,204,21,0.35), inset 0 0 16px rgba(250,204,21,0.05)" }}
          >
            <span className="text-yellow-400 text-2xl">👑</span>
            <span className="text-yellow-400 font-display font-black text-sm uppercase leading-tight text-center">
              BHAI LOG<br />ONLY
            </span>
          </motion.div>

          {/* Center heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center px-4"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-red-600 text-sm font-bold tracking-widest">★</span>
              <span className="text-red-600 text-sm font-bold uppercase tracking-widest">Amazing Perks For Our</span>
              <span className="text-red-600 text-sm font-bold tracking-widest">★</span>
            </div>
            <h2 className="font-display font-black uppercase leading-none" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
              <span className="text-yellow-400">BHAI LOG </span>
              <span className="text-white">FAMILY</span>
            </h2>
            <p className="text-white/70 italic mt-2 text-base md:text-lg">
              More laughs. More access. More madness.
            </p>
          </motion.div>

          {/* Top-right: crown doodles + handwritten note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 hidden md:flex flex-col items-end gap-1"
          >
            <div className="flex gap-1 text-3xl">
              <span>👑</span><span>👑</span>
            </div>
            <div className="text-right" style={{ fontFamily: "'Caveat', cursive" }}>
              <p className="text-white text-base leading-snug">Yeh sab sirf</p>
              <p className="text-white text-base leading-snug">BhaiLog ke liye!</p>
              {/* Arrow */}
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="ml-auto mt-0.5 opacity-80">
                <path d="M32 4 C20 4 4 12 4 24" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M2 20 L4 26 L9 23" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ── CARDS GRID (5 × 2) ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141414] flex flex-col items-start p-4 md:p-5 cursor-default group transition-all duration-300 hover:border-yellow-400/40"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              {/* Background concert photo – very dark overlay */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                <img
                  src={concertImage}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ objectPosition: i % 2 === 0 ? "top" : "center" }}
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Icon area */}
              <div className="relative z-10 mb-3 flex items-center gap-2">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg ${
                    card.iconColor === "red"
                      ? "text-red-500"
                      : "text-yellow-400"
                  }`}
                  style={
                    card.iconColor === "red"
                      ? { filter: "drop-shadow(0 0 6px rgba(239,68,68,0.7))" }
                      : { filter: "drop-shadow(0 0 6px rgba(250,204,21,0.5))" }
                  }
                >
                  {card.icon}
                </div>
                {card.badge && (
                  <span className="text-yellow-400 font-display font-black text-xl leading-none">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="relative z-10 flex flex-col mb-2">
                <span className="font-display font-black text-yellow-400 text-sm md:text-base uppercase leading-tight">
                  {card.title}
                </span>
                <span className="font-display font-black text-white text-sm md:text-base uppercase leading-tight">
                  {card.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-white/50 text-xs leading-snug">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 bg-[#111111] border border-white/10 rounded-xl flex flex-col md:flex-row items-center overflow-hidden"
        >
          {/* Left: comedian image + handwritten text */}
          <div className="relative flex-shrink-0 flex items-end">
            <img
              src={concertImage}
              alt="Jolly Bhai"
              className="h-28 md:h-36 w-auto object-cover object-top"
              style={{ maxWidth: 120 }}
            />
            <div
              className="absolute bottom-2 left-[120px] md:left-[110px] text-white text-sm whitespace-nowrap"
              style={{ fontFamily: "'Caveat', cursive", textShadow: "1px 1px 6px rgba(0,0,0,0.9)" }}
            >
              BhaiLog ho,<br />toh mazza doga guna!
            </div>
          </div>

          {/* Center: movement text */}
          <div className="flex-1 text-center py-6 px-4">
            <p className="font-display font-black text-white text-2xl md:text-4xl uppercase leading-tight">
              NOT JUST AN AUDIENCE.
            </p>
            <p className="font-display font-black text-yellow-400 text-2xl md:text-4xl uppercase leading-tight flex items-center justify-center gap-3">
              WE'RE A MOVEMENT. <span className="text-white">👑</span>
            </p>
          </div>

          {/* Right: CTA box */}
          <div className="flex-shrink-0 bg-yellow-400 flex flex-col items-start justify-center px-6 py-5 gap-3 self-stretch">
            <div>
              <p className="text-black text-xs font-bold uppercase tracking-widest">Join the inner circle.</p>
              <p className="text-black font-display font-black text-xl md:text-2xl uppercase leading-tight">
                JOIN BHAI LOG! ⚡
              </p>
            </div>
            <a
              href="#join"
              className="bg-black text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 flex items-center gap-2 hover:bg-yellow-300 hover:text-black transition-all whitespace-nowrap"
            >
              <span className="text-base">👥</span> JOIN BHAI LOG NOW →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── Icon Components ─── */

function PercentIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z" />
      <path d="M24 16h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z" />
      <line x1="27" y1="5" x2="5" y2="27" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 11a3 3 0 0 1 0 10v2a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-10V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      <line x1="16" y1="7" x2="16" y2="9" />
      <line x1="16" y1="15" x2="16" y2="17" />
      <line x1="16" y1="23" x2="16" y2="25" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="13" />
      <polyline points="16 8 16 16 22 19" />
      <path d="M12 3 L10 1 M20 3 L22 1" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 28 12 28 12 12" />
      <rect x="4" y="8" width="24" height="5" rx="1" />
      <line x1="16" y1="8" x2="16" y2="28" />
      <path d="M16 8S14 4 11 4s-5 2-5 4 2 4 10 4" />
      <path d="M16 8s2-4 5-4 5 2 5 4-2 4-10 4" />
    </svg>
  );
}

function ClapperIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h24v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M4 10l4-8h16l4 8" />
      <line x1="12" y1="2" x2="10" y2="10" />
      <line x1="20" y1="2" x2="18" y2="10" />
      <circle cx="16" cy="20" r="4" />
      <polygon points="14 18 19 20 14 22" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 4L10 12H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4l18 8V4z" />
      <line x1="10" y1="12" x2="10" y2="20" />
      <path d="M14 20v6l4-3-4-3z" />
    </svg>
  );
}

function TshirtIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3a3 3 0 0 1-4.76 0H11L4 9l4 3v17h16V12l4-3-7-6z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="16 2 20.09 11.26 30 12.27 23 19.14 24.18 29.02 16 24.54 7.82 29.02 9 19.14 2 12.27 11.91 11.26 16 2" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="9" r="4" />
      <path d="M2 27v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <circle cx="22" cy="9" r="4" />
      <path d="M30 27v-2a4 4 0 0 0-4-4h-2" />
    </svg>
  );
}
