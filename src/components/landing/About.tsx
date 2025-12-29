"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/fadeIn";

export default function About() {
  return (
    <>
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="w-full"
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/images/Hero.jpg"
              alt="Toko Kue Premium"
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">Cerita Kami</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dimulai dari dapur rumah kecil pada tahun 2018, kami bermimpi
              membawa kue premium berkualitas tinggi ke setiap momen spesial
              keluarga Indonesia. Dengan resep warisan turun temurun dan
              sentuhan modern, kami menciptakan kue yang tidak hanya lezat,
              tetapi juga penuh kenangan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kini, kami telah melayani ribuan pelanggan dengan 15 cabang di
              seluruh Indonesia. Setiap kue dibuat segar setiap hari menggunakan
              bahan pilihan terbaik, tanpa pengawet, untuk menghadirkan cita
              rasa autentik yang tak terlupakan.
            </p>
            <Link
              href="/about"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Pelajari Lebih Lanjut
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Menu Signature */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Menu Signature Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kue-kue pilihan favorit pelanggan yang wajib Anda coba
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src="/images/Hero.jpg"
                alt="Red Velvet Classic"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Red Velvet Classic
                </h3>
                <p className="text-gray-600 mb-4">
                  Kue red velvet lembut dengan cream cheese frosting premium,
                  tampilan elegan untuk momen spesial Anda.
                </p>
                <span className="text-orange-500 font-bold text-xl">
                  Rp 285.000
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src="/images/Hero.jpg"
                alt="Chocolate Truffle"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Chocolate Truffle
                </h3>
                <p className="text-gray-600 mb-4">
                  Chocolate cake berlapis dengan ganache cokelat Belgia asli,
                  tekstur lembut yang meleleh di lidah.
                </p>
                <span className="text-orange-500 font-bold text-xl">
                  Rp 320.000
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src="/images/Hero.jpg"
                alt="Cheese Cake Delight"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cheese Cake Delight
                </h3>
                <p className="text-gray-600 mb-4">
                  New York style cheesecake dengan base cracker yang renyah,
                  topping buah segar pilihan.
                </p>
                <span className="text-orange-500 font-bold text-xl">
                  Rp 295.000
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Lihat Semua Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Komitmen Kualitas Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Standar tinggi dalam setiap proses pembuatan kue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bahan Premium
              </h3>
              <p className="text-gray-600">
                100% bahan pilihan berkualitas tinggi tanpa bahan pengawet
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dibuat Segar
              </h3>
              <p className="text-gray-600">
                Setiap kue dibuat fresh daily untuk menjaga kesegaran maksimal
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Resep Autentik
              </h3>
              <p className="text-gray-600">
                Resep warisan turun temurun dengan sentuhan inovasi modern
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kepuasan Terjamin
              </h3>
              <p className="text-gray-600">
                Garansi kepuasan 100% atau uang kembali untuk setiap pesanan
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ribuan pelanggan puas dengan kualitas kue kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ani Wijaya</h4>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Kue ulang tahun untuk anak saya luar biasa! Teksturnya lembut,
                tidak terlalu manis, dan dekorasinya sangat cantik. Semua tamu
                puas dan minta repeat order.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">
                  B
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Budi Santoso</h4>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Chocolate Truffle-nya juara! Coklatnya premium banget, nggak
                kemanisan dan teksturnya pas. Harga sebanding dengan kualitas.
                Recommended!
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Citra Dewi</h4>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pelayanannya cepat dan ramah. Custom request untuk dekorasi
                dijalankan dengan sempurna. Pasti jadi langganan untuk acara
                keluarga selanjutnya!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Pesan Kue Impian Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan diskon
              spesial untuk pemesanan pertama Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-white text-orange-500 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
              >
                Lihat Menu
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-700 transition border-2 border-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
