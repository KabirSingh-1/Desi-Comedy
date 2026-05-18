import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import concertImage from "@assets/image_1779084650600.png";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone is required"),
  city: z.string().min(2, "City is required"),
  source: z.string().optional(),
  agree: z.boolean().refine((v) => v === true, "You must agree to continue"),
});

type FormData = z.infer<typeof formSchema>;

const inputClass =
  "w-full bg-[#1a1a1a] border border-white/20 text-white text-sm px-4 py-3 rounded-lg placeholder:text-white/30 focus:outline-none focus:border-yellow-400 transition-colors";

const perks = [
  "You get insider access",
  "You get crazy perks",
  "You get the love & respect",
  "You get to be part of Jolly Bhai's journey",
];

const bottomIcons = [
  { icon: "👥", label: "A COMMUNITY", sub: "THAT GETS YOU" },
  { icon: "😄", label: "NON STOP", sub: "LAUGHS" },
  { icon: "🤘", label: "MEMORIES", sub: "THAT STAY" },
  { icon: "👑", label: "A FAMILY", sub: "THAT SLAYS!" },
];

const sources = [
  "Instagram",
  "YouTube",
  "Friend / Word of Mouth",
  "Attended a Show",
  "Google",
  "Other",
];

export function Signup() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { agree: false },
  });

  function onSubmit(_data: FormData) {
    setSubmitted(true);
    setTimeout(() => {
      reset();
      setSubmitted(false);
    }, 5000);
  }

  return (
    <section id="join" className="bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-start">

        {/* ── LEFT: Join the Inner Circle ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-yellow-400/10 border border-yellow-400/40 px-4 py-1.5 rounded-full">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest">Ready to join the madness?</span>
            <span className="text-base">👑</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-display font-black uppercase leading-[0.88]">
              <span className="block text-white" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
                JOIN THE
              </span>
              <span className="block text-yellow-400 italic" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
                INNER CIRCLE!
              </span>
            </h2>
            {/* Red underline */}
            <div className="h-1 bg-red-600 mt-1" style={{ width: "55%" }} />
          </div>

          {/* Subheading */}
          <div className="font-display font-black uppercase leading-snug" style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}>
            <span className="text-white">BECOME </span>
            <span className="text-yellow-400">BHAI LOG</span>
            <span className="text-white"> TODAY.</span>
            <br />
            <span className="text-white">AND LET'S MAKE INDIA </span>
            <span className="text-yellow-400">LAUGH LOUDER!</span>
          </div>

          {/* Comedian + perks area */}
          <div className="relative flex gap-4 items-end mt-2">
            {/* Comedian image */}
            <div className="relative flex-shrink-0 w-32 md:w-40 self-end">
              <img
                src={concertImage}
                alt="Jolly Bhai"
                className="w-full object-cover object-top"
                style={{ height: 160, borderRadius: 8 }}
              />
              {/* Handwritten note */}
              <div
                className="absolute -left-2 top-0 bg-yellow-300 p-2 -rotate-3 shadow-md"
                style={{ fontFamily: "'Caveat', cursive", width: 110, fontSize: "0.75rem" }}
              >
                <p className="text-black font-bold leading-snug">
                  Aap ho toh yeh safar mazedaar hai!
                </p>
                <p className="text-black/70 text-xs mt-0.5">– Jolly Bhai</p>
              </div>
            </div>

            {/* Perks dark box */}
            <div className="flex-1 bg-[#1a1a1a] border border-white/15 rounded-xl p-4">
              <p className="font-display font-black text-white text-sm uppercase leading-tight mb-3">
                AS A <span className="text-yellow-400">BHAI LOG</span>, YOU'RE<br />NOT JUST A FAN.
              </p>
              <div className="flex flex-col gap-2">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-xs leading-snug">
                      {perk.includes("Jolly Bhai") ? (
                        <>
                          {perk.replace("Jolly Bhai's", "")}{" "}
                          <span className="text-yellow-400">Jolly Bhai's</span> journey
                        </>
                      ) : perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom 4 icons */}
          <div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-5">
            {bottomIcons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-1"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-red-500 font-display font-black text-[9px] uppercase leading-none tracking-wide">{item.label}</span>
                <span className="text-white/50 text-[9px] uppercase leading-none">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-[#111111] border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col gap-5"
        >
          {/* Form heading */}
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
              Fill the form and become
            </p>
            <div className="flex items-center gap-3">
              {/* Lightning doodle left */}
              <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-yellow-400 flex-shrink-0">
                <path d="M12 2L4 16h7L8 28l12-16h-8z" fill="currentColor" />
              </svg>
              <h3 className="font-display font-black text-yellow-400 uppercase leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
                BHAI LOG!
              </h3>
              {/* Lightning doodle right */}
              <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-yellow-400 flex-shrink-0">
                <path d="M12 2L4 16h7L8 28l12-16h-8z" fill="currentColor" />
              </svg>
            </div>
            <div className="h-0.5 bg-red-600 mt-1" style={{ width: "60%" }} />
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-2">
              GET EXCLUSIVE ACCESS, OFFERS & UPDATES<br />
              <span className="text-yellow-400">BEFORE</span> ANYONE ELSE.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">🎉</p>
              <h3 className="font-display font-black text-yellow-400 text-3xl uppercase">You're In, Bhai!</h3>
              <p className="text-white/60 text-sm mt-2">Check your WhatsApp for next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                    </span>
                    <input {...register("name")} placeholder="Your Name" className={`${inputClass} pl-9`} />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                    </span>
                    <input {...register("email")} placeholder="Email Address" className={`${inputClass} pl-9`} />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Row 2: Phone with flag */}
              <div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/20 rounded-lg px-3 py-3 text-white text-sm flex-shrink-0 cursor-pointer hover:border-yellow-400 transition-colors">
                    <span className="text-base">🇮🇳</span>
                    <span className="text-white/70">+91</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                  <input
                    {...register("phone")}
                    placeholder="Phone Number (WhatsApp)"
                    className={`${inputClass} flex-1`}
                    type="tel"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Row 3: City */}
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-6.2-8-12a8 8 0 1 1 16 0c0 5.8-8 12-8 12z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <input {...register("city")} placeholder="Your City" className={`${inputClass} pl-9`} />
                </div>
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              {/* Row 4: How did you hear */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </span>
                <select
                  {...register("source")}
                  className={`${inputClass} pl-9 appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#1a1a1a]">How did you hear about us?</option>
                  {sources.map((s) => (
                    <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    {...register("agree")}
                    className="sr-only peer"
                    id="agree"
                  />
                  <label
                    htmlFor="agree"
                    className="w-4 h-4 border border-white/30 rounded-sm flex items-center justify-center cursor-pointer bg-[#1a1a1a] peer-checked:bg-yellow-400 peer-checked:border-yellow-400 transition-colors block"
                  />
                </div>
                <label htmlFor="agree" className="text-white/60 text-xs leading-snug cursor-pointer">
                  I agree to receive updates on shows, offers & exclusive content from{" "}
                  <span className="text-yellow-400 font-semibold">Desi Comedy Live.</span>
                </label>
              </div>
              {errors.agree && <p className="text-red-500 text-xs -mt-2">{errors.agree.message}</p>}

              {/* Submit button with arrow annotation */}
              <div className="relative mt-1">
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-display font-black text-base uppercase py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ boxShadow: "0 0 28px rgba(250,204,21,0.5)" }}
                >
                  YES! I WANT TO JOIN BHAI LOG 👥
                </button>
                {/* Red arrow annotation */}
                <div className="absolute -right-2 -bottom-5 hidden md:block">
                  <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path d="M4 4 C16 4 32 12 32 24" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M29 21 L32 27 L35 22" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 text-white/40 text-[10px] uppercase tracking-wider flex-wrap">
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  100% FREE TO JOIN
                </span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  NO SPAM, ONLY FUN
                </span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  UNSUBSCRIBE ANYTIME
                </span>
              </div>

              {/* Social proof nudge */}
              <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3">
                <span className="text-yellow-400 text-lg">⭐</span>
                <p className="text-white text-xs font-bold uppercase leading-snug">
                  1000+ BHAI LOG ALREADY JOINED.{" "}
                  <span className="text-yellow-400">KYA AAP MISSING HO?</span>{" "}
                  <span className="text-white/60">←</span>
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
