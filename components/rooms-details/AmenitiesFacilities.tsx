
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiWifi,
  FiMonitor,
  FiWind,
  FiCoffee,
  FiShield,
  FiDroplet,
  FiCoffee as FiCup,
  FiGrid,
  FiKey,
  FiPackage,
} from "react-icons/fi";
import {
  LuBath,
  LuLampDesk,
  LuRefrigerator,
  LuShirt,
  LuDoorOpen,
} from "react-icons/lu";

const amenities = [
  { name: "Free Wi-Fi", icon: FiWifi },
  { name: "Smart TV", icon: FiMonitor },
  { name: "Air Conditioning", icon: FiWind },
  { name: "Luxury Bathroom", icon: LuBath },
  { name: "Private Balcony", icon: LuDoorOpen },
  { name: "Mini Bar", icon: LuRefrigerator },
  { name: "Tea/Coffee Maker", icon: FiCup },
  { name: "In-Room Safe", icon: FiShield },
  { name: "Bathrobes", icon: LuShirt },
  { name: "Premium Toiletries", icon: FiPackage },
];

export default function AmenitiesFacilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="amenities"
      className="overflow-hidden bg-[#fbf5ed] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-12"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 sm:mb-12 lg:mb-14"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-xs font-medium tracking-[0.22em] text-[#b78342] sm:text-sm sm:tracking-[0.25em]">
              ROOM FEATURES
            </span>

            <span className="h-px w-12 bg-[#c69a60] sm:w-16" />
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#291810] sm:text-4xl md:text-5xl lg:text-[58px]">
            Amenities &amp; Facilities
          </h2>
        </motion.div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;

            return (
              <motion.div
                key={amenity.name}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 22, scale: 0.97 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : (index % 5) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative flex min-h-[135px] flex-col items-center justify-center gap-4 px-2 py-7",
                  "transition-colors duration-300 hover:bg-white/60 mb-5",
                  "sm:min-h-[125px] sm:gap-3 sm:px-3 sm:py-4",
                  index % 2 !== 0 ? "border-l-2 border-[#e9ded1] sm:border-l-0" : "",
                  index % 5 !== 0 ? "lg:border-l-2 lg:border-[#e9ded1]" : "",
                  index % 3 !== 0 ? "sm:border-l-2 sm:border-[#e9ded1] lg:border-l-0" : "",
                  index >= 5 ? "border-t border-[#e9ded1]" : "",
                  index >= 3 && index < 5 ? "sm:border-t-0" : "",
                  index >= 5 ? "lg:border-t-0" : "",
                ].join(" ")}
              >
                {/* Icon */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, scale: 1.08 }
                  }
                  transition={{ duration: 0.25 }}
                  className="flex h-12 w-12 items-center justify-center text-[#b9803b] sm:h-14 sm:w-14"
                >
                  <Icon
                    size={43}
                    strokeWidth={1.45}
                    aria-hidden="true"
                    className="h-9 w-9 transition-colors duration-300 group-hover:text-[#8d5e2d] sm:h-11 sm:w-11"
                  />
                </motion.div>

                {/* Amenity label */}
                <h3 className="text-center text-xs font-medium text-[#342820] transition-colors duration-300 group-hover:text-[#a36f32] sm:text-sm md:text-base">
                  {amenity.name}
                </h3>

                {/* Decorative hover line */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-3 h-px w-8 origin-center bg-[#bd873f]"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
