import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation Logic
  // As user scrolls, image scales up and moves slightly left (towards center)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Text opacity fades out slightly at the very end to focus on image
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-brand-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row">
        {/* Left Column: Content */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 z-10"
        >
          <h2 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-[0.9] mb-12 text-brand-black">
            Get in <br /> touch
          </h2>

          <div className="space-y-8 max-w-sm">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">
                Location
              </h4>
              <p className="text-lg md:text-xl font-light leading-relaxed text-brand-black">
                1 Reserve, Bandra Kurla Complex,
                <br />
                Mumbai, Maharashtra 400051
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">
                Contact
              </h4>
              <p className="text-lg md:text-xl font-light leading-relaxed text-brand-black">
                +91 22 1234 5678
                <br />
                <a
                  href="mailto:hello@1reserve.in"
                  className="hover:underline decoration-1 underline-offset-4"
                >
                  hello@1reserve.in
                </a>
              </p>
            </div>

            <div className="pt-8">
              <button
                className="bg-brand-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                name="book-a-tour"
              >
                Book a Tour
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-1/2 h-full overflow-hidden z-0 md:z-auto opacity-20 md:opacity-100 pointer-events-none md:pointer-events-auto">
          <div className="w-full h-full overflow-hidden">
            <motion.div
              style={{ scale, x }}
              className="w-full h-full origin-center md:origin-right"
            >
              <img
                src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/CFp2HUamNRnKG45QU2GFNdYDgk.avif"
                alt="1 Reserve Building"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

