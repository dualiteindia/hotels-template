import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MARQUEE_IMAGES = [
  "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=600&auto=compress&fit=crop", // Mumbai architecture
  "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=compress&fit=crop", // Modern building
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600&auto=compress&fit=crop", // Indian city

  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=compress&fit=crop", // Urban detail
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=compress&fit=crop", // Modern office
];

const GRID_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=compress&fit=crop", // Restaurant
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=compress&fit=crop", // Corporate
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=compress&fit=crop", // CENTER IMAGE - Modern Office
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=compress&fit=crop", // People
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=compress&fit=crop", // Workspace
];

export const LocationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform for the center image scaling
  // Increased scale to 7 to ensure full viewport coverage (100vw/100vh)
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 7]);
  // Adjusted Y offset to better center the expanded image
  const yOffset = useTransform(scrollYProgress, [0, 0.75], [0, -200]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["0px", "0px"]);

  // Overlay text fade in
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-brand-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pb-8">
        {/* 1. Top Marquee Row */}
        <div className="w-full h-32 md:h-48 overflow-hidden flex items-center relative z-10 bg-brand-bg">
          <motion.div
            className="flex gap-4 pl-4 whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, i) => (
              <div
                key={i}
                className="w-48 md:w-64 h-24 md:h-32 shrink-0 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img
                  src={src}
                  alt="location thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 text-[10px] font-bold uppercase text-white drop-shadow-md">
                  View {i + 1}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. Main Title */}
        <div className="w-full px-6 md:px-12 z-10 bg-brand-bg pt-8 md:pt-0">
          <h2 className="text-[5vw] leading-[0.9] font-medium tracking-tighter text-brand-black">
            At the heart of the thriving
          </h2>
          <h2 className="text-[11vw] leading-[0.8] font-medium tracking-tightest text-brand-black ml-[10vw]">
            Bandra Kurla Complex
          </h2>
        </div>

        {/* 3. Bottom Grid & Expanding Image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] px-4 md:px-8 mt-8 flex items-end justify-center z-20">
          <div className="flex gap-4 items-end w-full max-w-[1920px] mx-auto">
            {/* Left Images */}
            <div className="hidden md:block w-1/5 h-48 bg-gray-200 overflow-hidden shrink-0">
              <img
                src={GRID_IMAGES[0]}
                className="w-full h-full object-cover grayscale"
                alt="grid-1"
              />
            </div>
            <div className="hidden md:block w-1/5 h-64 bg-gray-300 overflow-hidden shrink-0">
              <img
                src={GRID_IMAGES[1]}
                className="w-full h-full object-cover grayscale"
                alt="grid-2"
              />
            </div>

            {/* CENTER HERO IMAGE - The one that expands */}
            <div className="w-full md:w-1/5 h-80 relative z-30 shrink-0 origin-center">
              <motion.div
                style={{ scale, y: yOffset, borderRadius }}
                className="w-full h-full overflow-hidden relative"
              >
                <img
                  src={GRID_IMAGES[2]}
                  className="w-full h-full object-cover"
                  alt="Center Hero"
                />

                {/* Fullscreen Overlay Content */}
                <motion.div
                  style={{ opacity: textOpacity, y: textY }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-12 text-center"
                >
                  {/* Typography reduced by ~40% from previous version */}
                  {/* Previous: text-[3.2rem] md:text-[5.1rem] */}
                  {/* New: ~2rem and ~3rem */}
                  <h3 className="text-[2rem] md:text-[3rem] font-light tracking-tighter mb-4 leading-none">
                    We cultivate <br />{" "}
                    <span className="italic font-serif">creativity</span>
                  </h3>
                  {/* Previous: text-[0.95rem] md:text-[1.06rem] */}
                  {/* New: ~0.6rem and ~0.7rem */}
                  <p className="max-w-lg text-[0.7rem] md:text-[0.8rem] font-light leading-relaxed opacity-90">
                    In the center of Mumbai's financial district, we've carved
                    out a sanctuary for the bold and the artistic.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Images */}
            <div className="hidden md:block w-1/5 h-64 bg-gray-300 overflow-hidden shrink-0">
              <img
                src={GRID_IMAGES[3]}
                className="w-full h-full object-cover grayscale"
                alt="grid-3"
              />
            </div>
            <div className="hidden md:block w-1/5 h-48 bg-gray-200 overflow-hidden shrink-0">
              <img
                src={GRID_IMAGES[4]}
                className="w-full h-full object-cover grayscale"
                alt="grid-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

