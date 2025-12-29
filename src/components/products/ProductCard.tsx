"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

export interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  category?: string; // Tambahin ini buat badge
  href?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  price,
  category,
  href = "#",
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
        group w-full rounded-3xl bg-white p-6
        border border-gray-100
        shadow-sm hover:shadow-2xl hover:border-orange-100
        transition-all duration-500 flex flex-col h-full
      "
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          draggable={false}
        />
        {/* Category Badge - Melayang di atas gambar */}
        {category && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
            {category}
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* PRICE SECTION - Sekarang fix di dalem card */}
        {price && (
          <div className="mb-6">
            <span className="text-2xl font-black text-orange-500 tracking-tight">
              {price}
            </span>
          </div>
        )}
      </div>

      {/* ACTION BUTTON */}
      <div className="flex items-center justify-between pt-5 border-t border-gray-50 mt-auto">
        <Link
          href={href}
          className="
            inline-flex items-center gap-2
            text-sm font-bold
            text-gray-900 hover:text-orange-500
            transition-colors
          "
        >
          Pesan Sekarang
          <ArrowRight
            size={16}
            strokeWidth={2.5}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>

        <div className="p-2.5 bg-orange-50 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm shadow-orange-100">
          <ShoppingBag size={18} />
        </div>
      </div>
    </motion.div>
  );
}
