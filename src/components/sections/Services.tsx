'use client';

import { motion } from "framer-motion";
import { ArrowRight, Trash2, Box, Hammer, Phone } from "lucide-react";

const services = [
  {
    id: "residential",
    title: "Residential Junk Removal",
    description: "Got old furniture, appliances, or just a garage full of clutter? We'll come to your home, haul it away safely, and sweep up when we're done.",
    icon: <Trash2 className="w-8 h-8 text-green-700" />,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    features: ["Furniture Removal", "Appliance Disposal", "Garage Cleanouts"]
  },
  {
    id: "estate",
    title: "Estate Cleanouts",
    description: "Handling an estate can be overwhelming. We offer compassionate, thorough, and fast estate cleanouts to help you prepare the property for sale.",
    icon: <Box className="w-8 h-8 text-green-700" />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    features: ["Full Property Clearing", "Donation Sorting", "Hoarder Cleanouts"]
  },
  {
    id: "construction",
    title: "Construction Debris",
    description: "Keep your job site safe and clear. We haul away drywall, wood, scrap metal, and other debris from remodels and new construction.",
    icon: <Hammer className="w-8 h-8 text-green-700" />,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    features: ["Post-Remodel Cleanup", "Scrap Material", "Yard Waste"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 text-balance">
            Complete Hauling Services for East El Paso
          </h2>
          <p className="text-xl text-stone-600 leading-relaxed">
            No job is too big or too small. We provide upfront pricing and handle all the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Image side */}
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-stone-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-50 rounded-full -z-10"></div>
              </div>

              {/* Text side */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">{service.title}</h3>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-[45ch]">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8 w-full">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-stone-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-green-700" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="tel:+19155550198"
                  className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-stone-800 transition-colors shadow-md min-h-[48px]"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Get a Free Estimate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
