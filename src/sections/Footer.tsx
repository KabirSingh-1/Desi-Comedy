import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto_1fr] gap-10 items-start text-center md:text-left">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start leading-none gap-0"
          >
            <span className="font-display font-black text-foreground text-2xl tracking-tight">DESI</span>
            <span className="font-display font-black text-foreground text-2xl tracking-tight">COMEDY</span>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-foreground text-2xl tracking-tight">LIVE</span>
              <span className="w-3 h-3 rounded-full bg-red-600 flex-shrink-0" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col items-center md:items-start gap-2 w-full"
          >
            <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-1">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-center md:text-left mx-auto md:mx-0">
              {["All Shows", "About Us", "Bhai Log Benefits", "Gallery", "Contact Us", "FAQ"].map((link) => (
                <a key={link} href="#" className="text-foreground/60 text-xs hover:text-yellow-400 transition-colors leading-none">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Follow the Madness */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-col items-center md:items-start gap-3 w-full"
          >
            <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Follow the Madness</p>
            <div className="flex items-center gap-2.5 justify-center">
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
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#DC2626" />
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
              {/* X */}
              <a href="#" aria-label="X / Twitter"
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h7.04l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col items-center md:items-start gap-2.5 w-full"
          >
            <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Contact Us</p>
            <div className="flex items-center gap-2 text-foreground/60 text-xs">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              <a href="mailto:hello@desicomedylive.com" className="hover:text-yellow-400 transition-colors">hello@desicomedy.live</a>
            </div>
            <div className="flex items-center gap-2 text-foreground/60 text-xs">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+919876543210" className="hover:text-yellow-400 transition-colors">+91 98765 43210</a>
            </div>
          </motion.div>

          {/* SEE YOU AT THE SHOW */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center md:justify-end w-full"
          >
            <div className="text-center md:text-right flex flex-col leading-none gap-0">
              <span className="font-display font-black text-foreground text-2xl tracking-tight uppercase">SEE YOU</span>
              <span className="font-display font-black text-foreground text-2xl tracking-tight uppercase">AT THE</span>
              <span className="font-display font-black text-foreground text-2xl tracking-tight uppercase">SHOW! 🙂</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-6 pt-4 text-center">
          <p className="text-foreground/25 text-xs">
            © {new Date().getFullYear()} Desi Comedy Live. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
