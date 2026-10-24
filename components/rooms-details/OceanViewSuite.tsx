
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  House,
  UserRound,
  Baby,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { oceanViewSuiteContent } from "@/data";

export default function OceanViewSuite() {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: "easeOut" as const };

  const changeImage = (direction: number) => {
    setActiveImage(
      (current) =>
        (current + direction + oceanViewSuiteContent.gallery.length) % oceanViewSuiteContent.gallery.length
    );
  };

  return (
    <section
      id={oceanViewSuiteContent.id}
      className="relative overflow-hidden bg-[#faf8f4] px-4 py-10 text-[#211914] sm:px-6 sm:py-14 lg:px-10 lg:pt-20 lg:pb-8"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c99860]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Main two-column layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 xl:gap-14">
          {/* Main image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="group relative"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={oceanViewSuiteContent.openImageLabel}
              className="relative block aspect-[1.5/1] w-full overflow-hidden rounded-[3px] bg-[#e8dfd3] text-left"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={oceanViewSuiteContent.gallery[activeImage].src}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 1.035 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="absolute inset-0"
                >
                  <Image
                    src={oceanViewSuiteContent.gallery[activeImage].src}
                    alt={oceanViewSuiteContent.gallery[activeImage].alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />

              <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs tracking-[0.15em] text-white backdrop-blur-md">
                <Maximize2 size={14} />
                {oceanViewSuiteContent.galleryLabel}
              </span>

              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs tracking-wider text-[#3a2b20]">
                {String(activeImage + 1).padStart(2, "0")} / {String(oceanViewSuiteContent.galleryCount).padStart(2, "0")}
              </span>
            </button>
          </motion.div>

          {/* Suite information */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="flex flex-col pt-1 lg:pt-6 my-auto"
          >
            <div className="mb-2 flex items-center gap-4">
              <span className="text-xs font-medium tracking-[0.22em] text-[#bd854b] sm:text-sm">
                {oceanViewSuiteContent.eyebrow}
              </span>
              <span className="h-px w-12 bg-[#c99860]" />
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4.4rem)] leading-[1.04] tracking-[-0.045em]">
              {oceanViewSuiteContent.title}
            </h1>

            <p className="mt-2 text-[14px] leading-[1.95] text-[#77716c] sm:text-[15px]">
              {oceanViewSuiteContent.description}
            </p>

            {/* Feature highlights */}
            <div className="mt-3 grid grid-cols-3 items-center border-b-2 border-[#e5d4bf] pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <House className="shrink-0 text-[#bd854b]" size={24} strokeWidth={1.7} />
                <div>
                  <p className="text-sm font-medium sm:text-base">{oceanViewSuiteContent.roomSize}</p>
                  <p className="mt-1 text-[10px] text-[#93877b] sm:text-xs">{oceanViewSuiteContent.roomSizeLabel}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 border-x border-[#e3d6c6] px-2 sm:gap-3">
                <UserRound className="shrink-0 text-[#bd854b]" size={24} strokeWidth={1.7} />
                <div>
                  <p className="text-xs font-medium sm:text-base">{oceanViewSuiteContent.capacity}</p>
                  <p className="mt-1 text-[10px] text-[#93877b] sm:text-xs">{oceanViewSuiteContent.capacityLabel}</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pl-2 sm:gap-3">
                <Baby className="shrink-0 text-[#bd854b]" size={24} strokeWidth={1.7} />
                <div>
                  <p className="text-xs font-medium sm:text-base">{oceanViewSuiteContent.extraGuest}</p>
                  <p className="mt-1 text-[10px] text-[#93877b] sm:text-xs">{oceanViewSuiteContent.extraGuestLabel}</p>
                </div>
              </div>
            </div>

            {/* Room details */}
            <div className="space-y-0 border-b-2 border-[#e5d4bf] py-3">
              {oceanViewSuiteContent.details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ...transition,
                    delay: reduceMotion ? 0 : 0.2 + index * 0.08,
                  }}
                  className="grid grid-cols-[0.85fr_1fr] gap-3 py-[7px] sm:grid-cols-2"
                >
                  <span className="text-xs font-medium tracking-[0.13em] text-[#bd854b] sm:text-sm">
                    {detail.label}
                  </span>
                  <span className="text-sm text-[#6d6863] sm:text-base">
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Thumbnail gallery */}
        <motion.div
          id={oceanViewSuiteContent.galleryId}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.3,
          }}
          className="mt-7 sm:mt-8"
        >

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {oceanViewSuiteContent.gallery.map((room, index) => (
              <motion.button
                key={room.src}
                type="button"
                onClick={() => setActiveImage(index)}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                aria-label={`${oceanViewSuiteContent.thumbnailLabelPrefix} ${room.label}`}
                aria-pressed={activeImage === index}
                className={`group relative aspect-[1.35/1] overflow-hidden rounded-[2px] bg-[#e8dfd3] ${
                  activeImage === index
                    ? "ring-2 ring-[#bd854b] ring-offset-2 ring-offset-[#faf8f4]"
                    : ""
                }`}
              >
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

                {/* <span className="absolute bottom-3 left-3 text-left text-xs tracking-wider text-white sm:bottom-4 sm:left-4 sm:text-sm">
                  {room.label}
                </span> */}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen image viewer */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-10"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={oceanViewSuiteContent.viewerLabel}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label={oceanViewSuiteContent.closeGalleryLabel}
              className="absolute right-5 top-5 z-10 text-3xl text-white hover:text-[#d4ad7e]"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                changeImage(-1);
              }}
              aria-label={oceanViewSuiteContent.previousImageLabel}
              className="absolute left-3 z-10 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10 sm:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={oceanViewSuiteContent.gallery[activeImage].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[55vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={oceanViewSuiteContent.gallery[activeImage].src}
                alt={oceanViewSuiteContent.gallery[activeImage].alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                changeImage(1);
              }}
              aria-label={oceanViewSuiteContent.nextImageLabel}
              className="absolute right-3 z-10 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10 sm:right-8"
            >
              <ChevronRight size={24} />
            </button>

            <p className="absolute bottom-4 text-sm tracking-widest text-white/80">
              {oceanViewSuiteContent.gallery[activeImage].label} · {activeImage + 1} / {oceanViewSuiteContent.gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
