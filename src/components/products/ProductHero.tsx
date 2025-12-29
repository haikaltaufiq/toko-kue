// ==========================================
// src/components/products/ProductHero.tsx
// ==========================================
"use client";

import { useState } from "react";

const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "vision-mission", label: "Our Vision & Mission" },
  { id: "why-choose-us", label: "Why Choose Us?" },
];

export default function ProductHero() {
  const [activeSection, setActiveSection] = useState("who-we-are");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        className="
          relative flex items-center
          bg-[url('/images/Hero.jpg')]
          bg-cover bg-center bg-no-repeat
          h-[50vh] min-h-100
        "
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-13 mb-2">
              Produk Kami
            </h1>
            <p className="text-sm md:text-lg mb-4 text-white/70">
              Lebih dari sekadar toko kue, kami adalah bagian dari cerita manis
              Anda.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
