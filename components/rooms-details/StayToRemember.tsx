
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function StayToRemember() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#fcf8f2] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-9 md:gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-16 xl:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-h-[280px] overflow-hidden rounded-[3px] sm:min-h-[380px] lg:min-h-[430px] xl:min-h-[490px]"
        >
          <Image
            src="/images/home/resort-terrace.png"
            alt="Luxurious ocean-view resort terrace with elegant loungers and panoramic sea views"
            fill
            priority={false}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
          />

          {/* Subtle image overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

          {/* Decorative gold corner */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-0 h-[3px] w-1/3 origin-left bg-[#bd8745]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4 sm:mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#b78243] sm:text-sm sm:tracking-[0.24em]">
              A CLOSER LOOK
            </span>
            <span className="h-px w-12 bg-[#c6975d] sm:w-16" />
          </div>

          {/* Heading */}
          <h2 className="max-w-2xl font-serif text-[38px] leading-[1.12] tracking-[-0.035em] text-[#24140f] sm:text-5xl md:text-[54px] xl:text-[64px]">
            A Stay to Remember
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#77716d] sm:mt-6 sm:text-lg sm:leading-[1.85] lg:text-[19px]">
            Unwind in a serene setting with panoramic ocean views, elegant
            design, and thoughtful amenities. Every detail is crafted to
            make your stay relaxing, comfortable, and truly special.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="mt-8 sm:mt-10"
          >
            <Link
              href="/rooms"
              className="group inline-flex min-h-[50px] items-center overflow-hidden rounded-full border-2 border-[#c39356] text-[#33271f] transition-colors duration-300 hover:border-[#a87336] hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b78243] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fcf8f2] sm:min-h-[57px]"
              aria-label="View all rooms and suites"
            >
              <span className="pl-6 pr-5 text-xs font-semibold uppercase tracking-[0.12em] sm:pl-9 sm:pr-8 sm:text-sm">
                View All Rooms
              </span>

              <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-l-2 border-[#c39356] text-[#b78243] transition-all duration-300 group-hover:bg-[#b78243] group-hover:text-white sm:h-[55px] sm:w-[55px]">
                <FiArrowRight
                  size={25}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
