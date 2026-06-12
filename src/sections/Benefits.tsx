import { ReactNode } from "react";
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
    image: "/carousel-images/img1.jpg",
    rotate: "-rotate-1",
  },
  {
    icon: <TicketIcon />,
    title: "BUY 1 GET 1",
    subtitle: "ON SELECT SHOWS",
    desc: "BOGO tickets on select shows.",
    image: "/carousel-images/img2.jpg",
    rotate: "rotate-1",
  },
  {
    icon: <ClockIcon />,
    title: "48 HOURS",
    subtitle: "EARLY ACCESS",
    desc: "48 hours advance tickets before anyone else.",
    badge: "48H",
    image: "/carousel-images/img3.jpg",
    rotate: "-rotate-2",
  },
  {
    icon: <ClapperIcon />,
    title: "BEHIND THE",
    subtitle: "SCENES",
    desc: "Exclusive BTS clips before going on social media.",
    image: "/carousel-images/img4.jpg",
    rotate: "rotate-2",
  },
  {
    icon: <MegaphoneIcon />,
    title: "SHOUTOUTS &",
    subtitle: "SPECIAL MENTIONS",
    desc: "Get shoutouts on our shows & socials.",
    image: "/carousel-images/img5.jpg",
    rotate: "-rotate-1",
  },
  {
    isJoinNow: true,
    image: "/carousel-images/img6.jpg",
    rotate: "rotate-1",
  },
];

interface CardItem {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  desc?: string;
  badge?: string;
  image: string;
  rotate: string;
  isJoinNow?: boolean;
}

interface BenefitCardProps {
  card: CardItem;
  index: number;
  isMarquee?: boolean;
}

function BenefitCard({ card, index, isMarquee = false }: BenefitCardProps) {
  const cardContent = (() => {
    if (card.isJoinNow) {
      return (
        <div className="w-full flex flex-col text-left px-1 flex-1">
          <div className="mb-2">
            <span className="inline-block text-primary bg-primary/10 p-1.5 rounded-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
          </div>

          <div className="flex flex-col mb-2 leading-none">
            <span className="font-black text-foreground text-lg uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              JOIN THE FAMILY
            </span>
            <span className="font-black text-primary text-lg uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              BECOME BHAI LOG
            </span>
          </div>

          <p className="text-foreground/75 text-xs font-semibold uppercase tracking-wider leading-relaxed mt-1">
            Get early show access, secret discount codes, and community invites.
          </p>

          <p className="text-primary font-black uppercase tracking-widest text-[10px] flex items-center gap-2 mt-auto pt-4 group-hover:translate-x-1 transition-transform">
            Free to join. Always will be. →
          </p>
          <a href="#join" className="absolute inset-0 z-20" />
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col text-left px-1 flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-primary bg-primary/10 p-1.5 rounded-md flex-shrink-0">
            {card.icon}
          </span>
          {card.badge && (
            <span className="bg-primary/10 text-primary font-black px-2 py-0.5 text-xs rounded uppercase tracking-wider">
              {card.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col mb-2 leading-none">
          <span className="font-black text-foreground text-lg uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {card.title}
          </span>
          <span className="font-black text-primary text-lg uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {card.subtitle}
          </span>
        </div>

        <p className="text-foreground/75 text-xs font-semibold uppercase tracking-wider leading-relaxed mt-1">
          {card.desc}
        </p>
      </div>
    );
  })();

  const wrapperClass = card.isJoinNow
    ? `relative bg-card border-2 border-dashed border-primary/60 shadow-md p-4 pb-8 transition-all duration-300 flex flex-col items-center select-none cursor-pointer group ${card.rotate} ${isMarquee ? "w-[280px] md:w-[320px] flex-shrink-0" : "w-full flex-1"
    }`
    : `relative bg-card border border-border/80 shadow-md p-4 pb-8 transition-all duration-300 flex flex-col items-center select-none ${card.rotate} ${isMarquee ? "w-[280px] md:w-[320px] flex-shrink-0" : "w-full flex-1"
    }`;

  const tapeBg = card.isJoinNow
    ? "bg-primary/20 border-primary/30"
    : "bg-white/40 border-white/25";

  const element = (
    <div className={wrapperClass} style={{ borderRadius: "4px" }}>
      {/* Polaroid Tape */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 backdrop-blur-[1px] border shadow-sm rotate-2 z-20 pointer-events-none ${tapeBg}`} />

      {/* Photo container */}
      <div className="w-full aspect-square overflow-hidden bg-black/5 border border-black/10 rounded-sm relative mb-4">
        <img
          src={card.image}
          alt={card.isJoinNow ? "Join Bhai Log" : card.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${card.isJoinNow
              ? "group-hover:scale-105"
              : "grayscale-[10%] contrast-[105%] brightness-[102%]"
            }`}
        />
        {card.isJoinNow ? (
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/5 pointer-events-none" />
        )}
      </div>

      {cardContent}
    </div>
  );

  if (isMarquee) {
    return element;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ scale: 1.04, y: -8, rotate: 0, zIndex: 10 }}
      className="h-full flex"
    >
      {element}
    </motion.div>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="bg-background pt-8 pb-20 overflow-hidden">
      {/* ── HEADER ── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 mb-16">
        <div className="relative flex flex-col items-center justify-center text-center">
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
      </div>

      {/* ── DESKTOP CARDS GRID (lg and above) ── */}
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <BenefitCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>

      {/* ── MOBILE/TABLET SCROLLING MARQUEE (Below lg) ── */}
      <div className="lg:hidden relative w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-6 pr-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...cards, ...cards].map((card, i) => (
            <BenefitCard key={i} card={card} index={i} isMarquee />
          ))}
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
