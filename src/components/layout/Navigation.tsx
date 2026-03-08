import { Phone, MapPin, Clock } from "lucide-react";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Utility Header */}
      <div className="bg-stone-900 text-stone-100 py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+19158015045" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>915-801-5045</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>East El Paso, TX & Surrounding Areas</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 7am - 6pm</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-stone-50 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-800 text-white rounded-lg flex items-center justify-center font-serif font-bold text-xl">
              L&E
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-stone-900">L&E Hauling</span>
              <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">Junk Removal</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-stone-700">
            <a href="#services" className="hover:text-green-800 transition-colors">Services</a>
            <a href="#about" className="hover:text-green-800 transition-colors">About Us</a>
            <a href="#reviews" className="hover:text-green-800 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-green-800 transition-colors">Contact</a>
          </nav>

          <a 
            href="tel:+19158015045"
            className="hidden sm:flex items-center justify-center gap-2 bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-900 transition-all hover:-translate-y-[1px] shadow-md touch-manipulation min-h-[48px]"
          >
            <Phone className="w-5 h-5 fill-current" />
            Call Now for Estimate
          </a>
        </div>
      </div>
    </header>
  );
}
