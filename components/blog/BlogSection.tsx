
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { blogSectionContent } from "@/data";

export default function BlogSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id={blogSectionContent.id}
      className="overflow-hidden bg-[#fcf8f2] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={reveal}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#b77d39] sm:text-xs">
              {blogSectionContent.eyebrow}
            </span>
            <span className="h-px w-8 bg-[#c6975d]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-[#25150f] sm:text-5xl md:text-6xl">
            {blogSectionContent.headingFirst}{" "}
            <span className="text-[#b9803b]">
              {blogSectionContent.headingAccent}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-[#79716b] sm:text-sm sm:leading-6 lg:text-lg">
            {blogSectionContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
          {blogSectionContent.posts.map((post, index) => (
            <motion.article
              key={index}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={reveal}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : (index % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex h-full flex-col border border-[#eee3d7] bg-white/40 transition-all duration-300 hover:border-[#d6b58d] hover:bg-white/80 hover:shadow-[0_12px_35px_rgba(76,45,20,0.07)]"
            >
              {/* Image */}
              <Link
                href={post.href}
                aria-label={`${blogSectionContent.readAriaLabelPrefix} ${post.title}`}
                className="relative block aspect-[1.48/1] overflow-hidden bg-[#eee5da]"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                <span className="pointer-events-none absolute inset-0 bg-black/[0.02] transition-colors duration-500 group-hover:bg-black/[0.08]" />
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:px-7">
                {/* Date */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[9px] font-semibold tracking-[0.13em] text-[#b77d39] sm:text-[10px] lg:text-[14px]">
                    {post.date}
                  </span>
                  <span className="h-px w-6 bg-[#d5b184]" />
                </div>

                <h3 className="font-serif text-lg leading-[1.3] text-[#291a13] transition-colors duration-300 group-hover:text-[#a66e31] sm:text-xl lg:text-3xl">
                  <Link
                    href={post.href}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9803b]"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-[1.8] text-[#79716b] sm:text-sm sm:leading-6 lg:text-[16px]">
                  {post.description}
                </p>

                {/* Read more */}
                <div className="mt-auto pt-4">
                  <Link
                    href={post.href}
                    className="group/link inline-flex min-h-9 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a76d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9803b] lg:text-[16px] lg:gap-5"
                  >
                    <span className="transition-colors duration-300 group-hover/link:text-[#70451e]">
                      {blogSectionContent.readMoreLabel}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#c18b4c] transition-all duration-300 group-hover/link:bg-[#b9803b] group-hover/link:text-white lg:h-11 lg:w-11">
                      <FiArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
