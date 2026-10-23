
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMove,
} from "react-icons/fi";
import { roomsHeroContent } from "@/data";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 45 : -45,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -45 : 45,
    opacity: 0,
  }),
};

export default function RoomsHero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const reduceMotion = useReducedMotion();

  // Use one card on mobile and two on larger screens.
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const visibleCount = isMobile ? 1 : 2;
  const maxIndex = roomsHeroContent.rooms.length - visibleCount;
  const currentIndex = Math.min(index, maxIndex);

  const goTo = useCallback(
    (nextIndex: number) => {
      const target = Math.max(0, Math.min(nextIndex, maxIndex));

      setDirection(target >= currentIndex ? 1 : -1);
      setIndex(target);
    },
    [currentIndex, maxIndex]
  );

  const next = useCallback(() => {
    setDirection(1);
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const previous = useCallback(() => {
    setDirection(-1);
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  // Automatically advance the slider.
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex, reduceMotion]);

  const visibleRooms = roomsHeroContent.rooms.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section
      id={roomsHeroContent.id}
      aria-label={roomsHeroContent.ariaLabel}
      className="overflow-hidden bg-white px-5 py-6 sm:px-8 sm:py-16 lg:px-12 lg:py-16 xl:px-14 w-[100%]"
    >
      <div className="mx-auto">
        <div className="mb-9 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-center lg:mb-14">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-5"
            >
              <span className="text-xs font-semibold tracking-[0.32em] text-[#ad8044]">
                {roomsHeroContent.eyebrow}
              </span>
              <span className="h-[2px] w-16 bg-[#b4864a]" />
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[clamp(3rem,6.3vw,6.3rem)] leading-[0.95] tracking-[-0.055em]"
            >
              <span className="text-[#29150f]">{roomsHeroContent.headingFirst} </span>
              <span className="text-[#b78342]">{roomsHeroContent.headingSecond}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center"
          >
            <Link
              href={roomsHeroContent.viewAllHref}
              className="group inline-flex items-center gap-4 self-start text-sm font-medium tracking-wide text-[#30231e] md:self-auto"
            >
              <span className="hidden h-[2px] w-12 bg-[#b78342] sm:block" />

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b78342] text-[#b78342] transition-all duration-300 group-hover:bg-[#b78342] group-hover:text-white">
                <FiArrowRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              <span className="transition-colors group-hover:text-[#b78342]">
                {roomsHeroContent.viewAllLabel}
              </span>
            </Link>
          </motion.div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
          className="relative"
        >
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 xl:gap-6"
            aria-live="off"
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {visibleRooms.map((room) => (
                <motion.article
                  key={room.id}
                  custom={direction}
                  variants={variants}
                  initial={reduceMotion ? false : "enter"}
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="min-w-0"
                >
                  <Link
                    href={`/rooms/${room.id}`}
                    className="group block"
                    aria-label={`${roomsHeroContent.exploreRoomLabelPrefix} ${room.name}`}
                  >
                    <div className="relative aspect-[1.48/1] overflow-hidden bg-[#f5f0e9] sm:aspect-[1.5/1]">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        priority={currentIndex === 0}
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white/95 text-[#9d713b] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <FiMove size={18} />
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <h2 className="font-serif text-[clamp(1.6rem,2.4vw,2.5rem)] leading-tight tracking-[-0.04em] text-[#29150f] transition-colors group-hover:text-[#ad8044]">
                        {room.name}
                      </h2>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium tracking-wide text-[#393330] sm:gap-x-5 sm:text-sm">
                      <span>{room.area}</span>
                      <span className="h-4 w-[2px] bg-[#c49a63]" />
                      <span>
                        {room.adults} {room.adults === 1 ? roomsHeroContent.adultLabel : roomsHeroContent.adultsLabel}
                      </span>
                      <span className="h-4 w-[2px] bg-[#c49a63]" />
                      <span>
                        {room.children}{" "}
                        {room.children === 1 ? roomsHeroContent.childLabel : roomsHeroContent.childrenLabel}
                      </span>
                    </div>
                  </Link>

                  <p className="mt-3 text-sm leading-6 text-[#77716c]">
                    {room.description}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between sm:mt-10">
            <button
              type="button"
              onClick={previous}
              aria-label={roomsHeroContent.previousLabel}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8b47] text-[#bd8b47] transition-all duration-300 hover:bg-[#bd8b47] hover:text-white sm:h-[66px] sm:w-[66px]"
            >
              <FiArrowLeft size={23} />
            </button>

            <div className="flex items-center justify-center gap-3">
              {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  aria-label={`${roomsHeroContent.slideLabelPrefix} ${dotIndex + 1}`}
                  aria-current={currentIndex === dotIndex ? "step" : undefined}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === dotIndex
                      ? "h-3 w-3 bg-[#b78342]"
                      : "h-3 w-3 bg-[#dedad6] hover:bg-[#b78342]/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label={roomsHeroContent.nextLabel}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8b47] text-[#bd8b47] transition-all duration-300 hover:bg-[#bd8b47] hover:text-white sm:h-[66px] sm:w-[66px]"
            >
              <FiArrowRight size={23} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
