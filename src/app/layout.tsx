import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L&E Hauling and Junk Removal | East El Paso, TX",
  description: "Dependable junk removal, estate cleanouts, and hauling services in East El Paso. Family-owned, fully insured, and ready to clear your space today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "L&E Hauling and Junk Removal",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
    "@id": "https://lehaulingelpaso.demo/",
    "url": "https://lehaulingelpaso.demo/",
    "telephone": "+19155550198",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 Maple Street",
      "addressLocality": "El Paso",
      "addressRegion": "TX",
      "postalCode": "79936",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.7587,
      "longitude": -106.3113
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth scroll-pt-32">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-stone-50 text-gray-800 font-sans text-lg overflow-x-hidden w-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
