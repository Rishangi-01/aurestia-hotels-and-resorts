
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { footerContent } from "@/data";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <footer
      id="footer"
      className="overflow-hidden bg-[#fcfaf6] text-[#493c35]"
    >
      {/* Main footer */}
      <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.35fr_1fr_1.15fr] lg:gap-0">
          {/* Brand / Logo */}
          <motion.div
            {...reveal(0)}
            className="flex min-h-[200px] items-center justify-center md:col-span-2 lg:col-span-1 lg:justify-start lg:pr-10"
          >
            <Link
              href={footerContent.logo.href}
              aria-label={footerContent.logo.ariaLabel}
              className="group inline-block w-full max-w-[440px]"
            >
              <Image
                src={footerContent.logo.src}
                alt={footerContent.logo.alt}
                width={650}
                height={180}
                priority={false}
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            {...reveal(0.12)}
            className="border-t border-[#e9d7bd] pt-8 md:border-l md:pl-10 md:pt-0 lg:min-h-[330px] lg:border-l lg:border-t-0 lg:pl-16 lg:pr-10"
          >
            <h2 className="font-serif text-3xl tracking-[-0.035em] text-[#291710] sm:text-[34px]">
              {footerContent.quickLinksHeading}
            </h2>

            <div className="mt-5 h-[3px] w-[50px] bg-[#bd873f]" />

            <nav aria-label={footerContent.quickLinksAriaLabel} className="mt-7">
              <ul className="space-y-3">
                {footerContent.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-[#6d625c] transition-colors duration-300 hover:text-[#a87330] sm:text-[17px]"
                    >
                      <span>{link.label}</span>
                      <FiArrowUpRight
                        size={14}
                        className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact details */}
          <motion.div
            {...reveal(0.24)}
            className="border-t border-[#e9d7bd] pt-8 md:col-span-2 md:border-t lg:col-span-1 lg:min-h-[330px] lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16"
          >
            <h2 className="font-serif text-3xl tracking-[-0.035em] text-[#291710] sm:text-[34px]">
              {footerContent.contactHeading}
            </h2>

            <div className="mt-5 h-[3px] w-[50px] bg-[#bd873f]" />

            <address className="mt-7 flex items-start gap-3 not-italic">
              <FiMapPin
                className="mt-1 shrink-0 text-[#bd873f]"
                size={19}
              />
              <p className="text-[15px] leading-7 text-[#6d625c] sm:text-[17px] sm:leading-[1.8]">
                {footerContent.contact.addressLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < footerContent.contact.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </address>

            <div className="my-6 h-px w-full max-w-[400px] bg-[#e9d7bd]" />

            <div className="space-y-5">
              {/* Phone */}
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-[#b78342] sm:text-sm">
                  {footerContent.contact.phoneLabel}
                </p>

                <a
                  href={footerContent.contact.phoneHref}
                  className="mt-2 inline-flex items-center gap-2 text-[16px] text-[#6d625c] transition-colors hover:text-[#a87330] sm:text-[18px]"
                >
                  <FiPhone size={16} className="text-[#bd873f]" />
                  {footerContent.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-[#b78342] sm:text-sm">
                  {footerContent.contact.emailLabel}
                </p>

                <a
                  href={footerContent.contact.emailHref}
                  className="mt-2 inline-flex items-center gap-2 break-all text-[15px] text-[#6d625c] transition-colors hover:text-[#a87330] sm:text-[17px]"
                >
                  <FiMail
                    size={17}
                    className="shrink-0 text-[#bd873f]"
                  />
                  {footerContent.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#d9cbbb]">
        <motion.div
          {...reveal(0)}
          className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-3 px-6 py-6 sm:px-10 sm:py-7 lg:flex-row lg:items-center lg:px-16 xl:px-20"
        >
          <p className="text-xs leading-6 text-[#756962] sm:text-sm">
            {footerContent.copyright}
          </p>

        </motion.div>
      </div>
    </footer>
  );
}
