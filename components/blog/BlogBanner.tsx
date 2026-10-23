
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { blogBannerContent } from "@/data";

export default function BlogBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby={blogBannerContent.ariaLabelledBy}
      className="group relative flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#241a15] sm:min-h-[380px] lg:min-h-[480px] xl:min-h-[410px]"
    >
      <motion.div
        initial={reduceMotion ? false : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] group-hover:scale-[1.025]"
          style={{
            backgroundImage: `url('${blogBannerContent.image}')`,
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/45" />


      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <motion.h1
          id={blogBannerContent.titleId}
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-4xl font-normal uppercase leading-tight tracking-[0.015em] text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          {blogBannerContent.title}
        </motion.h1>

        <motion.nav
          aria-label={blogBannerContent.breadcrumbLabel}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.4,
          }}
          className="mt-6 sm:mt-8"
        >
          <ol className="flex flex-wrap items-center justify-center gap-2.5 text-sm text-white/80 sm:gap-3 sm:text-base md:text-lg">
            <li>
              <Link
                href={blogBannerContent.homeHref}
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#e2b778]"
              >
                {blogBannerContent.homeLabel}
              </Link>
            </li>

            <li aria-hidden="true">
              {blogBannerContent.breadcrumbSeparator}
            </li>

            <li
              aria-current="page"
              className="text-white transition-colors duration-300"
            >
              {blogBannerContent.currentPage}
            </li>
          </ol>
        </motion.nav>
      </div>
    </section>
  );
}
