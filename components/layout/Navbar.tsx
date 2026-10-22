
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "ROOMS & SUITS", href: "/rooms" },
  { name: "GALLERY", href: "/gallery" },
  { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  return (
    <motion.header
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md"
    >
      <nav className="mx-auto flex min-h-[88px] max-w-[1800px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10 xl:px-12">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => {
            setActiveLink("HOME");
            setMenuOpen(false);
          }}
          className="group shrink-0"
          aria-label="Aurestia Hotels and Resorts home"
        >
          <div className="flex flex-col items-center h-[75px]">
            <img src="/images/logo.png" alt="Aurestia Hotels and Resorts" className="h-full w-full" />
          </div>
        </Link>

        <div className="hidden flex-1 items-center gap-5 xl:flex 2xl:gap-8">
          <div className="flex items-center gap-6 2xl:gap-9 mx-auto">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + index * 0.08,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`group relative block whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-300 2xl:text-[15px] ${
                    activeLink === link.name
                      ? "text-[#a67b43]"
                      : "text-[#343434] hover:text-[#a67b43]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#a67b43] transition-all duration-300 ${
                      activeLink === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="ml-1 h-12 w-px shrink-0 bg-[#b38a55]/70" />

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 overflow-hidden bg-[#ad844e] px-5 py-4 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#8e6738] hover:shadow-lg hover:shadow-[#ad844e]/20 2xl:px-7 2xl:text-[14px]"
          >
            <span>ENQUIRE NOW</span>
            <FiArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center border border-[#ad844e]/30 text-[#69452b] transition-colors hover:bg-[#ad844e] hover:text-white xl:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#ad844e]/15 bg-white xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-3 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.055 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center justify-between border-b border-[#ad844e]/10 py-4 text-sm font-medium tracking-wide transition-colors hover:text-[#ad844e] ${
                      activeLink === link.name
                        ? "text-[#ad844e]"
                        : "text-[#353535]"
                    }`}
                  >
                    {link.name}
                    <FiArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-3 bg-[#ad844e] px-5 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#8e6738]"
              >
                ENQUIRE NOW
                <FiArrowRight size={19} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
