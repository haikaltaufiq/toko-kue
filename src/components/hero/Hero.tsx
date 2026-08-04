"use client";

import Link from "next/link";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/fadeIn";
import { use } from "react";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex items-center
        bg-[url('/images/Hero.jpg')]
        bg-cover bg-no-repeat
        bg-position-[80%_100%]
      "
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/5 to-black/0" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-black/0" />
      <div className="absolute inset-0 bg-linear-to-l from-black/5 via-black/3 to-black/0" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/0" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <div className="mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("left", { offset: 164, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-lg  tracking-normal  text-white/80">
              PT. Test CI/CD
            </p>

            <HeroTitle />

            <p className="text-sm md:text-lg mb-5 text-white/70">
              Kue enak dan bergizi untuk semua orang, berkualitas tinggi.
            </p>

            <motion.a
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-6 py-4
                border-2 border-white/70
                text-white/70 text-sm
                rounded-full font-medium
                transition-colors
                hover:bg-gray-100
                hover:text-black
              "
              whileHover="hovered"
              initial="rest"
              animate="rest"
            >
              Get Started
              <motion.span
                className="inline-block"
                variants={{
                  rest: { x: 0 },
                  hovered: { x: 6 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right-icon lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", { duration: 1 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-between mt-45 text-sm  text-white/70"
        ></motion.div>
      </div>
    </section>
  );
}
