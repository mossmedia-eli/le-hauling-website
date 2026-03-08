'use client';

import { Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

export function PreFooter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-green-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
      {/* Decorative texture or pattern could go here */}

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 text-balance leading-tight">
            Ready to Get Your Space Back?
          </h2>
          <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-[45ch] mx-auto lg:mx-0">
            Send us a quick message or call directly for a free, transparent estimate based on your exact needs. We serve all of East El Paso.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="tel:+19158015045"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-50 transition-all shadow-xl hover:-translate-y-[2px] touch-manipulation min-h-[56px]"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call 915-801-5045
            </a>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Message Received!</h3>
                <p className="text-stone-600">We'll text or call you back shortly to schedule your estimate.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-green-700 font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="flex flex-col gap-5"
              >
                <div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">Request an Estimate</h3>
                  <p className="text-sm text-stone-500 mb-6">Fill out the form below and we'll reach out ASAP.</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-stone-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-shadow text-stone-900"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-stone-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-shadow text-stone-900"
                    placeholder="915-801-5045"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="details" className="text-sm font-semibold text-stone-700">What do you need hauled away?</label>
                  <textarea 
                    id="details" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-shadow text-stone-900 resize-none"
                    placeholder="e.g., An old couch, some yard waste, and a broken fridge..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-colors shadow-md touch-manipulation focus:outline-none focus:ring-4 focus:ring-stone-900/30"
                >
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
