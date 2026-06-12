import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { countryCodes } from "../data/countryCodes";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  "w-full bg-transparent border border-border/80 text-foreground text-sm px-4 py-3.5 rounded-lg placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all";

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
    control,
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
    <section id="join" className="bg-card border-t border-border overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-start">

        {/* ── LEFT: Join the Inner Circle ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-primary/5 border border-primary/20 px-5 py-2 rounded-full">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Ready to join the madness?</span>
            <span className="text-base">🔥</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="uppercase leading-[0.9] tracking-normal flex flex-col" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 8vw, 6.5rem)" }}>
              <span className="text-foreground">
                JOIN THE
              </span>
              <span className="text-primary mt-[-5px]">
                INNER CIRCLE!
              </span>
            </h2>
            {/* Red underline */}
            <div className="h-[3px] bg-red-600 mt-4" style={{ width: "40%" }} />
          </div>

          {/* Subheading */}
          <div className="font-black uppercase leading-snug mt-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "1px" }}>
            <span className="text-foreground">JOIN </span>
            <span className="text-primary">BHAI LOG</span>
            <span className="text-foreground"> TODAY.</span>
            <br />
            <span className="text-foreground">AND LET'S </span>
            <span className="text-primary">LAUGH LOUDER!</span>
          </div>

          {/* Comedian + perks area */}
          <div className="relative flex flex-col sm:flex-row gap-6 items-stretch mt-4">
            {/* Comedian image */}
            <div className="relative flex-shrink-0 w-full sm:w-48 rounded-xl overflow-hidden border border-border">
              <img
                src="/carousel-images/img17.jpg"
                alt="Jolly Bhai"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: 180 }}
              />
              {/* Handwritten note */}
              <div
                className="absolute bottom-3 -right-2 bg-primary text-primary-foreground p-3 rotate-2 rounded-sm"
                style={{ fontFamily: "'Caveat', cursive", width: 130, fontSize: "0.9rem" }}
              >
                <p className="font-bold leading-tight">
                  Aap ho toh yeh safar mazedaar hai!
                </p>
                <p className="opacity-90 text-xs mt-1">– Jolly Bhai</p>
              </div>
            </div>

            {/* Perks white box */}
            <div className="flex-1 bg-card border border-border rounded-xl p-6">
              <p className="font-black text-foreground text-lg uppercase leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}>
                AS A <span className="text-primary">BHAI LOG</span>, YOU'RE<br />NOT JUST A FAN.
              </p>
              <div className="flex flex-col gap-3">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-foreground/80 text-sm font-medium leading-snug">
                      {perk.includes("Jolly Bhai") ? (
                        <>
                          {perk.replace("Jolly Bhai's", "")}{" "}
                          <span className="text-primary font-bold">Jolly Bhai's</span> journey
                        </>
                      ) : perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </motion.div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-card border border-border rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 relative"
        >
          {/* Form heading */}
          <div>
            <p className="text-foreground/50 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Fill the form and become
            </p>
            <div className="flex items-center gap-3">
              {/* Lightning doodle left */}
              <svg width="24" height="34" viewBox="0 0 20 30" fill="none" className="text-primary flex-shrink-0">
                <path d="M12 2L4 16h7L8 28l12-16h-8z" fill="currentColor" />
              </svg>
              <h3 className="font-black text-primary uppercase leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 6vw, 4rem)", letterSpacing: "2px" }}>
                BHAI LOG!
              </h3>
              {/* Lightning doodle right */}
              <svg width="24" height="34" viewBox="0 0 20 30" fill="none" className="text-primary flex-shrink-0">
                <path d="M12 2L4 16h7L8 28l12-16h-8z" fill="currentColor" />
              </svg>
            </div>
            <div className="h-[2px] bg-red-600 mt-3" style={{ width: "100%" }} />
            <p className="text-foreground/60 text-[13px] font-semibold uppercase tracking-wider mt-4 leading-relaxed">
              GET EXCLUSIVE ACCESS, OFFERS & UPDATES<br />
              <span className="text-primary font-bold">BEFORE</span> ANYONE ELSE.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">🎉</p>
              <h3 className="font-display font-black text-yellow-400 text-3xl uppercase">You're In, Bhai!</h3>
              <p className="text-foreground/60 text-sm mt-2">Check your WhatsApp for next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                    </span>
                    <input {...register("name")} placeholder="Your Name" className={`${inputClass} pl-9`} />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
                    </span>
                    <input {...register("email")} placeholder="Email Address" className={`${inputClass} pl-9`} />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Row 2: Phone with flag */}
              <div>
                <div className="flex gap-2">
                  <div className="relative flex items-center bg-transparent border border-border/80 rounded-lg text-foreground text-sm flex-shrink-0 hover:border-primary transition-colors focus-within:border-primary">
                    <Controller
                      control={control}
                      name="countryCode"
                      defaultValue="+1"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-[110px] bg-transparent border-0 shadow-none focus:ring-0 text-foreground/70 font-medium pl-4 pr-1 h-[50px] outline-none rounded-lg">
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent position="popper" side="bottom" sideOffset={4} className="max-h-[300px] w-[130px]">
                            {countryCodes.map((country) => (
                              <SelectItem key={`${country.code}-${country.name}`} value={country.code} className="cursor-pointer">
                                {country.flag} {country.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
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
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-6.2-8-12a8 8 0 1 1 16 0c0 5.8-8 12-8 12z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <input {...register("city")} placeholder="Your City" className={`${inputClass} pl-9`} />
                </div>
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              {/* Row 4: How did you hear */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                </span>
                <select
                  {...register("source")}
                  className={`${inputClass} pl-9 appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-card">How did you hear about us?</option>
                  {sources.map((s) => (
                    <option key={s} value={s} className="bg-card">{s}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 mt-1">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    {...register("agree")}
                    className="sr-only peer"
                    id="agree"
                  />
                  <label
                    htmlFor="agree"
                    className="w-5 h-5 border-2 border-border rounded-[4px] flex items-center justify-center cursor-pointer bg-transparent peer-checked:bg-primary peer-checked:border-primary transition-colors block"
                  >
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="opacity-0 peer-checked:opacity-100 absolute pointer-events-none">
                      <path d="M2 7l3.5 3.5L12 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </label>
                </div>
                <label htmlFor="agree" className="text-foreground/70 text-sm leading-snug cursor-pointer select-none">
                  I agree to receive updates on shows, offers & exclusive content from{" "}
                  <span className="text-primary font-bold">Desi Comedy Live.</span>
                </label>
              </div>
              {errors.agree && <p className="text-red-500 text-xs -mt-2">{errors.agree.message}</p>}

              {/* Submit button with arrow annotation */}
              <div className="relative mt-3">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-black text-lg uppercase py-4 md:py-5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ letterSpacing: "1px" }}
                >
                  YES! I WANT TO JOIN BHAI LOG 🚀
                </button>
                {/* Red arrow annotation */}
                <div className="absolute -right-4 -bottom-6 hidden md:block">
                  <svg width="40" height="30" viewBox="0 0 36 28" fill="none">
                    <path d="M4 4 C16 4 32 12 32 24" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M29 21 L32 27 L35 22" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 text-foreground/40 text-[10px] uppercase tracking-wider flex-wrap">
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  100% FREE TO JOIN
                </span>
                <span className="text-foreground/20">|</span>
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  NO SPAM, ONLY FUN
                </span>
                <span className="text-foreground/20">|</span>
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  UNSUBSCRIBE ANYTIME
                </span>
              </div>

              {/* Social proof nudge */}
              <div className="flex items-center justify-center gap-2 bg-transparent border border-border/80 rounded-xl px-4 py-4 mt-2">
                <span className="text-primary text-xl">⭐</span>
                <p className="text-foreground/80 text-[13px] font-bold uppercase leading-snug tracking-wide">
                  BHAI LOG ARE JOINING DAILY.{" "}
                  <span className="text-primary">KYA AAP MISSING HO?</span>{" "}
                  <span className="text-foreground/40 font-normal">←</span>
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
