
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Star,
  UsersRound,
  Headset,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Best Options",
    description:
      "Get curated recommendations based on your preferences.",
  },
  {
    icon: UsersRound,
    title: "Personalized Support",
    description:
      "Customized travel plans for a memorable and stress-free trip.",
  },
  {
    icon: Headset,
    title: "Quick Response",
    description:
      "Our team will get back to you shortly with all the details.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Assistance",
    description:
      "Reliable support from planning to your return.",
  },
];

const inputClass =
  "w-full rounded-[3px] border border-[#e9e5df] bg-white/80 px-3 py-3 text-[12px] text-[#252525] outline-none transition-all duration-300 placeholder:text-[#858b94] hover:border-[#d4a064] focus:border-[#c98b40] focus:bg-white focus:ring-2 focus:ring-[#c98b40]/10 lg:text-[16px]";

const fieldMotion = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function EnquirySection() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect your API or backend here before production.
    setSubmitted(true);
  }

  return (
    <section
      id="travel-enquiry"
      aria-labelledby="enquiry-heading"
      className="relative overflow-hidden bg-[#fffdfa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-16"
    >

      <div className="relative mx-auto max-w-7xl">
        
        <motion.div
          {...reveal()}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#cb8a3d]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c98537] sm:text-[11px]">
              Enquire Now
            </span>
            <span className="h-px w-7 bg-[#cb8a3d]" />
          </div>

          <h1
            id="enquiry-heading"
            className="font-serif text-[34px] font-medium leading-[1.08] tracking-[-1.4px] text-[#15191c] sm:text-5xl md:text-[54px]"
          >
            Let’s Plan Your
            <span className="mt-1 block text-[#c98b43]">
              Perfect Getaway
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-[12px] leading-6 text-[#78808b] sm:text-[13px] lg:text-[16px]">
            Share your travel plans with us and our team will
            get back to you with the best options, customized
            just for you.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-[1.5fr_0.9fr] md:gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:gap-10">
          {/* Enquiry form */}
          <motion.div
            {...reveal(0.1)}
            className="rounded-sm border border-[#f4eee6] bg-[#fcf7ec] p-5 shadow-[0_8px_35px_rgba(67,49,27,0.025)] sm:p-7 lg:p-8"
          >
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <h2 className="font-serif text-[23px] font-semibold leading-tight tracking-[-0.5px] text-[#171b1d] sm:text-[27px] lg:text-[2.2rem]">
                  Send Us an Enquiry
                </h2>
                <span className="h-[2px] w-9 bg-[#c98b43]" />
              </div>

              <p className="mt-2 max-w-lg text-[12px] leading-[1.8] text-[#78808b] sm:text-[13px] lg:text-[16px]">
                Fill in your details and we will get back to you
                shortly with the best options for your trip.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              onChange={() => setSubmitted(false)}
              className="space-y-2.5"
            >
              <motion.div
                variants={fieldMotion}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <label htmlFor="fullName" className="sr-only">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Full Name *"
                  aria-label="Full name"
                  required
                  minLength={2}
                  className={inputClass}
                />
              </motion.div>

              <motion.div
                variants={fieldMotion}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.19 }}
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address *"
                  aria-label="Email address"
                  required
                  className={inputClass}
                />
              </motion.div>

              <motion.div
                variants={fieldMotion}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.26 }}
              >
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone Number *"
                  aria-label="Phone number"
                  required
                  pattern="[+]?[0-9 ()-]{7,20}"
                  title="Please enter a valid phone number."
                  className={inputClass}
                />
              </motion.div>

              <motion.div
                variants={fieldMotion}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.33 }}
                className="relative"
              >
                <label htmlFor="travelDate" className="sr-only">
                  Travel date
                </label>
                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  aria-label="Travel date"
                  min={new Date().toLocaleDateString("en-CA")}
                  className={`${inputClass} [color-scheme:light]`}
                />
              </motion.div>

              <motion.div
                variants={fieldMotion}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.4 }}
                className="relative"
              >
                <label htmlFor="destination" className="sr-only">
                  Destination or location
                </label>
                <select
                  id="destination"
                  name="destination"
                  defaultValue=""
                  aria-label="Destination or location"
                  className={`${inputClass} appearance-none pr-9`}
                >
                  <option value="" disabled>
                    Destination / Location
                  </option>
                  <option value="domestic">Domestic Travel</option>
                  <option value="international">
                    International Travel
                  </option>
                  <option value="mountains">Mountains &amp; Hills</option>
                  <option value="beach">Beach Getaway</option>
                  <option value="adventure">Adventure Trip</option>
                  <option value="other">Other Destination</option>
                </select>
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#c98b43]"
                />
              </motion.div>

              <motion.div
                variants={fieldMotion}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.47 }}
              >
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={1000}
                  placeholder="Your Message (Optional)"
                  aria-label="Your message (optional)"
                  className={`${inputClass} min-h-[88px] resize-y`}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                className="group flex w-full items-center justify-center gap-2 rounded-[3px] bg-gradient-to-r from-[#c98a40] to-[#bd7d32] px-5 py-3 text-[13px] font-medium text-white shadow-[0_4px_12px_rgba(190,125,50,0.12)] transition-shadow duration-300 hover:shadow-[0_7px_20px_rgba(190,125,50,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98b43] focus-visible:ring-offset-2"
              >
                {submitted ? "Enquiry Submitted" : "Submit Enquiry"}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              {submitted && (
                <p
                  role="status"
                  className="pt-1 text-center text-xs text-[#55805b]"
                >
                  Thank you! Your details have been validated.
                  Please connect your backend to receive enquiries.
                </p>
              )}
            </form>
          </motion.div>

          {/* Benefits panel */}
          <motion.aside
            {...reveal(0.2)}
            aria-labelledby="benefits-heading"
            className="border-t border-[#eee8df] pt-7 md:border-l md:border-t-0 md:pl-6 md:pt-6 lg:pl-8 lg:pt-8"
          >
            <div className="mb-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h2
                  id="benefits-heading"
                  className="font-serif text-[24px] font-semibold leading-[1.15] tracking-[-0.5px] text-[#171b1d] sm:text-[27px] lg:text-[2.2rem]"
                >
                  Why Enquire
                  <br />
                  With Us?
                </h2>
                <span className="h-[2px] w-9 bg-[#c98b43]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 md:gap-7 lg:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={
                      reduceMotion ? false : { opacity: 0, x: 18 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : 0.12 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-start gap-3.5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fbf1e3] text-[#c98537] transition-all duration-300 group-hover:bg-[#c98b43] group-hover:text-white group-hover:shadow-[0_5px_15px_rgba(201,139,67,0.2)] sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                      <Icon
                        size={27}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="pt-1">
                      <h3 className="font-serif text-[14px] font-semibold leading-snug text-[#222426] sm:text-[15px] lg:text-[20px]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 max-w-[320px] text-[11px] leading-[1.7] text-[#7a818c] sm:text-[12px] lg:text-[16px]">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
