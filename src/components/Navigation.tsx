import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Global click listener to close menu
  useEffect(() => {
    const handleGlobalClick = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Attach listener to window
    window.addEventListener("click", handleGlobalClick);

    // Cleanup
    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the global listener from firing immediately
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      // Small delay to allow menu to close smoothly before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const menuVariants = {
    closed: {
      clipPath: "circle(0px at calc(100% - 48px) 48px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(150% at calc(100% - 48px) 48px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      {/* 
        NAVBAR 
        Uses mix-blend-difference to invert colors based on background.
        White text on black bg -> White.
        White text on white bg -> Black.
      */}
      <nav className="fixed top-0 left-0 w-full z-[60] px-6 py-6 md:px-12 md:py-8 flex justify-between items-start pointer-events-none text-white mix-blend-difference">
        {/* Brand Mark */}
        <div className="pointer-events-auto">
          <span className="text-sm font-bold tracking-widest uppercase">
            1 Reserve
          </span>
        </div>

        {/* Menu Button */}
        <div className="pointer-events-auto">
          <button
            name="toggle-menu"
            onClick={toggleMenu}
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 bg-[#111] z-[55] flex flex-col justify-end pb-24 px-6 md:px-12 text-white overflow-hidden"
      >
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Column Links */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start gap-4">
            {[
              { label: "About", id: "about" },
              { label: "Building", id: "building" },
              { label: "Amenities", id: "amenities" },
            ].map((item, i) => (
              <motion.button
                key={item.label}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-5xl md:text-7xl font-light tracking-tighter hover:text-neutral-400 transition-colors text-left"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Center Column Links */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start gap-4">
            {[
              { label: "Access", id: "access" },
              { label: "Availability", id: "availability" },
              { label: "Get in touch", id: "contact" },
            ].map((item, i) => (
              <motion.button
                key={item.label}
                custom={i + 3} // Stagger delay
                variants={linkVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-5xl md:text-7xl font-light tracking-tighter hover:text-neutral-400 transition-colors text-left"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right Column: Address & Info */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-end gap-12 md:pl-12">
            <motion.div
              variants={linkVariants}
              custom={6}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                Address
              </h4>
              <p className="text-base font-medium leading-relaxed text-neutral-200">
                1 Reserve, G Block
                <br />
                Bandra Kurla Complex
                <br />
                Mumbai, 400051
              </p>
            </motion.div>

            <motion.div
              variants={linkVariants}
              custom={7}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                Leasing Inquiries
              </h4>
              <p className="text-base font-medium leading-relaxed text-neutral-200">
                <a
                  href="mailto:hello@1reserve.in"
                  className="hover:text-white transition-colors"
                >
                  hello@1reserve.in
                </a>
                <br />
                +91 22 1234 5678
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

