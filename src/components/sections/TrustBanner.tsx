export function TrustBanner() {
  return (
    <section className="bg-stone-100 py-6 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left shrink-0">
          <div className="flex items-center gap-1 text-green-600">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold text-stone-800 text-lg">5.0 Star Rating</span>
          <span className="hidden md:block text-stone-400">|</span>
          <span className="text-stone-600 font-medium">Trusted by 100+ families in El Paso</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
          <span className="font-serif font-bold text-xl text-stone-500">Google Verified</span>
          <span className="hidden sm:block text-stone-300">•</span>
          <span className="font-serif font-bold text-xl text-stone-500">Nextdoor Favorite</span>
          <span className="hidden sm:block text-stone-300">•</span>
          <span className="font-serif font-bold text-xl text-stone-500">Local Chamber of Commerce</span>
        </div>
      </div>
    </section>
  );
}
