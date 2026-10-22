
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const resortImages = {
  terrace: "/images/home/resort-terrace.png",
  pool: "/images/home/resort-pool.png",
  arch: "/images/home/resort-arch.png",
};

export default function StayBeyond() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-8 lg:pt-24 lg:pb-8"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.h2
          {...reveal()}
          className="mb-10 text-center font-serif text-[clamp(2.5rem,9.7vw,8.8rem)] leading-[1.05] tracking-[-0.055em] sm:mb-14 lg:mb-16"
        >
          <span className="text-[#32180f]">A Stay </span>
          <span className="text-[#b78339]">
            Beyond Ordinary
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-[0.92fr_1.38fr_0.82fr] lg:gap-6 xl:gap-7">
          <motion.div
            {...reveal(0.12)}
            className="flex flex-col"
          >
            <div className="group relative aspect-[1.35/1] overflow-hidden sm:aspect-[1.65/1] lg:aspect-[1.12/1]">
              <Image
                src={resortImages.terrace}
                alt="Luxury resort terrace overlooking the sea"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />
            </div>

            <div className="relative ml-2 h-12 w-px bg-[#b78339]">
              <span className="absolute -bottom-0.5 -left-[4px] h-[9px] w-[9px] rounded-full bg-[#b78339]" />
            </div>

            <div className="max-w-md">
              <p className="text-base leading-[1.65] text-[#424242] sm:text-lg lg:text-[17px] xl:text-xl">
                Discover serene escapes, luxurious stays and unforgettable
                experiences in the heart of nature.
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 78 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 h-[2px] bg-[#b78339]"
              />
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.25)}
            className="group relative aspect-[1.1/1] overflow-hidden sm:aspect-[1.45/1] lg:aspect-[0.94/1] xl:aspect-[0.96/1]"
          >
            <Image
              src={resortImages.pool}
              alt="Infinity pool at a luxury seaside resort"
              fill
              priority
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 45vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />
          </motion.div>

          <motion.div
            {...reveal(0.38)}
            className="group relative aspect-[0.95/1] overflow-hidden sm:aspect-[1.2/1] lg:mt-auto lg:aspect-[0.75/1] xl:mt-auto"
          >
            <Image
              src={resortImages.arch}
              alt="Elegant stone archway at a Mediterranean resort"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 28vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
