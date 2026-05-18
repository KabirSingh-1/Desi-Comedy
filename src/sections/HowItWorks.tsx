import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Join Bhai Log",
    desc: "Sign up in 30 secs. No fees, no hassle."
  },
  {
    num: "02",
    title: "Get Insider Access",
    desc: "Early ticket links, secret deals, BTS."
  },
  {
    num: "03",
    title: "Unlock Rewards",
    desc: "Attend shows, get bigger perks."
  },
  {
    num: "04",
    title: "Become OG",
    desc: "Be part of the inner circle forever."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative bg-[#0a0a0a] border-t border-white/10 z-10">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase">
            HOW IT <span className="text-secondary text-neon-red">WORKS?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="font-display font-black text-6xl md:text-8xl text-white/5 group-hover:text-primary/10 transition-colors absolute -top-8 -left-4 select-none pointer-events-none">
                {step.num}
              </div>
              
              <div className="relative z-10 border border-white/10 bg-card p-6 h-full hover:border-primary/50 transition-colors flex flex-col">
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-muted-foreground text-base mb-6">
                  {step.desc}
                </p>
                
                {i < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary mt-auto hidden md:block absolute -right-7 top-1/2 -translate-y-1/2 z-20" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
