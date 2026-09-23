import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Brand identity",
  "Performance",
  "Results",
  "Strategy",
  "Growth",
  "Brand identity",
  "Performance",
  "Results",
  "Strategy",
  "Growth",
];

const BrandSlider = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      /*
       * Continuous automatic movement
       */
      const autoMove = gsap.to(track, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      /*
       * Page scroll also affects the slider
       */
      const scrollAnimation = gsap.to(track, {
        x: "+=180",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      return () => {
        autoMove.kill();
        scrollAnimation.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#1b1b1b] py-8"
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-20 whitespace-nowrap"
      >
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-20"
          >
            <span className="text-2xl font-semibold text-white">
              {item}
            </span>

            <span className="text-4xl text-white">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSlider;