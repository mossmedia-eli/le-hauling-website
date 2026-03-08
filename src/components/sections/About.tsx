'use client';

import { CheckCircle } from "lucide-react";

const benefits = [
  "Upfront, transparent pricing",
  "Fully licensed & insured",
  "Eco-friendly disposal",
  "Same/next-day service",
  "Family-owned business",
  "100% Satisfaction Guarantee"
];

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Contnet */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="text-green-700 font-semibold tracking-wider text-sm uppercase mb-4">
            Meet the Team
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 text-balance">
            Rooted in El Paso. <br className="hidden md:block"/>Built on Reliability.
          </h2>
          <p className="text-lg text-stone-600 mb-8 max-w-[50ch] leading-relaxed">
            When you hire L&E Hauling, you aren't dealing with a faceless national franchise. You're working directly with a local El Paso family dedicated to serving our community. We show up on time, treat your property with respect, and charge an honest price.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
            {benefits.map(benefit => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="font-medium text-stone-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 w-full md:max-w-md relative">
            <div className="absolute -top-4 -left-4 text-6xl text-stone-200 font-serif leading-none">"</div>
            <p className="italic text-stone-700 mb-4 relative z-10 font-serif">
              Our pledge is simple: We leave your space cleaner than we found it, every single time.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-300"></div>
              <div>
                <p className="font-bold text-stone-900">Luis & Elena</p>
                <p className="text-sm text-stone-500">Owners, L&E Hauling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Display */}
        <div className="w-full lg:w-1/2 relative pb-8 pr-8">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-stone-200">
             {/* Placeholder for real team/truck image */}
             <img 
               src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200" 
               alt="L&E Hauling Team"
               className="w-full h-full object-cover"
             />
          </div>
          
          {/* Decorative frame elements */}
          <div className="absolute top-8 right-0 bottom-0 left-8 rounded-[2rem] border-2 border-green-800/20 -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-stone-200 rounded-full blur-3xl opacity-50 -z-20"></div>
        </div>

      </div>
    </section>
  );
}
