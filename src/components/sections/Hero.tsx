'use client';

import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85dvh] flex flex-col justify-center bg-stone-900 border-b-8 border-green-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <img 
          src="/hero-bg.jpg"
          alt="El Capitan Mountains backdrop" 
          className="w-full h-full object-cover object-center opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 w-full flex flex-col items-start pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/50 border border-green-700/50 text-green-300 font-medium text-sm mb-8 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Locally Owned & Fully Insured in El Paso</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight text-balance mb-6 tracking-tight">
            Clear the Clutter. <br/>
            <span className="text-green-400">Reclaim Your Space.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-[55ch] leading-relaxed">
            Fast, dependable junk removal and hauling services for East El Paso. From single-item pickups to full estate cleanouts, our family handles the heavy lifting so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="tel:+19158015045"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-all hover:-translate-y-[2px] shadow-[0_8px_30px_rgb(22,163,74,0.2)] touch-manipulation min-h-[56px]"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call 915-801-5045
            </a>
            
            <a 
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-800 text-white border border-stone-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-700 transition-all hover:-translate-y-[2px] touch-manipulation min-h-[56px]"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
