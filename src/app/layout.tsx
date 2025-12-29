// ====================
// src/app/layout.tsx
// ====================
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/animations/scroll/smoothScroll";
// import PageTransition from '@/components/scroll/pageTransition'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Toko Kue",
  description: "Kue enak dan lezat untuk semua orang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-white`}>
        {/* <PageTransition> */}
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
