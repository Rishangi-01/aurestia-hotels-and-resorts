
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
import { enquirySectionContent } from "@/data";

const benefitIcons: Record<string, typeof Star> = {
  star: Star,
  users: UsersRound,
  headset: Headset,
  shield: ShieldCheck,
};

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
      id={enquirySectionContent.id}
      aria-labelledby={enquirySectionContent.headingId}
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
              {enquirySectionContent.eyebrow}
            </span>
            <span className="h-px w-7 bg-[#cb8a3d]" />
          </div>

          <h1
            id={enquirySectionContent.headingId}
            className="font-serif text-[34px] font-medium leading-[1.08] tracking-[-1.4px] text-[#15191c] sm:text-5xl md:text-[54px]"
          >
            {enquirySectionContent.headingFirst}
            <span className="mt-1 block text-[#c98b43]">
              {enquirySectionContent.headingAccent}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-[12px] leading-6 text-[#78808b] sm:text-[13px] lg:text-[16px]">
            {enquirySectionContent.description}
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
                  {enquirySectionContent.formHeading}
                </h2>
                <span className="h-[2px] w-9 bg-[#c98b43]" />
              </div>

              <p className="mt-2 max-w-lg text-[12px] leading-[1.8] text-[#78808b] sm:text-[13px] lg:text-[16px]">
                {enquirySectionContent.formDescription}
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
                  {enquirySectionContent.fields.fullName.label}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder={enquirySectionContent.fields.fullName.placeholder}
                  aria-label={enquirySectionContent.fields.fullName.label}
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
                  {enquirySectionContent.fields.email.label}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={enquirySectionContent.fields.email.placeholder}
                  aria-label={enquirySectionContent.fields.email.label}
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
                  {enquirySectionContent.fields.phone.label}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={enquirySectionContent.fields.phone.placeholder}
                  aria-label={enquirySectionContent.fields.phone.label}
                  required
                  pattern="[+]?[0-9 ()-]{7,20}"
                  title={enquirySectionContent.fields.phone.invalidMessage}
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
                  {enquirySectionContent.fields.travelDate.label}
                </label>
                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  aria-label={enquirySectionContent.fields.travelDate.label}
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
                  {enquirySectionContent.fields.destination.label}
                </label>
                <select
                  id="destination"
                  name="destination"
                  defaultValue=""
                  aria-label={enquirySectionContent.fields.destination.label}
                  className={`${inputClass} appearance-none pr-9`}
                >
                  <option value="" disabled>
                    {enquirySectionContent.fields.destination.placeholder}
                  </option>
                  {enquirySectionContent.fields.destination.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
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
                  {enquirySectionContent.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={1000}
                  placeholder={enquirySectionContent.fields.message.placeholder}
                  aria-label={enquirySectionContent.fields.message.ariaLabel}
                  className={`${inputClass} min-h-[88px] resize-y`}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                className="group flex w-full items-center justify-center gap-2 rounded-[3px] bg-gradient-to-r from-[#c98a40] to-[#bd7d32] px-5 py-3 text-[13px] font-medium text-white shadow-[0_4px_12px_rgba(190,125,50,0.12)] transition-shadow duration-300 hover:shadow-[0_7px_20px_rgba(190,125,50,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98b43] focus-visible:ring-offset-2"
              >
                {submitted
                  ? enquirySectionContent.submittedLabel
                  : enquirySectionContent.submitLabel}
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
                  {enquirySectionContent.successMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Benefits panel */}
          <motion.aside
            {...reveal(0.2)}
            aria-labelledby={enquirySectionContent.benefitsHeadingId}
            className="border-t border-[#eee8df] pt-7 md:border-l md:border-t-0 md:pl-6 md:pt-6 lg:pl-8 lg:pt-8"
          >
            <div className="mb-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h2
                  id={enquirySectionContent.benefitsHeadingId}
                  className="font-serif text-[24px] font-semibold leading-[1.15] tracking-[-0.5px] text-[#171b1d] sm:text-[27px] lg:text-[2.2rem]"
                >
                  {enquirySectionContent.benefitsHeadingFirst}
                  <br />
                  {enquirySectionContent.benefitsHeadingSecond}
                </h2>
                <span className="h-[2px] w-9 bg-[#c98b43]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 md:gap-7 lg:gap-8">
              {enquirySectionContent.benefits.map((benefit, index) => {
                const Icon = benefitIcons[benefit.icon];

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
