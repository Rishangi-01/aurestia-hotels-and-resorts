
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { contactSectionContent } from "@/data";

const contactIcons: Record<string, typeof Phone> = {
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock3,
};

const fieldClass =
  "w-full rounded-[4px] border border-[#e6e5e2] bg-white px-3 py-[11px] text-[12px] text-[#202428] outline-none transition-all duration-300 placeholder:text-[#89909a] hover:border-[#d9b17e] focus:border-[#c88b43] focus:ring-2 focus:ring-[#c88b43]/10 lg:text-[14px]";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.12 },
    variants: reveal,
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect your API or backend here to send the message.
    setSubmitted(true);
  }

  return (
    <section
      id={contactSectionContent.id}
      aria-labelledby={contactSectionContent.headingId}
      className="relative isolate overflow-hidden bg-[#fffdfa] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-[#f7e9d6]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f6eadb]/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          {...entrance()}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#cb8b43]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c98639] sm:text-[11px]">
              {contactSectionContent.eyebrow}
            </span>
            <span className="h-px w-7 bg-[#cb8b43]" />
          </div>

          <h1
            id={contactSectionContent.headingId}
            className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-1.3px] text-[#161b1f] sm:text-5xl lg:text-[54px]"
          >
            {contactSectionContent.headingFirst}
            <span className="mt-1 block text-[#c98b43]">
              {contactSectionContent.headingAccent}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[1.75] text-[#78818d] sm:text-[14px]">
            {contactSectionContent.description}
          </p>
        </motion.div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          {/* Contact information */}
          <motion.aside
            {...entrance(0.1)}
            aria-labelledby={contactSectionContent.informationHeadingId}
            className="rounded-[3px] border border-[#f1ece5] bg-[#fcf7ec] p-5 sm:p-7 lg:p-8"
          >
            <div className="mb-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h2
                  id={contactSectionContent.informationHeadingId}
                  className="font-serif text-[26px] font-semibold tracking-[-0.7px] text-[#171c20] sm:text-[30px] lg:text-[2.2rem]"
                >
                  {contactSectionContent.informationHeading}
                </h2>
                <span className="h-[2px] w-10 bg-[#c98b43]" />
              </div>

              <p className="mt-2 max-w-sm text-[13px] leading-[1.7] text-[#78818d] lg:text-[16px]">
                {contactSectionContent.informationDescription}
              </p>
            </div>

            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {contactSectionContent.details.map((item, index) => {
                const Icon = contactIcons[item.icon];

                return (
                  <motion.div
                    key={item.title}
                    initial={
                      reduceMotion ? false : { opacity: 0, x: -18 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : 0.15 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-start gap-4 sm:gap-5"
                  >
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { scale: 1.07, rotate: -4 }
                      }
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fbf0e0] text-[#c98536] transition-colors duration-300 group-hover:bg-[#c98b43] group-hover:text-white sm:h-[54px] sm:w-[54px]"
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </motion.div>

                    <div className="min-w-0 pt-1">
                      <h3 className="font-serif text-[16px] font-semibold text-[#222629] sm:text-[17px] lg:text-[20px]">
                        {item.title}
                      </h3>

                      <div className="mt-1 space-y-0.5">
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-[12px] leading-[1.65] text-[#78818d] sm:text-[13px] lg:text-[16px]"
                          >
                            {item.href ? (
                              <a
                                href={item.href}
                                className="transition-colors hover:text-[#c98536] focus-visible:outline-none focus-visible:underline"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.aside>

          {/* Contact form */}
          <motion.div
            {...entrance(0.2)}
            className="rounded-[3px] border border-[#eeece8] bg-white/75 p-5 sm:p-7 lg:p-8"
          >
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h2 className="font-serif text-[26px] font-semibold tracking-[-0.7px] text-[#171c20] sm:text-[30px] lg:text-[2.2rem]">
                  {contactSectionContent.formHeading}
                </h2>
                <span className="h-[2px] w-9 bg-[#c98b43]" />
              </div>

              <p className="mt-2 text-[12px] leading-[1.7] text-[#78818d] sm:text-[13px] lg:text-[16px]">
                {contactSectionContent.formDescription}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              onChange={() => setSubmitted(false)}
              className="space-y-4"
            >
              {/* Full name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-[11px] font-medium text-[#292d30] text-[16px]"
                >
                  {contactSectionContent.fields.name.label}{" "}
                  <span aria-hidden="true">
                    {contactSectionContent.fields.name.requiredIndicator}
                  </span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={contactSectionContent.fields.name.placeholder}
                  required
                  minLength={2}
                  className={fieldClass}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-[11px] font-medium text-[#292d30] text-[16px]"
                >
                  {contactSectionContent.fields.email.label}{" "}
                  <span aria-hidden="true">
                    {contactSectionContent.fields.email.requiredIndicator}
                  </span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={contactSectionContent.fields.email.placeholder}
                  required
                  className={fieldClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-[11px] font-medium text-[#292d30] text-[16px]"
                >
                  {contactSectionContent.fields.phone.label}{" "}
                  <span aria-hidden="true">
                    {contactSectionContent.fields.phone.requiredIndicator}
                  </span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={contactSectionContent.fields.phone.placeholder}
                  pattern="[+]?[0-9 ()-]{7,20}"
                  title={contactSectionContent.fields.phone.invalidMessage}
                  required
                  className={fieldClass}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-[11px] font-medium text-[#292d30] text-[16px]"
                >
                  {contactSectionContent.fields.subject.label}{" "}
                  <span aria-hidden="true">
                    {contactSectionContent.fields.subject.requiredIndicator}
                  </span>
                </label>

                <div className="relative">
                  <select
                    id="contact-subject"
                    name="subject"
                    defaultValue=""
                    required
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      {contactSectionContent.fields.subject.placeholder}
                    </option>
                    {contactSectionContent.fields.subject.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#c98b43]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[11px] font-medium text-[#292d30] text-[16px]"
                >
                  {contactSectionContent.fields.message.label}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder={contactSectionContent.fields.message.placeholder}
                  className={`${fieldClass} min-h-[96px] resize-y sm:min-h-[108px]`}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -2, boxShadow: "0 8px 20px rgba(190,125,50,0.22)" }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                className="group flex w-full items-center justify-center gap-2 rounded-[3px] bg-gradient-to-r from-[#ca8b40] to-[#bf7e32] px-5 py-3.5 font-serif text-[14px] font-medium text-white shadow-[0_3px_10px_rgba(190,125,50,0.10)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98b43] focus-visible:ring-offset-2 lg:text-[16px]"
              >
                {submitted
                  ? contactSectionContent.submittedLabel
                  : contactSectionContent.submitLabel}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              {submitted && (
                <p
                  role="status"
                  className="text-center text-xs leading-5 text-[#587b52]"
                >
                  {contactSectionContent.successMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
