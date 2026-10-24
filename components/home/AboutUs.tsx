
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosBed } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
import { aboutUsContent } from "@/data";

const featureIcons: Record<string, IconType> = {
  bed: IoIosBed,
  diamond: IoDiamondOutline,
};

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id={aboutUsContent.id}
      className="relative overflow-hidden bg-[white] px-5 py-5 sm:px-8 sm:py-16 lg:px-12 lg:py-16 xl:px-8"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12 xl:gap-16">
        <div className="order-2 lg:order-1">
          <motion.div
            {...reveal()}
            className="mb-5 flex items-center gap-5"
          >
            <span className="text-[11px] font-semibold tracking-[0.35em] text-[#805d37] sm:text-xs">
              {aboutUsContent.eyebrow}
            </span>

            <span className="h-[2px] w-16 bg-[#b68a4b]" />
          </motion.div>

          <motion.h2
            {...reveal(0.08)}
            className="max-w-[680px] font-serif text-[clamp(2.8rem,4.9vw,5.6rem)] leading-[0.98] tracking-[-0.055em]"
          >
            <span className="block text-[#24140f]">
              {aboutUsContent.headingLines[0]}
            </span>

            <span className="mt-1 block text-[#b18445]">
              {aboutUsContent.headingLines[1]}
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-5 max-w-[690px] text-[15px] leading-[1.85] text-[#73717a] sm:text-base lg:mt-5"
          >
            {aboutUsContent.description}
          </motion.p>

          <div className="mt-6 space-y-6 sm:mt-6 sm:space-y-7">
            {aboutUsContent.features.map((feature, index) => {
              const Icon = featureIcons[feature.icon];

              return (
                <motion.div
                  key={feature.title}
                  {...reveal(0.24 + index * 0.14)}
                  className="group flex items-center gap-4 sm:gap-6"
                >
                  {/* Circular icon */}
                  <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#f7f3ee] text-[#725034] transition-all duration-300 group-hover:bg-[#b18445] group-hover:text-white sm:h-[70px] sm:w-[70px]">
                    <Icon size={29} strokeWidth={1.35} />
                  </div>

                  {/* Gold separator */}
                  <div className="h-12 w-[2px] shrink-0 bg-[#b18445] transition-all duration-300 group-hover:h-14" />

                  {/* Feature text */}
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl tracking-[-0.035em] text-[#24140f] sm:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#77747c] sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="order-1 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:order-2 lg:gap-4 xl:gap-5">
          <motion.div
            {...reveal(0.12)}
            className="group relative col-span-1 row-span-2 min-h-[360px] overflow-hidden rounded-xl sm:min-h-[480px] lg:min-h-[560px] xl:min-h-[620px]"
          >
            <Image
              src={aboutUsContent.images[0].src}
              alt={aboutUsContent.images[0].alt}
              fill
              priority
              sizes="(max-width: 1023px) 50vw, 26vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />
          </motion.div>

          <motion.div
            {...reveal(0.25)}
            className="group relative aspect-[1.15/1] overflow-hidden rounded-xl"
          >
            <Image
              src={aboutUsContent.images[1].src}
              alt={aboutUsContent.images[1].alt}
              fill
              sizes="(max-width: 1023px) 50vw, 24vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
            />
          </motion.div>

          <motion.div
            {...reveal(0.38)}
            className="group relative aspect-[1.15/1] overflow-hidden rounded-xl"
          >
            <Image
              src={aboutUsContent.images[2].src}
              alt={aboutUsContent.images[2].alt}
              fill
              sizes="(max-width: 1023px) 50vw, 24vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
