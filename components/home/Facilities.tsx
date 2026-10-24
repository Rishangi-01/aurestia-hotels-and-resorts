
"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { facilitiesContent } from "@/data";

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(facilitiesContent.defaultActiveIndex);
  const reduceMotion = useReducedMotion();

  const activeFacility = facilitiesContent.items[activeIndex];

  return (
    <section
      id={facilitiesContent.id}
      className="overflow-hidden bg-white py-3 sm:py-8 lg:py-12"
    >
      <div className="grid min-h-[650px] grid-cols-1 lg:min-h-[720px] lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reduceMotion ? 0 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-h-[390px] overflow-hidden sm:min-h-[520px] lg:min-h-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFacility.id}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.65 }}
              className="absolute inset-0"
            >
              <Image
                src={activeFacility.image}
                alt={activeFacility.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.025]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeFacility.badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-xs font-medium tracking-[0.28em] text-white drop-shadow sm:text-sm"
              >
                {activeFacility.badge}
              </motion.p>
            </AnimatePresence>
            <div className="mt-3 h-[2px] w-16 bg-[#c39350]" />
          </div>
        </motion.div>

        <div className="flex items-center px-5 py-3 sm:px-10 sm:py-6 lg:px-10 lg:py-6 xl:px-14 2xl:px-20">
          <div className="mx-auto w-full max-w-[720px]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex items-center gap-5"
            >
              <span className="font-serif text-2xl italic text-[#bd843b] sm:text-[28px]">
                {facilitiesContent.eyebrow}
              </span>
              <span className="h-[2px] w-20 bg-[#bd843b]" />
            </motion.div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-3 font-serif text-[clamp(2.8rem,4.6vw,5rem)] leading-[1.08] tracking-[-0.045em] text-[#301710]"
            >
              {facilitiesContent.headingPrefix} <span className="text-[#b6813f]">{facilitiesContent.headingAccent}</span>
            </motion.h2>

            <div
              role="tablist"
              aria-label={facilitiesContent.tabListLabel}
              className="mt-8 flex flex-wrap border-b border-[#e7dfd5] sm:mt-5"
            >
              {facilitiesContent.items.map((facility, index) => (
                <button
                  key={facility.id}
                  id={`facility-tab-${facility.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls="facility-panel"
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-1 whitespace-nowrap px-2 pb-4 pt-1 text-sm transition-colors duration-300 sm:px-3 sm:text-base lg:text-[17px] xl:text-lg ${
                    activeIndex === index
                      ? "text-[#bd843b]"
                      : "text-[#51362c] hover:text-[#bd843b]"
                  }`}
                >
                  {facility.tab}

                  {activeIndex === index && (
                    <motion.span
                      layoutId="facility-active-tab"
                      className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#bd843b]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div
              id="facility-panel"
              role="tabpanel"
              aria-labelledby={`facility-tab-${activeFacility.id}`}
              className="mt-8 min-h-[130px] sm:mt-3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFacility.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35 }}
                >
                  <h3 className="font-serif text-3xl tracking-[-0.035em] text-[#321a13] sm:text-4xl">
                    {activeFacility.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-[15px] leading-7 text-[#6e5c54] sm:text-base sm:leading-8">
                    {activeFacility.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: 0.05 }}
                className="group relative mt-3 aspect-[1.6/1] overflow-hidden bg-[#f5f0e9] sm:mt-2"
              >
                <Image
                  src={activeFacility.image}
                  alt={activeFacility.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="transition-transform duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
