"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "who-we-are",
    label: "Siapa Kami",
    title: "Membangun Kenangan Manis di Setiap Gigitan",
    content:
      "Berawal dari dapur kecil di rumah, kami percaya bahwa kue bukan sekadar makanan penutup, melainkan jembatan kebahagiaan. Setiap adonan kami buat dengan bahan premium dan penuh ketelitian untuk memastikan momen spesial Anda menjadi tak terlupakan. Kami hadir untuk membawa kualitas artisan ke meja makan Anda.",
    image: "/images/Hero.jpg",
  },
  {
    id: "vision",
    label: "Visi & Misi",
    title: "Menjadi Toko Kue Pilihan Utama Keluarga Indonesia",
    content:
      "Visi kami adalah menyebarkan kebahagiaan lewat rasa yang otentik. Misi kami sederhana: Menggunakan bahan lokal terbaik, inovasi rasa yang terus berkembang, dan memberikan pelayanan yang hangat seperti kue yang baru keluar dari oven.",
    image: "/images/Hero.jpg",
  },
  {
    id: "values",
    label: "Nilai Kami",
    title: "Kualitas, Kebersihan, dan Kasih Sayang",
    content:
      "Tiga pilar utama kami. Kami tidak pernah berkompromi dengan kualitas bahan. Standar kebersihan dapur kami adalah prioritas tertinggi, dan setiap dekorasi kue dikerjakan secara manual dengan penuh rasa kasih sayang oleh baker ahli kami.",
    image: "/images/Hero.jpg",
  },
];

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("who-we-are");

  const activeData = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <section className="bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Hero.jpg')] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/Hero.jpg')",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Lebih dari sekadar toko kue, kami adalah bagian dari cerita manis
            Anda.
          </p>
        </motion.div>
      </div>

      {/* Tab Navigation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-100 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`pb-4 text-sm md:text-base font-semibold transition-all relative ${
                activeTab === section.id
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {section.label}
              {activeTab === section.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {activeData.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {activeData.content}
              </p>
              <div className="pt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors shadow-lg shadow-orange-200">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative h-75 md:h-112.5 rounded overflow-hidden shadow-2xl"
            >
              {/* Fallback color while image loading */}
              <div className="absolute inset-0 bg-orange-100 animate-pulse" />
              <img
                src={activeData.image}
                alt={activeData.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Stats Section ala-ala Brand Besar */}
      <div className="bg-orange-50 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Cabang", value: "15+" },
            { label: "Varian Kue", value: "100+" },
            { label: "Pelanggan Puas", value: "50k+" },
            { label: "Baker Ahli", value: "25" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
