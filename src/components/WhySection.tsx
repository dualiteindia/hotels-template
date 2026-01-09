import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    number: "1",
    title: "We are attractive",
    description: "The 1 Reserve offers an attractive atmosphere and amazing views, inviting you to step into the office. We strive to build a strong sense of community.",
    bg: "bg-brand-red",
    text: "text-brand-black",
  },
  {
    id: 2,
    number: "2",
    title: "We are colorful",
    description: "Vibrant spaces designed to spark creativity. From our art installations to our breakout zones, every corner is curated to inspire the modern visionary.",
    bg: "bg-brand-yellow",
    text: "text-brand-black",
  },
  {
    id: 3,
    number: "3",
    title: "We are sustainable",
    description: "Built with the future in mind. Our buildings utilize smart energy systems and sustainable materials, reducing our carbon footprint while maximizing comfort.",
    bg: "bg-brand-green",
    text: "text-brand-black",
  },
  {
    id: 4,
    number: "4",
    title: "We have a lot of space",
    description: "With mighty office floors nearing 2,465 sq.m, we create an attractive office for both creative and corporate tenants. Excellent underground parking included.",
    bg: "bg-brand-pink",
    text: "text-brand-black",
  },
];

export const WhySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-brand-bg pt-24">
       {/* Section Title - Aligned to the Left */}
       <div className="absolute top-0 left-0 w-full h-24 flex items-center justify-start px-6 md:px-12 z-50 bg-brand-bg">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Why are we the one?
            </h2>
       </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        <div className="relative w-full h-full">
            {/* Slide 1 - Base Layer (Static) */}
            <Slide 
                data={SLIDES[0]} 
                zIndex={10} 
            />

            {/* Slide 2 - Slides in */}
            <MovingSlide
            data={SLIDES[1]}
            zIndex={20}
            progress={scrollYProgress}
            range={[0, 0.33]}
            stopPosition="6vw" // Leaves 6vw of Slide 1 visible
            />

            {/* Slide 3 - Slides in */}
            <MovingSlide
            data={SLIDES[2]}
            zIndex={30}
            progress={scrollYProgress}
            range={[0.33, 0.66]}
            stopPosition="12vw" // Leaves 6vw of Slide 1 + 6vw of Slide 2
            />

            {/* Slide 4 - Slides in */}
            <MovingSlide
            data={SLIDES[3]}
            zIndex={40}
            progress={scrollYProgress}
            range={[0.66, 1]}
            stopPosition="18vw" // Leaves 6vw of 1, 2, and 3
            />
        </div>
      </div>
    </section>
  );
};

// Component for the static first slide
const Slide = ({ data, zIndex }: { data: typeof SLIDES[0]; zIndex: number }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full ${data.bg} ${data.text} flex items-center justify-start overflow-hidden`}
      style={{ zIndex }}
    >
      <SlideContent data={data} />
    </div>
  );
};

// Component for slides that move
const MovingSlide = ({
  data,
  zIndex,
  progress,
  range,
  stopPosition,
}: {
  data: typeof SLIDES[0];
  zIndex: number;
  progress: MotionValue<number>;
  range: [number, number];
  stopPosition: string;
}) => {
  const x = useTransform(progress, range, ["100%", stopPosition]);

  return (
    <motion.div
      className={`absolute inset-0 w-full h-full ${data.bg} ${data.text} overflow-hidden shadow-[-20px_0_40px_rgba(0,0,0,0.1)]`}
      style={{ zIndex, x }}
    >
      <div className="relative w-full h-full">
         <SlideContent data={data} />
      </div>
    </motion.div>
  );
};

const SlideContent = ({ data }: { data: typeof SLIDES[0] }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-start px-8 md:px-24 gap-8 md:gap-16">
        
        {/* Large Index Number */}
        <div className="relative leading-none select-none pointer-events-none shrink-0">
            <span className="text-[30vh] md:text-[60vh] font-bold tracking-tighter text-[#1a1a1a]">
                {data.number}
            </span>
            {/* Dot Detail */}
            <div className="absolute top-[15%] right-[-20px] w-3 h-3 md:w-5 md:h-5 bg-[#1a1a1a] rounded-full" />
        </div>

        {/* Text Content - Immediately adjacent to the number */}
        <div className="max-w-md md:max-w-lg text-left flex flex-col justify-center pt-4 md:pt-12">
            <div className="w-12 h-1 bg-black/20 mb-6 hidden md:block" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{data.title}</h3>
            <p className="text-lg md:text-xl leading-relaxed font-medium opacity-80">
                {data.description}
            </p>
        </div>
    </div>
  );
};
