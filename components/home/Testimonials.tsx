
"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Our stay at Aurestia was absolutely exceptional. The ambiance, hospitality, and attention to detail made it a truly memorable experience. We can't wait to return.",
    name: "Ritika Sharma",
    role: "LEISURE TRAVELLER",
  },
  {
    quote:
      "From the beautiful surroundings to the thoughtful service, every moment felt special. Aurestia is the perfect place to relax, unwind, and create beautiful memories.",
    name: "Aarav Mehta",
    role: "FREQUENT TRAVELLER",
  },
  {
    quote:
      "An extraordinary escape with beautiful interiors, peaceful views, and genuinely warm hospitality. Every detail made our visit feel effortless and unforgettable.",
    name: "Ananya Kapoor",
    role: "LUXURY TRAVELLER",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(next, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion, next]);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      aria-label="Guest testimonials"
      className="relative overflow-hidden bg-[#faf7f1] px-5 py-8 sm:px-10 sm:py-8 lg:min-h-[570px] lg:px-16 lg:py-12 w-[100%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(190,145,80,0.07),_transparent_65%)]"
      />

      <div
        className="relative mx-auto max-w-[1200px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget as Node | null
            )
          ) {
            setIsPaused(false);
          }
        }}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-5">
            <span className="h-px w-10 bg-[#b78342] sm:w-11" />

            <p className="text-[10px] font-medium tracking-[0.28em] text-[#49352a] sm:text-xs sm:tracking-[0.32em]">
              VOICE FROM OUR GUESTS
            </p>

            <span className="h-px w-10 bg-[#b78342] sm:w-11" />
          </div>

          <h2 className="mt-3 font-serif text-[clamp(2.8rem,5.5vw,4.8rem)] leading-tight tracking-[-0.045em] text-[#2e1912]">
            Testi<span className="text-[#b78342]">monials</span>
          </h2>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex flex-col items-center"
          aria-hidden="true"
        >
          <span className="h-[52px] font-serif text-[85px] font-bold leading-[0.9] text-[#b78342]">
            “
          </span>
          <span className="mt-2 h-5 w-px bg-[#b78342]" />
        </motion.div>

        <div className="relative mt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#b78342] transition-transform duration-300 hover:-translate-x-1 sm:h-12 sm:w-12"
          >
            <FiArrowLeft size={27} strokeWidth={1.4} />
          </button>

          <div
            className="w-full max-w-[920px] px-8 text-center sm:px-14"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 18 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -14 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
              >
                <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.55] tracking-[-0.018em] text-[#3d241b]">
                  “{active.quote}”
                </blockquote>

                <div className="mx-auto mt-6 h-px w-12 bg-[#b78342]" />

                <h3 className="mt-4 font-serif text-xl text-[#321d14] sm:text-2xl">
                  {active.name}
                </h3>

                <p className="mt-2 text-[10px] font-medium tracking-[0.28em] text-[#b78342] sm:text-xs sm:tracking-[0.32em]">
                  {active.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#b78342] transition-transform duration-300 hover:translate-x-1 sm:h-12 sm:w-12"
          >
            <FiArrowRight size={27} strokeWidth={1.4} />
          </button>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-6"
          aria-label="Choose a testimonial"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "step" : undefined}
              className={`h-[15px] w-[15px] rounded-full border transition-all duration-300 ${
                activeIndex === index
                  ? "border-[#b78342] bg-[#b78342]"
                  : "border-[#b78342] bg-transparent hover:bg-[#b78342]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
