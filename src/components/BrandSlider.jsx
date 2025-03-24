import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "Brand 1", logo: "logos/brand1.png" },
  { name: "Brand 2", logo: "logos/brand2.png" },
  { name: "Brand 3", logo: "logos/brand3.png" },
  { name: "Brand 4", logo: "logos/brand4.png" },
  { name: "Brand 5", logo: "logos/brand5.png" },
  { name: "Brand 6", logo: "logos/brand6.png" },
  { name: "Brand 7", logo: "logos/brand7.png" },
];

const BrandSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const duration = 25; // Adjust speed of scroll

    gsap.to(slider, {
      xPercent: -50, // Moves entire duplicated section, creating infinite loop
      ease: "linear",
      repeat: -1,
      duration: duration,
    });
  }, []);

  return (
    <section id="brands" className="relative w-full min-h-[40vh] bg-gray-100 overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Title */}
      <div className="w-full flex justify-center mb-10">
        <AnimatedTitle title="Brands That We Have Collaborated With" containerClass="text-center text-black" />
      </div>

      {/* Scrolling Brand Logos */}
      <div className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="flex whitespace-nowrap gap-32 w-max">
          {/* Duplicate logos 2X for seamless looping */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="w-80 h-40 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="grayscale hover:grayscale-0 transition duration-300 w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;