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
    desc: "Groups of 4 or more get deep discounts on every live show.",
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
    badge: "48H",
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
    isJoinNow: true,
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

        {/* ── CARDS GRID (3 × 2) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => {
            if (card.isJoinNow) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative overflow-hidden rounded-2xl border-2 border-primary border-dashed bg-card shadow-sm flex flex-col items-start p-8 transition-all duration-300 hover:border-solid hover:bg-primary/5 hover:shadow-lg group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-primary/[0.02] group-hover:bg-primary/[0.08] transition-colors" />
                  
                  {/* Icon area */}
                  <div className="relative z-10 mb-6 flex items-center justify-between w-full">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-md">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 flex flex-col mb-4">
                    <span className="font-black text-foreground text-xl md:text-2xl uppercase leading-none tracking-wide mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      JOIN THE FAMILY
                    </span>
                    <span className="font-black text-primary text-xl md:text-2xl uppercase leading-none tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      BECOME BHAI LOG
                    </span>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-foreground/80 leading-relaxed mt-auto font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    Free to join. Always will be.
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </p>
                  <a href="#join" className="absolute inset-0 z-20"></a>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm flex flex-col items-start p-8 transition-all duration-300 hover:border-primary hover:shadow-lg group"
              >
                {/* Icon area */}
                <div className="relative z-10 mb-6 flex items-center justify-between w-full">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {card.icon}
                  </div>
                  {card.badge && (
                    <span className="text-primary font-black text-2xl leading-none opacity-80" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="relative z-10 flex flex-col mb-4">
                  <span className="font-black text-foreground text-xl md:text-2xl uppercase leading-none tracking-wide mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {card.title}
                  </span>
                  <span className="font-black text-primary text-xl md:text-2xl uppercase leading-none tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {card.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="relative z-10 text-foreground/70 text-base leading-relaxed mt-auto font-medium">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>



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
