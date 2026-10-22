
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Review = {
  name: string;
  location: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "Priya Mehta",
    location: "Mumbai, India",
    review:
      "Aurestia made our vacation truly special. The rooms were luxurious, the staff was incredibly warm, and every detail was perfect.",
  },
  {
    name: "Rahul Sharma",
    location: "Bangalore, India",
    review:
      "An amazing experience from start to finish. The beachfront location, delicious food, and serene atmosphere made our stay unforgettable.",
  },
  {
    name: "Anjali Verma",
    location: "Delhi, India",
    review:
      "Exceptional hospitality and world-class facilities. Aurestia is the perfect blend of luxury and comfort. We can't wait to come back!",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai, India",
    review:
      "Aurestia made our vacation truly special. The rooms were luxurious, the staff was incredibly warm, and every detail was perfect.",
  },
  {
    name: "Rahul Sharma",
    location: "Bangalore, India",
    review:
      "An amazing experience from start to finish. The beachfront location, delicious food, and serene atmosphere made our stay unforgettable.",
  },
  {
    name: "Anjali Verma",
    location: "Delhi, India",
    review:
      "Exceptional hospitality and world-class facilities. Aurestia is the perfect blend of luxury and comfort. We can't wait to come back!",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai, India",
    review:
      "Aurestia made our vacation truly special. The rooms were luxurious, the staff was incredibly warm, and every detail was perfect.",
  },
  {
    name: "Rahul Sharma",
    location: "Bangalore, India",
    review:
      "An amazing experience from start to finish. The beachfront location, delicious food, and serene atmosphere made our stay unforgettable.",
  },
  {
    name: "Anjali Verma",
    location: "Delhi, India",
    review:
      "Exceptional hospitality and world-class facilities. Aurestia is the perfect blend of luxury and comfort. We can't wait to come back!",
  },
];

function ReviewCard({
  review,
  index,
}: {
  review: Review;
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
          aria-label="5 out of 5 stars"
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

  return (
    <section
      id="guest-reviews"
      className="relative overflow-hidden bg-[#fcfaf6] px-5 py-16 sm:px-8 sm:py-16 lg:px-12 lg:py-16"
    >
      {/* Soft luxury background glow */}
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
            VOICE FROM OUR GUESTS
          </p>

          <h2 className="mt-2 font-serif text-4xl leading-tight tracking-[-0.035em] text-[#2e1912] sm:text-5xl md:text-[56px]">
            Testi<span className="text-[#b78342]">monials</span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#81736a] sm:text-[15px]">
            Real stories from our guests who have experienced the comfort,
            elegance, and warm hospitality at Aurestia.
          </p>
        </motion.header>

        {/* Responsive reviews grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${index}`}
              review={review}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
