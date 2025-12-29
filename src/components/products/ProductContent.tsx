"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, Utensils } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: string;
}

const CATEGORIES = [
  "All Cakes",
  "Birthday Cakes",
  "Artisan Pastry",
  "Signature Cookies",
  "Wedding Cakes",
];

const PRODUCTS_DATA: Product[] = [
  {
    id: "1",
    title: "Double Chocolate Truffle",
    category: "Birthday Cakes",
    description:
      "Lapisan cokelat Belgia premium dengan tekstur lembut dan dekorasi elegan.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    price: "Rp 250.000",
  },
  {
    id: "2",
    title: "Butter Croissant XL",
    category: "Artisan Pastry",
    description:
      "Pastry renyah dengan layer mentega Prancis yang melimpah, dipanggang fresh setiap pagi.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    price: "Rp 35.000",
  },
  {
    id: "3",
    title: "Lotus Biscoff Cookies",
    category: "Signature Cookies",
    description:
      "Soft cookies dengan filling selai Lotus yang lumer dan topping biskuit renyah.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    price: "Rp 85.000",
  },
  {
    id: "4",
    title: "Classic Red Velvet",
    category: "Birthday Cakes",
    description:
      "Kue merah ikonik dengan cream cheese frosting yang ringan dan tidak terlalu manis.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f",
    price: "Rp 275.000",
  },
  {
    id: "5",
    title: "Tiramisu Dessert Box",
    category: "Dessert Box",
    description:
      "Perpaduan espresso, ladyfinger, dan mascarpone dalam wadah praktis.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    price: "Rp 65.000",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function ProductContent() {
  const [activeTab, setActiveTab] = useState("All Cakes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesTab =
        activeTab === "All Cakes" || product.category === activeTab;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-orange-500">
            <Utensils size={20} />
            <span className="font-bold tracking-widest uppercase text-xs">
              Our Menu
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Koleksi Kue Terbaik Kami
          </h2>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-16">
          <nav className="flex flex-wrap bg-gray-50 border border-gray-100 rounded-2xl p-2 items-center gap-1">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-500 whitespace-nowrap ${
                  activeTab === category
                    ? "text-white"
                    : "text-gray-500 hover:text-orange-500 hover:bg-white"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-orange-500 rounded-xl shadow-lg shadow-orange-200"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </nav>

          <div className="relative w-full lg:w-96 group">
            <input
              type="text"
              placeholder="Cari kue impian Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-6 pr-14 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-50"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none">
              <Search size={22} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    category={product.category}
                    href={`/products/${product.id}`}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 text-gray-300">
                  <Search size={40} />
                </div>
                <p className="text-gray-500 font-semibold text-lg">
                  Kue yang Anda cari belum tersedia di dapur kami.
                </p>
                <button
                  onClick={() => {
                    setActiveTab("All Cakes");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-orange-500 hover:underline font-medium"
                >
                  Lihat Semua Koleksi
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
