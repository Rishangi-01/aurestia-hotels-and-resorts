
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { roomsSuitesContent } from "@/data";

type Room = (typeof roomsSuitesContent.items)[number];

function RoomCard({
  room,
  index,
}: {
  room: Room;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : (index % 2) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion ? undefined : { y: -4 }
      }
      className="group overflow-hidden border border-[#eee5da] bg-white/50 transition-colors duration-300 hover:border-[#d6b17b] hover:bg-white"
    >
      {/* Room image */}
      <Link
        href={room.href}
        aria-label={`${roomsSuitesContent.viewRoomLabelPrefix} ${room.name}`}
        className="relative block aspect-[1.55/1] overflow-hidden bg-[#eee7dc]"
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Link>

      {/* Room information */}
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <div className="min-w-0 flex-1">
          <Link
            href={room.href}
            className="inline-block"
          >
            <h3 className="font-serif text-xl leading-tight tracking-tight text-[#2d1912] transition-colors duration-300 group-hover:text-[#b77d36] sm:text-2xl xl:text-4xl">
              {room.name}
            </h3>
          </Link>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[9px] font-medium tracking-[0.035em] text-[#51453d] sm:gap-x-3 sm:text-[16px]">
            <span>{room.area}</span>

            <span className="h-3 w-px bg-[#c6924d]" />

            <span>{room.adults} {roomsSuitesContent.adultsLabel}</span>

            <span className="h-3 w-px bg-[#c6924d]" />

            <span>{room.children} {roomsSuitesContent.childrenLabel}</span>
          </div>
        </div>

        {/* Arrow button */}
        <motion.div
          whileHover={reduceMotion ? undefined : { rotate: -45 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <Link
            href={room.href}
            aria-label={`${roomsSuitesContent.exploreRoomLabelPrefix} ${room.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#c58a43] text-[#b77d36] transition-colors duration-300 hover:bg-[#b77d36] hover:text-white sm:h-10 sm:w-10 xl:h-12 xl:w-12"
          >
            <FiArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function RoomsSuites() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={roomsSuitesContent.id}
      className="overflow-hidden bg-[#fcfaf6] px-4 py-14 sm:px-7 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-7 sm:mb-9 lg:mb-10"
        >
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[10px] font-medium tracking-[0.28em] text-[#b78342]">
              {roomsSuitesContent.eyebrow}
            </span>

            <span className="h-px w-10 bg-[#c18b42]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-[-0.045em] text-[#28150f] sm:text-5xl md:text-6xl">
            {roomsSuitesContent.headingFirst}{" "}
            <span className="text-[#b9803b]">{roomsSuitesContent.headingAccent}</span>
          </h2>
        </motion.div>

        {/* Room cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:gap-7">
          {roomsSuitesContent.items.map((room, index) => (
            <RoomCard
              key={`${room.name}-${index}`}
              room={room}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
