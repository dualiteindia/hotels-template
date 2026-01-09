import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "Creative",
  "Social",
  "Supportive",
  "Colorful",
  "Attractive",
  "Original",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); // 1.5s transition
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-bg text-brand-black px-6 py-6 md:px-12 md:py-8 flex flex-col justify-between">
      {/* Top Section - Headline */}
      <div className="flex justify-end w-full pt-24 md:pt-16">
        <div className="text-right max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[8vw] md:text-[7vw] font-medium leading-[0.85] tracking-tighter text-brand-black"
          >
            For the one
            <br />
            <span className="italic font-serif font-light">who is</span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom Section - Slider & Info */}
      <div className="flex flex-col md:flex-row items-end justify-between w-full pb-8 md:pb-12 relative z-10">
        {/* Vertical Text Slider - Compact */}
        <div className="relative h-[9vw] md:h-[8vw] w-full md:w-1/2 overflow-hidden flex items-end">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={words[index]}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 text-[9vw] md:text-[8vw] leading-[0.8] tracking-tightest font-semibold text-brand-black origin-bottom-left uppercase"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full md:w-auto md:max-w-xs text-right md:text-left mt-8 md:mt-0 flex flex-col items-end md:items-start gap-4"
        >
          <div className="text-sm font-medium leading-relaxed text-neutral-800">
            <p className="mb-2 font-bold">Workspace at BKC, Mumbai</p>
            <p className="text-neutral-600">
              Where heritage meets modern architecture in the heart of India's
              financial capital.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs font-semibold whitespace-nowrap uppercase tracking-wider">
              Are you the one?
            </span>
            <button
              className="bg-[#111] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              name="learn-more"
            >
              Learn more
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

