import { motion } from "framer-motion";
import heroImage from "@assets/image_1779084650600.png";
import { FiTag, FiClock, FiUsers, FiMic } from "react-icons/fi";
import { BsTicketPerforated } from "react-icons/bs";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Main hero area */}
      <div className="relative flex-1 flex items-stretch min-h-[calc(100vh-90px)] pt-[64px]">
        
        {/* Comedian full-bleed image — right 60% */}
        <div className="absolute inset-0 left-0 md:left-[40%]">
          <img
            src={heroImage}
            alt="Jolly Bhai on stage"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient fade from left so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Left content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="w-full md:w-[55%] flex flex-col gap-5 py-12">

            {/* Exclusive Founders Club tag */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2">
              <span className="text-yellow-400 font-display font-bold text-sm uppercase tracking-widest">
                Exclusive Founders Club
              </span>
              <span className="text-yellow-400 text-lg">👑</span>
            </motion.div>

            {/* Main heading */}
            <motion.div {...fadeUp(0.2)}>
              <h1 className="font-display font-black uppercase leading-[0.88]">
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                >
                  NOT JUST
                </span>
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                >
                  COMEDY FANS.
                </span>
                <span
                  className="block text-yellow-400 relative"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                >
                  YOU'RE
                </span>
                <span
                  className="block text-yellow-400 relative"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                >
                  BHAI LOG.
                  {/* Red underline */}
                  <span
                    className="absolute -bottom-1 left-0 bg-red-600"
                    style={{ height: "4px", width: "65%" }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-white/75 text-base md:text-lg max-w-[480px] leading-relaxed mt-2"
            >
              Join Bhai Log – an exclusive club by{" "}
              <span className="text-yellow-400 font-semibold">Desi Comedy Live</span>{" "}
              and unlock crazy discounts, early access, backstage content, giveaways and much more.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-3 mt-1"
            >
              <Pill icon={<FiTag className="text-yellow-400" />} label="DEEP DISCOUNTS" sub="ON EVERY SHOW" />
              <Pill icon={<BogoBadge />} label="BUY 1 GET 1" sub="ON SELECT SHOWS" />
              <Pill icon={<FiClock className="text-yellow-400" />} label="48-HOUR EARLY" sub="ACCESS TO TICKETS" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mt-2">
              <a
                href="#join"
                className="bg-yellow-400 text-black font-display font-black text-base uppercase px-7 py-3.5 flex items-center gap-2 hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 tracking-wide"
                style={{ boxShadow: "0 0 24px rgba(250,204,21,0.45)" }}
              >
                JOIN BHAI LOG <span className="text-lg">⚡</span>
              </a>
              <a
                href="#social-proof"
                className="bg-transparent border border-white/40 text-white font-display font-bold text-base uppercase px-7 py-3.5 flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 tracking-wide"
              >
                <span className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
                  <span
                    className="border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-0.5"
                    style={{ display: "inline-block" }}
                  />
                </span>
                WATCH BHAI LOG IN ACTION
              </a>
            </motion.div>

            {/* Free to join */}
            <motion.div {...fadeUp(0.65)} className="flex items-center gap-1.5 text-white/40 text-xs">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <rect x="1" y="5" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.5 5V3.5a2.5 2.5 0 015 0V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Free to join. Always will be.
            </motion.div>
          </div>
        </div>

        {/* Right annotations (handwritten style) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="absolute top-24 right-6 md:right-12 z-20 flex flex-col items-end gap-1 hidden md:flex"
        >
          <span
            className="text-white text-xl font-bold text-right leading-snug"
            style={{ fontFamily: "'Caveat', cursive", textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Jokes Humare,<br />Log Tumhare!
          </span>
          {/* Arrow */}
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="mr-10 mt-1 opacity-80">
            <path
              d="M20 0 C20 0 35 20 20 40 C10 52 5 55 10 58"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M8 54 L10 60 L15 57" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* "BE PART OF THE MADNESS" badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute bottom-20 right-6 md:right-16 z-20 hidden md:block"
        >
          <div
            className="bg-black/90 border border-white/20 px-5 py-3 max-w-[200px] text-right"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <p className="text-white font-display font-black text-xl uppercase leading-tight">
              BE PART OF<br />THE{" "}
              <span className="text-yellow-400">MADNESS.</span>
            </p>
          </div>
          {/* Curved arrow annotation */}
          <svg
            className="absolute -left-12 -top-8 opacity-70"
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
          >
            <path
              d="M45 5 C30 0 10 10 5 30"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M3 26 L5 33 L11 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-[#111111] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          <StatItem
            icon={<FiUsers className="text-red-500 text-xl" />}
            value="5,000+"
            label="Bhai Log Members"
            delay={0.2}
          />
          <StatItem
            icon={<BsTicketPerforated className="text-red-500 text-xl" />}
            value="50+"
            label="Sold Out Shows in Bay Area"
            delay={0.3}
          />
          <StatItem
            icon={
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#EF4444" strokeWidth="1.8" />
                <path d="M7 11 C8 9 10 8 11 11 C12 14 14 13 15 11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            }
            value="10K+"
            label="Audience Laughs Shared"
            delay={0.4}
          />
          <StatItem
            icon={<FiMic className="text-red-500 text-xl" />}
            value="TOP"
            label={<>Comedians<br />Epic Nights. Non Stop Laughter.</>}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/15 px-3 py-2 rounded-sm">
      <span className="flex-shrink-0">{icon}</span>
      <div>
        <div className="text-white font-bold text-[10px] uppercase tracking-wider leading-none">{label}</div>
        <div className="text-white/50 text-[9px] uppercase tracking-wide leading-none mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function BogoBadge() {
  return (
    <div className="bg-yellow-400 text-black font-black text-[9px] px-1 py-0.5 rounded-sm leading-none tracking-tight">
      BOGO
    </div>
  );
}

function StatItem({
  icon,
  value,
  label,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-3 px-6 first:pl-0 last:pr-0"
    >
      <span className="flex-shrink-0">{icon}</span>
      <div>
        <div className="font-display font-black text-white text-2xl leading-none">{value}</div>
        <div className="text-white/50 text-xs leading-tight mt-0.5">{label}</div>
      </div>
    </motion.div>
  );
}
