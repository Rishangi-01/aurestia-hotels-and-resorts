
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocationMap() {
  const reduceMotion = useReducedMotion();

  const destination = "Central Park, New York, NY, USA";

  const mapUrl =
    "https://maps.google.com/maps?q=Central%20Park%2C%20New%20York%2C%20NY%2C%20USA&z=14&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(destination);

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative isolate overflow-hidden pb-8 sm:pb-10 lg:pb-12"
    >
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[490px] overflow-hidden rounded-sm border border-[#eee8df] sm:min-h-[430px] lg:min-h-[400px]">
          {/* Google Maps */}
          <div className="absolute inset-0 bg-[#eeeee8]">
            <iframe
              title="Map showing Central Park, New York City"
              src={mapUrl}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Subtle overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/5"
            />
          </div>

          {/* Location information card */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -35, y: 8 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-4 right-4 top-4 z-10 mx-auto w-auto max-w-[390px] border border-white/80 bg-white/95 p-5 shadow-[0_12px_45px_rgba(32,36,32,0.10)] backdrop-blur-md sm:left-7 sm:right-auto sm:top-1/2 sm:w-[390px] sm:-translate-y-1/2 sm:p-7 lg:left-10 lg:w-[410px] lg:p-8"
          >
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.19em] text-[#c98b43] sm:text-[11px]">
                Our Location
              </span>
              <span className="h-px w-9 bg-[#c98b43]" />
            </div>

            {/* Heading */}
            <h2
              id="location-heading"
              className="font-serif text-[27px] font-semibold leading-tight tracking-[-0.7px] text-[#171b1d] sm:text-[30px] lg:text-[32px]"
            >
              Find Us on{" "}
              <span className="text-[#c98b43]">the Map</span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[340px] text-[12px] leading-[1.8] text-[#77808a] sm:text-[13px]">
              We are conveniently located near the heart of New York
              City. Visit us for personalized travel consultation
              and expert guidance.
            </p>

            {/* Address */}
            <div className="mt-4 flex items-start gap-2 text-[12px] text-[#6f7882]">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-[#c98b43]"
                aria-hidden="true"
              />
              <span>Central Park, New York, NY, USA</span>
            </div>

            {/* Directions button */}
            <motion.a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -2, boxShadow: "0 8px 18px rgba(201,139,67,0.12)" }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group mt-5 inline-flex min-h-11 items-center justify-center gap-3 border border-[#c98b43] bg-transparent px-5 py-3 font-serif text-[14px] font-semibold text-[#c98b43] transition-colors duration-300 hover:bg-[#c98b43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98b43] focus-visible:ring-offset-2 sm:px-6"
            >
              Get Directions
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>

          {/* Floating map location marker */}
          <motion.div
            aria-hidden="true"
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.5, y: 12 }
            }
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute bottom-5 right-5 z-[1] flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8"
          >
            <MapPin size={17} className="text-[#c98b43]" />
            <span className="text-[10px] font-semibold tracking-wide text-[#343a3d] sm:text-xs">
              NEW YORK, USA
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
