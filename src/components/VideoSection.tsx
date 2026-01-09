import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Circle Expansion Logic
  // 0 -> 0.3: Small expansion (First scroll)
  // 0.3 -> 0.8: Full expansion (Second scroll)
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8],
    [
      "circle(20% at 50% 50%)", // Initial state
      "circle(25% at 50% 50%)", // Slightly larger
      "circle(100% at 50% 50%)", // Full screen
    ]
  );

  // Background Text Opacity (Fades out as video expands)
  const bgTextOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  // Overlay Text Logic (Fades in AFTER video is full screen)
  const overlayOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const overlayY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Layer 1: Background Typography (Behind the circle) */}
        <motion.div 
          style={{ opacity: bgTextOpacity }}
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        >
          <h2 className="text-[12vw] font-bold tracking-tighter text-neutral-300 leading-none text-center opacity-50">
            COLLABORATION <br /> & GROWTH
          </h2>
        </motion.div>

        {/* Layer 2: Video Container with Mask */}
        <motion.div
          style={{ clipPath }}
          className="relative w-full h-full z-10 bg-black"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/GettyImages-1401517574-1.webm"
          />
          
          {/* Dark overlay for text readability when full screen */}
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black/30 pointer-events-none"
          />
        </motion.div>

        {/* Layer 3: Overlay Content (Appears on top) */}
        <motion.div
          style={{ opacity: overlayOpacity, y: overlayY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center pointer-events-none"
        >
          <h3 className="text-[5vw] font-light tracking-tighter leading-none mb-6">
            Collaboration <br />
            <span className="font-serif italic">& Growth</span>
          </h3>
          <p className="max-w-md text-sm md:text-base font-medium tracking-wide uppercase opacity-80">
            Building the future of work in India's <br/> most dynamic cities.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
