import { motion } from "framer-motion";
import heroImage from "@assets/image_1779032112481.png";

export function WhatIs() {
  return (
    <section className="py-24 relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden z-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Scrapbook Collage */}
        <div className="relative h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -10, x: -50 }}
            whileInView={{ opacity: 1, rotate: -5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 w-64 md:w-80 border-[12px] border-white bg-white shadow-2xl pb-10"
          >
            <div className="w-full h-full bg-gray-200 overflow-hidden">
              {/* Fallback image if actual photo isn't available, but we use heroImage here */}
              <img src={heroImage} alt="Comedian performing" className="w-full h-full object-cover filter grayscale contrast-125" />
            </div>
            <div className="absolute bottom-2 left-0 w-full text-center font-['Caveat',cursive] text-2xl text-black font-bold">
              Pure Chaos.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 15, x: 50 }}
            whileInView={{ opacity: 1, rotate: 8, x: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-0 w-72 md:w-96 border-4 border-secondary bg-black p-2 opacity-80"
          >
            <img src={heroImage} alt="Audience laughing" className="w-full h-full object-cover filter saturate-200 hue-rotate-90 opacity-50" />
            <div className="absolute inset-0 bg-secondary mix-blend-overlay"></div>
          </motion.div>
          
          {/* Tape/Scrapbook accents */}
          <div className="absolute top-4 right-1/4 w-24 h-8 bg-white/20 backdrop-blur-sm -rotate-6 z-20 mix-blend-overlay"></div>
          <div className="absolute bottom-12 left-1/4 w-32 h-10 bg-primary/40 backdrop-blur-sm rotate-3 z-20 mix-blend-overlay"></div>
        </div>

        {/* Right Side: Emotional Storytelling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-none">
            BHAI LOG <br />
            <span className="text-secondary text-neon-red">KA MATLAB?</span>
          </h2>
          
          <div className="space-y-4 font-sans text-lg md:text-xl text-muted-foreground border-l-2 border-primary/50 pl-6 py-2">
            <p>
              Bhai Log means <strong className="text-white">"Bhai ke log."</strong>
            </p>
            <p>
              Any gender. Any nationality. If you enjoy Jolly Bhai's comedy, support the journey, and want to be part of the madness — you're already Bhai Log.
            </p>
          </div>

          <div className="mt-8 bg-primary text-black font-display font-bold text-2xl md:text-3xl p-6 uppercase -skew-x-2 shadow-[8px_8px_0px_rgba(255,255,255,0.1)]">
            THIS ISN'T JUST A DISCOUNT CLUB.<br />
            IT'S THE INNER CIRCLE.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
