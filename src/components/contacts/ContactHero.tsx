// ==========================================
// src/components/contacts/ContactHero.tsx
// ==========================================
"use client";

import { fadeIn } from "@/lib/fadeIn";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="
          relative flex items-center
          bg-[url('/images/Hero.jpg')]
          bg-cover bg-center bg-no-repeat
          h-[50vh] min-h-100
        "
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      <motion.div
        variants={fadeIn("left", { offset: 164, duration: 1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-13 mb-2">
            Kontak Kami
          </h1>
          <p className="text-sm md:text-lg mb-4 text-white/70">
            {" "}
            Lebih dari sekadar toko kue, kami adalah bagian dari cerita manis
            Anda.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
