import { motion } from "framer-motion";

const IMAGES = [
  {
    label: "Lobby",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/hotel-checkin-counter-featuring-local-artwork-cultural-motifs-min.webp",
  },
  {
    label: "Coffee Bar",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/restaurant-hall-with-leather-armchairs-french-windows-min.webp",
  },
  {
    label: "Gym",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/man-woman-running-treadmills-modern-gym-min.webp",
  },
  {
    label: "Parking",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/cars-parked-outdoor-parking-min.webp",
  },
  {
    label: "Views",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/hammocks-near-pool-min.webp",
  },
  {
    label: "Creative",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/mid-century-modern-style-interior-neural-network-generated-picture-min.webp",
  },
  {
    label: "Shops",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/mall-high-luxury-uhd-wallpaper-min.webp",
  },
];

export const ImageStripSection = () => {
  return (
    <section className="w-full py-24 bg-brand-bg overflow-hidden border-t border-neutral-200">
      <div className="flex w-full">
        <motion.div
          className="flex gap-8 md:gap-12 px-6 min-w-full"
          animate={{ x: "-50%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...IMAGES, ...IMAGES, ...IMAGES].map((item, i) => (
            <div key={i} className="flex flex-col gap-3 shrink-0">
              <div className="w-48 h-32 md:w-64 md:h-40 overflow-hidden bg-neutral-200">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

