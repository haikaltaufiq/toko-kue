"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactContents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Logic kirim pesan bisa ditaro sini bjir
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokasi Galeri",
      content: "Batam, Kepulauan Riau, Indonesia",
    },
    {
      icon: Phone,
      title: "WhatsApp / Telp",
      content: "+62 XXX XXXX XXXX",
    },
    {
      icon: Mail,
      title: "Email Kami",
      content: "hello@tokokuelezat.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Setiap Hari: 08:00 - 21:00",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Section - Simple & Clean */}
      <div className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Hubungi Dapur Kami
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Punya pertanyaan soal custom cake atau ingin kolaborasi? Kami siap
              membantu mewujudkan momen manis Anda.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Map Section - Integrated & Seamless */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-100 border-8 border-white"
        >
          <div className="w-full h-100 lg:h-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.7062042256231!2d106.7867941721531!3d-6.609687374901247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c596421e0e39%3A0x84e78ea4b71dcd8!2sKebun%20Sawit%20Cikaret!5e0!3m2!1sen!2sid!4v1767013565133!5m2!1sen!2sid"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-8 right-8 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-orange-600 transition-all flex items-center gap-2 group"
            onClick={() => window.open("https://maps.google.com", "_blank")}
          >
            <MapPin size={20} className="group-hover:animate-bounce" />
            Buka di Google Maps
          </motion.button>
        </motion.div>
      </div>

      {/* Info & Form Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Informasi Kontak
            </h2>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-orange-50/50 border border-orange-100/50 hover:bg-orange-50 transition-colors"
              >
                <div className="p-4 bg-white rounded-2xl text-orange-500 shadow-sm">
                  <info.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-100 p-8 md:p-12 border border-gray-50"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama Anda"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@anda.com"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Nomor Telepon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 0812..."
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Pesan Anda
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Ceritakan detail pesanan atau pertanyaan Anda..."
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 focus:bg-white outline-none resize-none transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-orange-500 text-white py-5 rounded-2xl font-extrabold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-3 group"
                >
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                  Kirim Pesan Sekarang
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
