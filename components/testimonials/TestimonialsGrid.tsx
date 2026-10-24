
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonialsGridContent } from "@/data";

const REVIEWS_PER_PAGE = 9;

function ReviewCard({
  review,
  index,
}: {
  review: (typeof testimonialsGridContent.reviews)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.25 },
            }
      }
      className="group flex h-full flex-col border border-[#eee2d3] bg-white/50 p-5 transition-colors duration-300 hover:border-[#c99a5b] hover:bg-white sm:p-6"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8efe2] transition-colors duration-300 group-hover:bg-[#f1dfc4]">
        <FaQuoteLeft
          aria-hidden="true"
          className="text-[#bf8735]"
          size={15}
        />
      </div>

      <p className="mt-4 flex-1 font-serif text-[15px] leading-[1.75] text-[#3d2b23] sm:text-base">
        {review.review}
      </p>

      <motion.div
        initial={reduceMotion ? false : { width: 18 }}
        whileInView={{ width: 34 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-5 h-px bg-[#c18b42]"
      />

      <div className="mt-4 flex flex-wrap items-end justify-between gap-x-3 gap-y-3">
        <div className="min-w-0">
          <h3 className="font-serif text-lg text-[#2e1b13]">
            {review.name}
          </h3>
          <p className="mt-1 text-xs text-[#8b7b70]">
            {review.location}
          </p>
        </div>

        <div
          className="flex shrink-0 items-center gap-0.5 pb-1 text-[#c58a2c]"
          aria-label={testimonialsGridContent.ratingLabel}
        >
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <FaStar key={starIndex} size={14} aria-hidden="true" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function TestimonialsGrid() {
  const reduceMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(1);
  const reviews = testimonialsGridContent.reviews;
  const pageCount = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const visibleReviews = reviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE,
  );

  return (
    <section
      id={testimonialsGridContent.id}
      className="relative overflow-hidden bg-[#fcfaf6] px-5 py-16 sm:px-8 sm:py-16 lg:px-12 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(195,148,83,0.07),_transparent_55%)]"
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section heading */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.75 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-3 h-[2px] w-10 origin-center bg-[#bd873f]"
          />

          <p className="text-[10px] font-medium tracking-[0.23em] text-[#b78342] sm:text-xs sm:tracking-[0.28em]">
            {testimonialsGridContent.eyebrow}
          </p>

          <h2 className="mt-2 font-serif text-4xl leading-tight tracking-[-0.035em] text-[#2e1912] sm:text-5xl md:text-[56px]">
            {testimonialsGridContent.headingFirst}
            <span className="text-[#b78342]">
              {testimonialsGridContent.headingAccent}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#81736a] sm:text-[15px]">
            {testimonialsGridContent.description}
          </p>
        </motion.header>

        {/* Responsive reviews grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${(currentPage - 1) * REVIEWS_PER_PAGE + index}`}
              review={review}
              index={index}
            />
          ))}
        </div>

        {pageCount > 1 && (
          <nav
            aria-label="Testimonials pagination"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
              className="rounded-sm border border-[#d8c7ad] px-4 py-2 text-sm text-[#6e5540] transition-colors hover:border-[#b78342] hover:text-[#9a692f] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Previous
            </button>

            {Array.from({ length: pageCount }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-sm border px-3 text-sm transition-colors ${
                    currentPage === page
                      ? "border-[#b78342] bg-[#b78342] text-white"
                      : "border-[#d8c7ad] text-[#6e5540] hover:border-[#b78342] hover:text-[#9a692f]"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === pageCount}
              className="rounded-sm border border-[#d8c7ad] px-4 py-2 text-sm text-[#6e5540] transition-colors hover:border-[#b78342] hover:text-[#9a692f] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
