import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { PreFooter } from "@/components/sections/PreFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation />
      
      <main className="flex-1 flex flex-col w-full">
        {/* Phase 1: The First Impression */}
        <Hero />
        
        {/* Phase 2: Immediate Validation */}
        <TrustBanner />
        
        {/* Phase 3: Core Offerings */}
        <Services />
        
        {/* Phase 4: The Human Element */}
        <About />
        
        {/* Phase 5: The Proof */}
        <Testimonials />
        
        {/* Phase 6: The Final Push */}
        <PreFooter />
      </main>

      {/* Phase 7: Infrastructure */}
      <Footer />
    </div>
  );
}
