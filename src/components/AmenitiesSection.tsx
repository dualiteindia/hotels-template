import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AMENITIES = [
  {
    id: "coffee",
    name: "Coffee & Sandwich Bar",
    description: "An artisanal coffee experience paired with gourmet sandwiches, perfect for casual meetings or a quick recharge.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/restaurant-hall-with-leather-armchairs-french-windows-min.webp",
    dots: ["bg-brand-black", "bg-brand-yellow", "bg-brand-pink", "bg-brand-red"]
  },
  {
    id: "lobby",
    name: "Welcoming Lobby",
    description: "A grand entrance featuring local artwork and cultural motifs, designed to impress and welcome guests instantly.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/hotel-checkin-counter-featuring-local-artwork-cultural-motifs-min.webp",
    dots: ["bg-brand-green"]
  },
  {
    id: "gym",
    name: "Gym",
    description: "State-of-the-art fitness center equipped for the modern professional, promoting wellness and balance.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/man-woman-running-treadmills-modern-gym-min.webp",
    dots: ["bg-brand-green"]
  },
  {
    id: "parking",
    name: "Parking",
    description: "Secure, spacious, and accessible parking facilities ensuring convenience for you and your visitors.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/cars-parked-outdoor-parking-min.webp",
    dots: ["bg-brand-green", "bg-brand-pink", "bg-brand-yellow", "bg-brand-red"]
  },
  {
    id: "views",
    name: "Views",
    description: "Breathtaking panoramic views of the city skyline, offering a constant source of inspiration.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/hammocks-near-pool-min.webp",
    dots: ["bg-brand-green", "bg-brand-pink", "bg-brand-yellow", "bg-brand-red"]
  },
  {
    id: "creative",
    name: "Creative Atmosphere",
    description: "Thoughtfully designed spaces that foster collaboration, innovation, and a vibrant community spirit.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/mid-century-modern-style-interior-neural-network-generated-picture-min.webp",
    dots: ["bg-brand-green", "bg-brand-pink", "bg-brand-yellow"]
  },
  {
    id: "shops",
    name: "Shops",
    description: "Curated retail experiences right at your doorstep, blending luxury and convenience.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/mall-high-luxury-uhd-wallpaper-min.webp",
    dots: ["bg-brand-green", "bg-brand-pink", "bg-brand-yellow", "bg-brand-red"]
  }
];

export const AmenitiesSection = () => {
  const [activeId, setActiveId] = useState<string>(AMENITIES[0].id);
  const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll Spy Logic
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when element is in the center 10% of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    Object.values(observerRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Find active image
  const activeAmenity = AMENITIES.find((a) => a.id === activeId) || AMENITIES[0];

  return (
    <section className="relative w-full bg-brand-bg border-t border-neutral-200">
      
      <div className="flex flex-col md:flex-row">
        
        {/* LEFT COLUMN - Scrolling Content */}
        <div className="w-full md:w-1/3 flex flex-col relative z-10 bg-brand-bg">
          
          {/* Main Title - Scrolls with the content */}
          <div className="px-6 md:px-12 pt-24 pb-12">
            <h2 className="text-[12vw] md:text-[5vw] leading-[0.9] font-medium tracking-tighter text-brand-black">
              Amenities
            </h2>
            <p className="mt-8 text-sm text-neutral-600 max-w-xs leading-relaxed">
               The One with an attractive atmosphere that invites you to step into the office. We strive to build a strong sense of community.
            </p>
          </div>

          {/* Scrollable Sections */}
          <div className="flex flex-col pb-24">
            {AMENITIES.map((item) => (
              <div 
                key={item.id}
                id={item.id}
                ref={(el) => (observerRefs.current[item.id] = el)}
                className="min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center px-6 md:px-12 border-l border-neutral-200 md:border-none transition-colors duration-500"
              >
                <div className={`transition-opacity duration-500 ${activeId === item.id ? "opacity-100" : "opacity-30"}`}>
                    <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    {item.name}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-500 max-w-sm leading-relaxed">
                    {item.description}
                    </p>
                    
                    {/* Dots Indicator */}
                    <div className="flex gap-2 mt-6">
                        {item.dots.map((dotColor, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${dotColor}`} />
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Sticky Image Container */}
        <div className="hidden md:block w-2/3 relative">
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-100">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeAmenity.id}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-20%", opacity: 0 }} 
                transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] // Custom "editorial" ease
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={activeAmenity.image} 
                  alt={activeAmenity.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle gradient overlay for text contrast if needed */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Image Fallback (Stacked) */}
        {/* On mobile, we might want to show images inline or just keep the text. 
            Given the request "stack the content vertically", we can show the image inside the text block on mobile. */}
      </div>
    </section>
  );
};
