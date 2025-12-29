"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="font-black text-2xl tracking-tight">
              TOKO KUE <span className="text-orange-500">LEZAT</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Menghadirkan kebahagiaan di setiap gigitan sejak 2025. Bahan
              premium, rasa otentik, dan penuh cinta.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-white/5 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Tanpa ML-30 ngaco bjir */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-orange-500 pl-3">
              Menu Cepat
            </h4>
            <ul className="space-y-4 text-gray-400">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-orange-500 group-hover:w-3 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-orange-500 pl-3">
              Koleksi
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Custom Birthday Cake</li>
              <li>Artisan Pastry</li>
              <li>Wedding Special</li>
              <li>Signature Cookies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-orange-500 pl-3">
              Hubungi Kami
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                Batam, Kepulauan Riau, Indonesia
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-orange-500 shrink-0" />
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-orange-500 shrink-0" />
                info@tokokuelezat.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>&copy; 2025 Toko Kue Lezat. Semua Hak Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
