import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_1fr_auto_auto] gap-6 md:gap-8 items-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col leading-none"
          >
            <span className="font-display font-black text-white text-xl tracking-tight">DESI</span>
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-white text-xl tracking-tight">COMEDY</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-white text-xl tracking-tight">LIVE</span>
              <span className="w-3 h-3 rounded-full bg-red-600 flex-shrink-0 mt-0.5" />
            </div>
          </motion.div>

          {/* Follow the madness */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Follow the Madness</p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="#" aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="red"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X / Twitter"
                className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h7.04l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-1"
          >
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Contact Us</p>
            <a href="mailto:hello@desicomedylive.com" className="text-white/80 text-xs hover:text-yellow-400 transition-colors">
              hello@desicomedylive.com
            </a>
            <a href="tel:+919876543210" className="text-white/80 text-xs hover:text-yellow-400 transition-colors">
              +91 98765 43210
            </a>
          </motion.div>

          {/* Handwritten note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <p className="text-white/80 text-base leading-snug -rotate-2">
              Ek show dekhoge,<br />baar baar aaoge! 🙂
            </p>
          </motion.div>

          {/* SEE YOU AT THE SHOW box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-yellow-400 px-5 py-4 flex items-center justify-center text-center rotate-1 hover:rotate-0 transition-transform"
          >
            <p className="font-display font-black text-black text-sm uppercase leading-tight">
              SEE YOU<br />AT THE<br />SHOW! ❤️
            </p>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-5 pt-4 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Desi Comedy Live. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
