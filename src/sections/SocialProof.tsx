import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "@assets/image_1779084650600.png";

const videoImages = [
  "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop"
];

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
  { icon: <TicketIcon />, value: "100+", label: "SOLD OUT SHOWS", sub: "IN BAY AREA" },
  { icon: <PeopleIcon />, value: "7000+", label: "AUDIENCE LAUGHS", sub: "MEMORIES." },
  { icon: <PinIcon />, value: "15+", label: "CITIES & VENUES", sub: "PACKED" },
];

export function SocialProof() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedVideo]);

  return (
    <section id="social-proof" className="bg-background border-t border-border overflow-hidden pb-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-20 flex flex-col gap-16">

        {/* ── HEADER & HIGHLIGHTS ── */}
        <div className="flex flex-col justify-center items-center gap-8 pb-8">
          <motion.div {...fadeUp(0)} className="flex flex-col items-center text-center gap-3 max-w-3xl relative">

            <h2 className="font-black uppercase leading-[0.95] tracking-normal flex flex-col items-center relative" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 7vw, 6.5rem)" }}>
              <span className="text-foreground">Real Laughs.</span>
              <span className="text-primary relative inline-block isolate">
                Real People.
                {/* SVG Underline */}
                <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-auto text-blue-500 -z-10" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>

              {/* Animated Sparkle Accent */}
              <motion.svg
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-8 md:-top-6 md:-right-12 w-8 h-8 md:w-12 md:h-12 text-primary/40 pointer-events-none"
                viewBox="0 0 24 24" fill="none"
              >
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor" />
              </motion.svg>
            </h2>
            <p className="text-foreground/70 text-lg md:text-xl mt-2">
              Some moments with our <span className="text-primary font-bold">amazing BhaiLog!</span>
            </p>
          </motion.div>


        </div>

        {/* ── SCROLLING VIDEO MARQUEE ── */}
        <div className="relative w-full overflow-hidden py-4 -mx-6 px-6 md:px-0 md:-mx-0">

          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...Array(7), ...Array(7)].map((_, index) => {
              const i = index % 7;
              return (
                <div
                  key={index}
                  className="relative w-64 md:w-72 lg:w-[300px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                  style={{ aspectRatio: "4/5" }}
                  onClick={() => setSelectedVideo(`/videos/vid${i}.mp4`)}
                >
                  <video
                    src={`/videos/vid${i}.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: i % 2 === 0 ? "top" : "center" }}
                  />
                  {/* Sleek Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

                  {/* Expand icon */}
                  <div className="absolute bottom-4 right-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <div className="text-white/90 group-hover:text-primary transition-colors drop-shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6"></path>
                        <path d="M9 21H3v-6"></path>
                        <path d="M21 3l-7 7"></path>
                        <path d="M3 21l7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="flex flex-col gap-8 mt-4">
          <h3 className="font-black text-foreground uppercase tracking-widest text-lg md:text-xl">
            WHAT OUR <span className="text-primary">BHAI LOG</span> SAY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Avatar + stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground text-sm leading-tight">{t.name}</span>
                      <span className="text-foreground/50 text-xs">{t.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-primary text-xs">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mt-2 italic">
                  "{t.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── STATS SECTION ── */}
        <div className="w-full flex justify-center mt-4">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col items-center text-center gap-2 ${i !== 0 ? 'md:pl-8 pt-8 md:pt-0' : ''}`}
                >
                  <span className="text-primary mb-2 bg-primary/10 p-3 rounded-full">{s.icon}</span>
                  <div className="font-black text-foreground text-4xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {s.value}
                  </div>
                  <div className="text-foreground/60 text-xs font-bold uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BANNER CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 relative rounded-3xl overflow-hidden bg-foreground shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
            <img src={bgImage} alt="Background" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
            <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
              <p className="font-black text-background text-4xl md:text-6xl uppercase leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                YOU ARE <span className="text-primary">OUR FAMILY.</span> <span className="text-red-500">❤️</span>
              </p>
              <p className="text-background/70 text-base md:text-lg mt-4 max-w-md">
                Be part of the journey. Get exclusive access, massive discounts, and a community built on laughter.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <a
                href="#join"
                className="bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-5 rounded-full hover:scale-105 hover:bg-opacity-90 transition-all shadow-xl"
              >
                JOIN BHAI LOG NOW ⚡
              </a>
              <p className="text-background/50 text-xs font-semibold tracking-widest uppercase">Free to join.</p>
            </div>
          </div>
        </motion.div>

      </div>
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors z-[101]"
              onClick={() => setSelectedVideo(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[1000px] max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
                style={{ maxHeight: '90vh' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
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
      className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
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
    <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center shadow-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </div>
  );
}
