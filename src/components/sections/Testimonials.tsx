'use client';

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "East El Paso",
    text: "Called them on a Wednesday morning to clear out our garage before moving. They were here by 1 PM, gave a fair price upfront, and had it swept clean in under an hour. Super polite guys.",
    service: "Garage Cleanout"
  },
  {
    id: 2,
    name: "David T.",
    location: "Horizon City",
    text: "We had a ton of debris leftover from a DIY bathroom remodel. L&E showed up exactly when they said they would. No hidden fees, just hard honest work. Highly recommend to anyone in El Paso.",
    service: "Construction Debris"
  },
  {
    id: 3,
    name: "Maria C.",
    location: "Socorro",
    text: "I needed my grandmother's house cleared out to put on the market. They handled everything with so much respect and care. Even helped me set aside family photos we almost missed.",
    service: "Estate Cleanout"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-green-700 font-semibold tracking-wider text-sm uppercase mb-4 block">
            The Proof is in the Work
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 text-balance">
            Real Reviews from El Paso Families
          </h2>
          <p className="text-xl text-stone-600">
             We don't buy reviews. We earn them one truckload at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[1, 2, 3, 4, 5].map(star => (
                   <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-stone-700 leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between border-t border-stone-100 pt-6 mt-auto">
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900">{testimonial.name}</span>
                  <span className="text-sm text-stone-500">{testimonial.location}</span>
                </div>
                <div className="bg-stone-100 px-3 py-1 rounded text-xs font-semibold text-stone-600">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
