import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

const cards = [
  {
    icon: <PercentIcon />,
    title: "DEEP DISCOUNTS",
    subtitle: "ON EVERY SHOW",
    desc: "Special discounts on every live show.",
  },
  {
    icon: <TicketIcon />,
    title: "BUY 1 GET 1",
    subtitle: "ON SELECT SHOWS",
    desc: "BOGO tickets on select shows.",
  },
  {
    icon: <ClockIcon />,
    title: "48 HOURS",
    subtitle: "EARLY ACCESS",
    desc: "48 hours advance tickets before anyone else.",
    badge: "48h",
  },
  {
    icon: <GiftIcon />,
    title: "EXCLUSIVE",
    subtitle: "MERCH",
    desc: "Special merchandise gifts for members.",
  },
  {
    icon: <ClapperIcon />,
    title: "BEHIND THE",
    subtitle: "SCENES",
    desc: "Exclusive BTS clips before going on social media.",
  },
  {
    icon: <MegaphoneIcon />,
    title: "SHOUTOUTS &",
    subtitle: "SPECIAL MENTIONS",
    desc: "Get shoutouts on our shows & socials.",
  },
  {
    icon: <GiftIcon />,
    title: "MONTHLY",
    subtitle: "GIVEAWAYS",
    desc: "Monthly drawing of exclusive merch.",
  },
  {
    icon: <TshirtIcon />,
    title: "4 SHOWS =",
    subtitle: "MERCH",
    desc: "Attend 4 shows in a year & get branded merch.",
  },
  {
    icon: <StarIcon />,
    title: "FIRST DIBS ON",
    subtitle: "SPECIAL DROPS",
    desc: "Members-only drops & hidden offers.",
  },
  {
    icon: <PeopleIcon />,
    title: "PRIORITY COMMUNITY",
    subtitle: "ACCESS",
    desc: "Be the first to know, be the first to grab.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-background py-20 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="relative flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">★ Amazing Perks For Our ★</span>
            </div>
            <h2 className="font-black uppercase leading-[0.9] tracking-normal flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 6.5rem)" }}>
              <span className="text-primary">BHAI LOG</span>
              <span className="text-foreground">FAMILY</span>
            </h2>
            <p className="text-foreground/70 italic mt-4 text-lg md:text-xl">
              More laughs. More access. More madness.
            </p>
          </motion.div>
        </div>

        {/* ── CARDS GRID (5 × 2) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col items-start p-6 cursor-default transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              {/* Icon area */}
              <div className="relative z-10 mb-5 flex items-center justify-between w-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {card.icon}
                </div>
                {card.badge && (
                  <span className="text-primary font-black text-xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="relative z-10 flex flex-col mb-3">
                <span className="font-black text-foreground text-lg md:text-xl uppercase leading-tight tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {card.title}
                </span>
                <span className="font-black text-primary text-lg md:text-xl uppercase leading-tight tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {card.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-foreground/70 text-sm leading-relaxed mt-auto">
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
          className="mt-16 bg-primary rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-xl"
        >
          {/* Center: movement text */}
          <div className="flex-1 text-center md:text-left py-8 md:py-12 px-8 md:px-12">
            <p className="font-black text-primary-foreground/90 text-2xl md:text-4xl uppercase leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              NOT JUST AN AUDIENCE.
            </p>
            <p className="font-black text-background text-3xl md:text-5xl uppercase leading-tight flex items-center justify-center md:justify-start gap-3 mt-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              WE'RE A MOVEMENT. 👑
            </p>
          </div>

          {/* Right: CTA box */}
          <div className="bg-background flex flex-col items-center md:items-start justify-center px-10 py-10 gap-4 self-stretch border-l-4 border-black/10">
            <div className="text-center md:text-left">
              <p className="text-foreground/60 text-xs font-bold uppercase tracking-widest mb-1">Join the inner circle.</p>
              <p className="text-foreground font-black text-2xl md:text-3xl uppercase leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                JOIN BHAI LOG! ⚡
              </p>
            </div>
            <a
              href="#join"
              className="bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center whitespace-nowrap shadow-lg"
            >
              <span className="mr-2 text-lg">👥</span> JOIN NOW
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
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z" />
      <path d="M24 16h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z" />
      <line x1="27" y1="5" x2="5" y2="27" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 11a3 3 0 0 1 0 10v2a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-10V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      <line x1="16" y1="7" x2="16" y2="9" />
      <line x1="16" y1="15" x2="16" y2="17" />
      <line x1="16" y1="23" x2="16" y2="25" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="13" />
      <polyline points="16 8 16 16 22 19" />
      <path d="M12 3 L10 1 M20 3 L22 1" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 4L10 12H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4l18 8V4z" />
      <line x1="10" y1="12" x2="10" y2="20" />
      <path d="M14 20v6l4-3-4-3z" />
    </svg>
  );
}

function TshirtIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3a3 3 0 0 1-4.76 0H11L4 9l4 3v17h16V12l4-3-7-6z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="16 2 20.09 11.26 30 12.27 23 19.14 24.18 29.02 16 24.54 7.82 29.02 9 19.14 2 12.27 11.91 11.26 16 2" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="9" r="4" />
      <path d="M2 27v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <circle cx="22" cy="9" r="4" />
      <path d="M30 27v-2a4 4 0 0 0-4-4h-2" />
    </svg>
  );
}
