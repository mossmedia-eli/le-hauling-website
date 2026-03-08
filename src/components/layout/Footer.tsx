import { Phone, MapPin, Clock, Mail, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-700 text-white rounded-lg flex items-center justify-center font-serif font-bold text-2xl">
              L&E
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl leading-none text-white whitespace-nowrap">L&E Hauling</span>
              <span className="text-sm font-semibold text-green-500 uppercase tracking-wider">Junk Removal</span>
            </div>
          </div>
          <p className="leading-relaxed text-stone-400">
            A family-owned junk removal and hauling service dedicated to keeping East El Paso clean, clear, and beautiful. Fully licensed and insured for your peace of mind.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-stone-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Free On-Site Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-stone-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Same-Day Availability</span>
            </div>
          </div>
        </div>



        {/* Contact info Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif font-bold text-xl text-white mb-2">Contact Us</h3>
          
          <a href="tel:+19155550198" className="flex items-start gap-4 hover:bg-stone-800 p-2 rounded-lg transition-colors -ml-2 group">
            <div className="bg-stone-800 group-hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-stone-400">Call/Text Us</span>
              <span className="text-white font-semibold text-lg">(915) 555-0198</span>
            </div>
          </a>

          <a href="mailto:info@lehaulingelpaso.demo" className="flex items-start gap-4 hover:bg-stone-800 p-2 rounded-lg transition-colors -ml-2 group">
            <div className="bg-stone-800 group-hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-stone-400">Email Us</span>
              <span className="text-white font-semibold">info@lehaulingelpaso.demo</span>
            </div>
          </a>

          <div className="flex items-start gap-4 p-2 -ml-2">
            <div className="bg-stone-800 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-stone-400">Hours of Operation</span>
              <span className="text-white font-semibold">Mon-Sat: 7:00 AM - 6:00 PM</span>
              <span className="text-stone-400">Sunday: Closed</span>
            </div>
          </div>
        </div>

        {/* Location & Map Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif font-bold text-xl text-white mb-2">Service Area</h3>
          <a href="https://maps.google.com/?q=East+El+Paso,+TX" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:bg-stone-800 p-2 rounded-lg transition-colors -ml-2 group">
            <div className="bg-stone-800 group-hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-stone-400">Primary Location</span>
              <span className="text-white font-semibold">East El Paso, TX 79936</span>
              <span className="text-stone-400 text-sm mt-1">Driving across El Paso county</span>
            </div>
          </a>

          {/* Map Embed */}
          <div className="w-full h-48 bg-stone-800 rounded-lg border border-stone-700 overflow-hidden mt-2 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216584.21543787723!2d-106.311300!3d31.758700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75a36371c66ad%3A0xc34a1792bc4a0e98!2sEast%20El%20Paso%2C%20El%20Paso%2C%20TX!5e0!3m2!1sen!2sus!4v1710500000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
        <p>© {new Date().getFullYear()} L&E Hauling and Junk Removal. All rights reserved.</p>
        <p>Locally owned and operated in El Paso, TX.</p>
      </div>
    </footer>
  );
}
