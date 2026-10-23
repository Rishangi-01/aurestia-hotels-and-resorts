
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function BlogArticleHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fcfaf6] px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-10 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-[1600px]">
        {/* Article heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="mb-7 max-w-4xl pl-1 sm:mb-9 lg:mb-10 lg:pl-7"
        >

          <motion.h1
            variants={fadeUp}
            className="font-serif text-[clamp(2.15rem,5.2vw,4.8rem)] font-normal leading-[1.08] tracking-[-0.045em] text-[#25140e]"
          >
            The Ultimate Guide to a
            <br className="hidden sm:block" />{" "}
            Relaxing{" "}
            <span className="text-[#bd853c]">
              Beach Vacation
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-3xl text-sm leading-7 text-[#77716d] sm:mt-5 sm:text-base sm:leading-8 lg:text-lg"
          >
            Discover tips and ideas to make the most of your
            beach getaway, from the best activities to
            unforgettable experiences.
          </motion.p>
        </motion.div>

        {/* Main resort image */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 35,
            clipPath: shouldReduceMotion
              ? "inset(0)"
              : "inset(8% 0 0 0)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            clipPath: "inset(0)",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative isolate h-[280px] overflow-hidden rounded-sm bg-[#e8d6be] sm:h-[380px] md:h-[460px] lg:h-[min(39vw,590px)] lg:min-h-[440px]"
        >
          <Image
            src="/images/home/ocean-view-suite.png"
            alt="Luxury beachfront resort terrace overlooking the ocean at sunset"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center ${
              shouldReduceMotion
                ? ""
                : "transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
}
