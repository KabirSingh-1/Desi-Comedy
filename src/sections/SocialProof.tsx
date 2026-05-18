import { motion } from "framer-motion";
import concertImage from "@assets/image_1779084650600.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

const testimonials = [
  {
    name: "Priya",
    location: "San Jose",
    quote: "Best comedy nights in Bay Area! Feels like home every single time.",
    avatar: "P",
  },
  {
    name: "Rohan",
    location: "Fremont",
    quote: "Came for the jokes, stayed for the vibe. Now I'm BhaiLog for life!",
    avatar: "R",
  },
  {
    name: "Neha",
    location: "Sunnyvale",
    quote: "Jolly Bhai's energy is next level! Every show is a therapy session.",
    avatar: "N",
  },
  {
    name: "Naran",
    location: "Santa Clara",
    quote: "The community, the laughs, the people – sab mast! Can't miss any show now.",
    avatar: "N",
  },
];

const stats = [
  { icon: <TicketIcon />, value: "50+", label: "SOLD OUT SHOWS", sub: "IN BAY AREA" },
  { icon: <PeopleIcon />, value: "1000+", label: "SHOWS. LAUGHS.", sub: "MEMORIES." },
  { icon: <MicIcon />, value: "25+", label: "TOP COMEDIANS", sub: "FEATURED" },
  { icon: <PinIcon />, value: "15+", label: "CITIES & VENUES", sub: "PACKED" },
];

const soldOutCities = [
  "SAN JOSE", "FREMONT", "SANTA CLARA",
  "SUNNYVALE", "BERKELEY", "PALO ALTO",
];

const avatarColors = ["#C0392B", "#1A5276", "#1E8449", "#7D3C98"];

export function SocialProof() {
  return (
    <section id="social-proof" className="bg-[#0d0d0d] border-t border-white/10 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-14 flex flex-col gap-10">

        {/* ── ROW 1: Heading + Video Thumbs + Thank You box ── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_220px] gap-6 items-start">

          {/* Heading */}
          <motion.div {...fadeUp(0)} className="flex flex-col gap-2">
            <h2 className="font-display font-black uppercase leading-[0.9]">
              <span className="block text-white" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                LIVE LAUGHS.
              </span>
              <span className="block text-yellow-400 flex items-center gap-2" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                REAL PEOPLE.<span className="text-red-500 text-2xl">●</span>
                <span className="text-white text-3xl">👑</span>
              </span>
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Some moments with our{" "}
              <span
                className="text-yellow-400 font-semibold"
                style={{ textDecoration: "underline", textDecorationColor: "rgba(250,204,21,0.5)" }}
              >
                amazing BhaiLog!
              </span>
            </p>
          </motion.div>

          {/* 4 Video Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className="relative rounded-xl overflow-hidden border border-white/10 cursor-pointer group"
                style={{ aspectRatio: "9/12" }}
              >
                <img
                  src={concertImage}
                  alt={`Show moment ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: i % 2 === 0 ? "top" : "center" }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <div
                      className="border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Thank You Bhai Log box */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col gap-2">
            <div
              className="border-2 border-red-500 rounded-xl p-4 relative"
              style={{ boxShadow: "0 0 18px rgba(239,68,68,0.4), inset 0 0 18px rgba(239,68,68,0.05)" }}
            >
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Thank You</p>
              <p className="font-display font-black text-yellow-400 text-2xl uppercase leading-none">
                BHAI LOG!
              </p>
              <p className="text-white text-xs font-semibold mt-1 leading-snug">
                YOU MAKE THIS<br />MADNESS POSSIBLE!
              </p>
              {/* Heart */}
              <span className="absolute top-2 right-3 text-red-500 text-lg">❤️</span>
            </div>

            {/* Concert photo below box */}
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={concertImage} alt="Show crowd" className="w-full h-full object-cover object-bottom" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Sticky handwritten note */}
            <div
              className="bg-yellow-300 p-2 -rotate-2 shadow-lg"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              <p className="text-black text-sm leading-snug font-bold">
                Har show mein pyaar badhta jaa raha hai! ❤️
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2: Testimonials + Rating ── */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Left label */}
          <div className="md:hidden">
            <h3 className="font-display font-black text-white text-xl uppercase">
              WHAT OUR <span className="text-yellow-400">BHAI LOG</span> SAY
            </h3>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-display font-black text-white text-xl uppercase hidden md:block">
              WHAT OUR <span className="text-yellow-400">BHAI LOG</span> SAY
            </h3>

            {/* 4 testimonial cards in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-[#141414] border border-white/10 rounded-xl p-4 flex flex-col gap-3 hover:border-yellow-400/30 transition-colors"
                >
                  {/* Avatar + stars */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-display font-black text-white text-sm flex-shrink-0"
                      style={{ background: avatarColors[i] }}
                    >
                      {t.avatar}
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <p className="text-white/40 text-xs font-semibold">
                    – {t.name}, {t.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rating box */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex-shrink-0 md:w-48 flex flex-col gap-3 items-center md:items-start justify-center"
          >
            <div>
              <p className="font-display font-black text-white text-4xl leading-none">RATED 5/5</p>
              <p className="text-yellow-400 font-black text-base uppercase tracking-wide">BY 1000+ BHAI LOG</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-0.5">ON GOOGLE & SOCIALS</p>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              <GoogleIcon />
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </motion.div>
        </div>

        {/* ── ROW 3: Stats + SOLD OUT section ── */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Stats */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-red-500 flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-display font-black text-white text-2xl leading-none">{s.value}</div>
                    <div className="text-white/70 text-[10px] font-bold uppercase tracking-wide leading-tight">{s.label}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wide leading-tight">{s.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SOLD OUT stamp + city posters */}
          <div className="flex-shrink-0 flex items-start gap-4">
            {/* SOLD OUT stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.2 }}
              className="flex flex-col items-center justify-center border-4 border-red-600 px-5 py-4 text-center"
              style={{ boxShadow: "0 0 16px rgba(220,38,38,0.4)" }}
            >
              <span className="font-display font-black text-red-600 text-2xl uppercase leading-none">SOLD OUT</span>
              <span className="text-white/60 text-xs mt-2 leading-snug">
                AND WE'RE JUST<br />GETTING STARTED!
              </span>
              <span className="text-yellow-400 text-lg mt-1">🙂</span>
            </motion.div>

            {/* City poster grid */}
            <div className="grid grid-cols-3 gap-1.5">
              {soldOutCities.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="relative rounded overflow-hidden"
                  style={{ width: 72, height: 90 }}
                >
                  <img src={concertImage} alt={city} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 flex flex-col items-start justify-between p-1.5">
                    <div className="flex flex-col leading-none">
                      <span className="text-white font-black text-[7px] uppercase">DESI</span>
                      <span className="text-white font-black text-[7px] uppercase">COMEDY</span>
                      <span className="text-red-500 font-black text-[7px] uppercase">LIVE</span>
                    </div>
                    <div>
                      <div className="text-white font-black text-[8px] uppercase leading-none">{city}</div>
                      <div className="text-red-500 font-black text-[8px] uppercase leading-none">SOLD OUT</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#111111] border border-white/10 rounded-xl flex flex-col md:flex-row items-center overflow-hidden"
        >
          {/* Comedian image */}
          <div className="relative flex-shrink-0 h-28 md:h-36 overflow-hidden" style={{ minWidth: 100 }}>
            <img
              src={concertImage}
              alt="Jolly Bhai"
              className="h-full w-auto object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]" />
          </div>

          {/* Left text */}
          <div className="px-6 py-5 flex-shrink-0">
            <p className="font-display font-black text-white text-xl md:text-2xl uppercase leading-tight">
              THIS ISN'T JUST A SHOW.
            </p>
            <p className="font-display font-black text-xl md:text-2xl uppercase leading-tight">
              <span className="relative inline-block text-white">
                IT'S{" "}
                <span className="relative">
                  <span className="relative z-10 text-yellow-400">OUR FAMILY.</span>
                </span>
              </span>
            </p>
            <p className="font-display font-black text-xl md:text-2xl uppercase leading-tight">
              <span className="text-yellow-400">OUR MADNESS.</span>
              <span className="text-red-500 ml-2">❤️</span>
            </p>
          </div>

          {/* Center text */}
          <div className="flex-1 text-center px-4 py-4">
            <p className="font-display font-black text-white text-xl md:text-3xl uppercase leading-tight">
              BE PART OF THE JOURNEY.
            </p>
            <p className="font-display font-black text-xl md:text-3xl uppercase leading-tight">
              BE PART OF{" "}
              <span className="text-yellow-400">BHAI LOG.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1 px-6 py-5">
            <a
              href="#join"
              className="bg-yellow-400 text-black font-display font-black text-base uppercase px-6 py-3 flex items-center gap-2 hover:bg-yellow-300 transition-all hover:scale-105 whitespace-nowrap"
              style={{ boxShadow: "0 0 20px rgba(250,204,21,0.4)" }}
            >
              JOIN BHAI LOG NOW ⚡
            </a>
            <p className="text-white/40 text-xs">Free to join. Always will be.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── Icon Components ─── */

function TicketIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10a3 3 0 0 1 0 8v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-8V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      <line x1="14" y1="6" x2="14" y2="8" />
      <line x1="14" y1="13" x2="14" y2="15" />
      <line x1="14" y1="20" x2="14" y2="22" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="4" />
      <path d="M2 24v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
      <circle cx="20" cy="8" r="4" />
      <path d="M26 24v-2a4 4 0 0 0-4-4h-2" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="2" width="8" height="14" rx="4" />
      <path d="M6 14a8 8 0 0 0 16 0" />
      <line x1="14" y1="22" x2="14" y2="26" />
      <line x1="10" y1="26" x2="18" y2="26" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-7 13-7 13S7 17 7 10a7 7 0 1 1 14 0z" />
      <circle cx="14" cy="10" r="3" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center"
      style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
      </svg>
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </div>
  );
}
