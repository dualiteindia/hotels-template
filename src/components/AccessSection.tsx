import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AccessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Staggered Parallax Effects for the 3 floating images
  // Image 1 (Pink) - Moves fastest
  const y1 = useTransform(scrollYProgress, [0.3, 0.8], ["20%", "-100%"]);

  // Image 2 (Green) - Medium speed
  const y2 = useTransform(scrollYProgress, [0.4, 0.9], ["40%", "-100%"]);

  // Image 3 (Red) - Slowest
  const y3 = useTransform(scrollYProgress, [0.5, 1.0], ["60%", "-100%"]);

  return (
    <div ref={containerRef} className="relative w-full bg-brand-bg">
      {/* -------------------------------------------------------
          PART 1: YELLOW ACCESS SECTION (Static)
         ------------------------------------------------------- */}
      <section className="relative w-full min-h-screen bg-brand-yellow text-brand-black px-6 md:px-12 py-12 flex flex-col justify-between overflow-hidden">
        {/* Giant Headline */}
        <h2 className="text-[18vw] leading-[0.8] font-medium tracking-tighter mb-12 md:mb-0">
          Access
        </h2>

        <div className="flex flex-col md:flex-row w-full h-full gap-12 md:gap-8 relative z-10">
          {/* Left Column: Address */}
          <div className="w-full md:w-1/4 flex flex-col justify-between h-full pt-4">
            <div className="text-lg md:text-xl font-medium leading-tight">
              <p>1 Reserve</p>
              <p>Bandra Kurla Complex</p>
              <p>Mumbai, 400051</p>
              <p>Maharashtra, India</p>
            </div>

            <button
              className="mt-8 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest w-fit hover:bg-neutral-800 transition-colors"
              name="contact-us"
            >
              Contact us
            </button>
          </div>

          {/* Center: Map Visual */}
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[60vh] bg-[#E5A812] overflow-hidden rounded-sm border border-black/5">
            {/* Stylized Map Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 Q50,10 100,30"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M20,0 Q30,50 10,100"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M80,0 Q70,50 90,100"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,80 L100,60"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M40,40 L60,60"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>

            {/* Location Marker */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                1
              </div>
              <div className="w-1 h-8 bg-black/50 mt-[-2px]"></div>
            </div>

            {/* Map Labels */}
            <div className="absolute top-[40%] left-[55%] text-[10px] font-bold uppercase tracking-wider">
              • The Capital
            </div>
            <div className="absolute top-[25%] left-[20%] text-[10px] font-bold uppercase tracking-wider">
              • Jio World Drive
            </div>
            <div className="absolute bottom-[30%] right-[20%] text-[10px] font-bold uppercase tracking-wider">
              • Trident Hotel
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="w-full md:w-1/4 flex flex-col justify-center pt-8 md:pt-0">
            <div className="space-y-6 max-w-xs">
              <p className="text-sm font-medium leading-relaxed">
                The{" "}
                <span className="inline-flex items-center justify-center w-4 h-4 bg-black text-white rounded-full text-[10px] mx-1">
                  1
                </span>{" "}
                is located in the heart of BKC, just 20 minutes from the
                International Airport.
              </p>
              <p className="text-sm font-medium leading-relaxed text-neutral-800">
                For those arriving by car, accessibility is convenient via the
                Western Express Highway and Sea Link.
              </p>
              <p className="text-sm font-medium leading-relaxed text-neutral-800">
                Let the signage be your guide and follow the designated colors
                to your entrance.
              </p>

              <button
                className="px-6 py-2 border border-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors w-fit"
                name="open-google-maps"
              >
                Open Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          PART 2: FLOATING IMAGES TRANSITION
         ------------------------------------------------------- */}
      <section className="relative h-[150vh] bg-brand-bg overflow-hidden">
        {/* Giant Background Text "THE 1" */}
        <div className="absolute top-20 left-0 w-full flex justify-center pointer-events-none z-0">
          <h2 className="text-[35vw] font-bold tracking-tighter leading-none text-brand-black opacity-100">
            THE<span className="tracking-tightest">1</span>
          </h2>
        </div>

        {/* Floating Image 1 - Pink (Left) */}
        <motion.div
          style={{ y: y1 }}
          className="absolute left-[10%] top-[40%] w-[25vw] aspect-[4/3] bg-brand-pink p-4 z-10"
        >
          <img
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/deq2eR5qHdsS8PueXsBfYhVQxss.avif"
            className="w-full h-full object-cover"
            alt="Pink Property"
          />
        </motion.div>

        {/* Floating Image 2 - Green (Right) */}
        <motion.div
          style={{ y: y2 }}
          className="absolute right-[15%] top-[60%] w-[20vw] aspect-square bg-brand-green p-4 z-20"
        >
          <img
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/CFp2HUamNRnKG45QU2GFNdYDgk.avif"
            className="w-full h-full object-cover"
            alt="Green Property"
          />
        </motion.div>

        {/* Floating Image 3 - Red (Center Bottom) */}
        <motion.div
          style={{ y: y3 }}
          className="absolute left-[40%] top-[80%] w-[22vw] aspect-[3/4] bg-brand-red p-4 z-30"
        >
          <img
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/KKYjmUA62hs6qFhvp1gzyFBmrBE.avif"
            className="w-full h-full object-cover"
            alt="Red Property"
          />
        </motion.div>
      </section>
    </div>
  );
};

