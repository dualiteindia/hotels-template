import { motion } from "framer-motion";
import { transition } from "../lib/utils";

export const BrandStory = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 border-t border-neutral-300 bg-brand-bg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-24">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <span className="text-sm font-medium text-neutral-500 md:w-1/4 uppercase tracking-widest">
              One of a kind
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] md:w-3/4"
            >
              The{" "}
              <span className="inline-flex items-center justify-center w-[1.2em] h-[1.2em] bg-black text-white rounded-full text-[0.6em] align-middle mx-1">
                1
              </span>
              Reserve is a multi-tenant ecosystem built for India's modern
              visionaries.
            </motion.h2>
          </div>

          {/* Content Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
            <div className="hidden md:block">{/* Spacer for asymmetry */}</div>

            <div className="flex flex-col gap-12">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-800 leading-relaxed font-light"
              >
                Located at the Bandra Kurla Complex (BKC) in Mumbai, 1 Reserve
                stands out with its robust, architectural presence. Designed to
                complement the industrial character of Mumbai's financial
                district while offering a sanctuary for creativity. Already
                housing iconic Indian enterprises and global innovators, we are
                attractive, colorful, sustainable, and distinctly original.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.4 }}
                className="flex items-center gap-6 pt-8 border-t border-neutral-300 w-full"
              >
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Are you the one?
                </span>
                <button
                  className="px-8 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300"
                  name="contact-us"
                >
                  Contact us
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

