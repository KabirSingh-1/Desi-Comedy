import { motion } from "framer-motion";
import { Gift, Percent, Clock, Video, Shirt, Medal, Megaphone, Zap } from "lucide-react";

const benefits = [
  { icon: Percent, title: "Deep Discounts", desc: "On Every Show" },
  { icon: Ticket, title: "Buy 1 Get 1", desc: "Tickets on Select Shows" },
  { icon: Clock, title: "48-Hour Early Access", desc: "To Tickets" },
  { icon: Video, title: "Exclusive BTS", desc: "Behind-the-Scenes Content" },
  { icon: Shirt, title: "Monthly Merch", desc: "Giveaways" },
  { icon: Medal, title: "Attend 4 Shows", desc: "Get Exclusive Merch" },
  { icon: Megaphone, title: "Shoutouts", desc: "& Special Mentions" },
  { icon: Zap, title: "Members-Only Drops", desc: "& Surprise Offers" }
];

function Ticket(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="py-24 relative bg-black z-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase">
            BHAI LOG BANKE <span className="text-primary text-neon">KYA MILEGA?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className="bg-card border-2 border-white/10 p-6 flex flex-col items-center text-center group hover:border-primary hover:neon-glow transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-yellow-400 group-hover:scale-110 transition-all" />
                </div>
                <h3 className="font-display font-bold text-xl text-white uppercase mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="font-sans text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
