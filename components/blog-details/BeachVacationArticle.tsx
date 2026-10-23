
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Quote,
} from "lucide-react";

const recentPosts = [
  {
    date: "05 AUG 2026",
    title: "How to Choose the Perfect Room for Your Stay",
    image: "/images/home/deluxe-room.png",
    href: "/blog/choose-perfect-room",
  },
  {
    date: "28 JUL 2026",
    title: "Wellness Retreats: Reconnect with Mind and Body",
    image: "/images/home/resort-terrace.png",
    href: "/blog/wellness-retreats",
  },
  {
    date: "18 JUL 2026",
    title: "A Food Lover's Guide to Resort Dining",
    image: "/images/home/about-bedroom.png",
    href: "/blog/resort-dining",
  },
  {
    date: "10 JUL 2026",
    title: "Top 5 Beach Destinations for Your Next Getaway",
    image: "/images/home/about-terrace.png",
    href: "/blog/beach-destinations",
  },
];

const articleSections = [
  {
    number: "01",
    title: "Choose the Right Destination",
    description:
      "The first step to a perfect beach vacation is picking the right destination. Whether you prefer serene, secluded beaches or vibrant coastal towns, the right location sets the tone for your entire trip. Consider the kind of experience you're looking for — from tranquil escapes to lively beach atmospheres.",
    images: [
      {
        src: "/images/home/deluxe-room.png",
        alt: "Tropical beach with palm trees and turquoise water",
      },
      {
        src: "/images/home/facilities-spa.png",
        alt: "Luxury resort infinity pool overlooking the ocean",
      },
    ],
  },
  {
    number: "02",
    title: "Plan Your Activities",
    description:
      "From water sports and snorkeling to spa treatments and fine dining, beach destinations offer endless activities. Plan a mix of adventure and relaxation to make your trip truly memorable. Whether it's a sunrise beach walk, a snorkeling adventure, or a sunset dinner by the shore, there's always something special to experience.",
    banner: {
      src: "/images/home/ocean-view-suite.png",
      alt: "Luxury beachfront lounge at golden hour",
    },
  },
  {
    number: "03",
    title: "Pack Smart",
    description:
      "Light, comfortable clothing, sunscreen, and beach essentials are a must. Don't forget your camera to capture the breathtaking views and special moments. A little preparation goes a long way in ensuring a smooth and enjoyable vacation.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function BeachVacationArticle() {
  const reduceMotion = useReducedMotion();

  const animation = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        variants: reveal,
      };

  return (
    <main className="overflow-hidden bg-[#fcf9f4] text-[#24150f]">
      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:pb-8 lg:pt-3">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-14">

          {/* Main article */}
          <article className="min-w-0">
            {articleSections.map((section, index) => (
              <motion.section
                key={section.number}
                {...animation}
                className={`${
                  index === 0 ? "" : "mt-9 sm:mt-12"
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="font-serif text-xl text-[#b9803b]">
                    {index + 1}.
                  </span>
                  <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                    {section.title}
                  </h2>
                  <span className="h-px w-10 bg-[#bd8542]" />
                </div>

                <p className="mb-5 text-sm leading-7 text-[#77716d] sm:text-base">
                  {section.description}
                </p>

                {section.images && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {section.images.map((image) => (
                      <motion.div
                        key={image.src}
                        whileHover={
                          reduceMotion ? undefined : { y: -4 }
                        }
                        className="group relative aspect-[1.65/1] overflow-hidden rounded-sm bg-[#eee5d9]"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.banner && (
                  <motion.div
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.005 }
                    }
                    className="group relative aspect-[2.25/1] overflow-hidden rounded-sm bg-[#eee5d9]"
                  >
                    <Image
                      src={section.banner.src}
                      alt={section.banner.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                )}
              </motion.section>
            ))}

            {/* Editorial quote */}
            <motion.blockquote
              {...animation}
              className="relative mt-8 flex gap-4 border-l-2 border-[#bd8542] bg-[#f6eee3] px-5 py-6 sm:mt-10 sm:gap-6 sm:px-8 sm:py-8"
            >
              <Quote
                size={34}
                className="shrink-0 text-[#bd8542]"
                aria-hidden="true"
              />
              <p className="font-serif text-lg italic leading-relaxed text-[#b77a32] sm:text-xl">
                A beach vacation is not just a trip,
                it&apos;s a chance to reconnect with yourself,
                nature, and the beauty around you.
              </p>
            </motion.blockquote>
          </article>

          {/* Sidebar */}
          <aside className="min-w-0 border-t border-[#e7ded3] pt-8 lg:sticky lg:top-28 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0 xl:pl-9">
            <motion.div {...animation}>
              <div className="mb-7 flex items-center gap-3">
                <h2 className="font-serif text-2xl sm:text-3xl">
                  Recent Posts
                </h2>
                <span className="h-px w-10 bg-[#bd8542]" />
              </div>

              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link
                    key={post.title}
                    href={post.href}
                    className="group flex items-start gap-4"
                  >
                    <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-sm bg-[#eee5d9] sm:w-28 lg:w-24 xl:w-28">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0 pt-1">
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] text-[#b9803b]">
                        <CalendarDays size={12} />
                        {post.date}
                      </span>

                      <h3 className="mt-2 font-serif text-base leading-snug transition-colors duration-300 group-hover:text-[#b9803b]">
                        {post.title}
                      </h3>

                      <span className="mt-2 inline-flex items-center gap-1 text-xs text-[#8c6032]">
                        Read article
                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...animation}
              className="group relative mt-10 min-h-[350px] flex justify-center overflow-hidden rounded-sm bg-[#3d2b1f] sm:min-h-[420px] lg:min-h-[350px] xl:min-h-[580px] items-center"
            >
              <Image
                src="/images/home/about-pool.png"
                alt="Elegant ocean-view suite at Aurestia"
                fill
                sizes="(max-width: 1024px) 100vw, 370px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80" />

              <div className="absolute inset-x-0 p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.24em] text-[#e3b577]">
                  Your next escape
                </span>

                <h3 className="mt-3 max-w-xs font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Experience
                  <br />
                  The Difference
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/85">
                  Your next beach adventure is just a click away.
                </p>

                <Link
                  href="/rooms"
                  className="mt-5 inline-flex items-center gap-3 border-b border-[#d4a15f] pb-2 text-sm tracking-wide text-white transition-colors hover:text-[#e3b577]"
                >
                  EXPLORE OUR ROOMS
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
    </main>
  );
}
