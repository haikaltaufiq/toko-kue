// ==========================================
// src/components/navbar/Navbar.tsx
// ==========================================

"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/fadeIn";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false); // State baru buat nav wide hover
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [pathname, setPathname] = useState("/");

  const navRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref buat handle delay close dropdown
  const lastScrollY = useRef(0);

  // ====================
  // INIT
  // ====================
  useEffect(() => {
    setPathname(window.location.pathname);
    const nav = navRef.current;
    if (!nav) return;

    timelineRef.current = gsap.timeline({ paused: true }).to(nav, {
      yPercent: -100,
      duration: 0.3,
      ease: "power2.inOut",
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      setIsScrolled(currentScrollY > 50);

      if (scrollDelta > 0 && currentScrollY > 100) {
        timelineRef.current?.play();
      } else if (scrollDelta < 0) {
        timelineRef.current?.reverse();
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ====================
  // NAV HOVER
  // ====================
  const handleNavMouseEnter = () => {
    setIsNavbarHovered(true);
    if (timelineRef.current) {
      timelineRef.current.pause();
      gsap.to(navRef.current, {
        yPercent: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleNavMouseLeave = () => {
    setIsNavbarHovered(false);
    if (timelineRef.current && window.scrollY > 100) {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      if (scrollDelta > 0) timelineRef.current.play();
    }
  };

  // ====================
  // DROPDOWN
  // ====================
  const handleDropdownEnter = (itemHref: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel closing if moving to another item
    setHoveredItem(itemHref);
    setOpenDropdown(itemHref);
  };

  const handleDropdownLeave = () => {
    setHoveredItem(null);
    // Kasih delay 0.5 detik sebelum nutup dropdown bjir
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  // Navbar jadi putih kalau di-scroll, menu mobile buka, atau MOUSE NYENTUH NAV bjir
  const isWhiteBg = isScrolled || isOpen || isNavbarHovered;

  const dropdownItems = {
    "/products": [
      { label: "Brownies", href: "/#" },
      { label: "Cookies", href: "/#" },
      { label: "Bolu", href: "/#" },
      { label: "Bawang", href: "/#" },
      { label: "Pisang", href: "/#" },
    ],
  };

  // ====================
  // RENDER
  // ====================
  return (
    <nav
      ref={navRef}
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
      className={`
        fixed w-full z-50 transition-all duration-500 ease-in-out
        ${
          isWhiteBg
            ? "bg-white/95 backdrop-blur-sm shadow-2xl"
            : "bg-transparent"
        }
      `}
    >
      {/* FRAMER MOTION */}
      <motion.div
        variants={fadeIn("up", { offset: 50, duration: 0.8 })}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-500 ease-in-out h-16`}
          >
            {/* LOGO */}
            <div
              className={`font-bold text-xl transition-all duration-500 ease-in-out ${
                isWhiteBg ? "text-black" : "text-white"
              }`}
            >
              KUE BERGIZI
            </div>

            <div className="hidden md:flex items-center space-x-10">
              {[
                { href: "/", label: "Home", hasDropdown: false },
                { href: "/about", label: "About Us", hasDropdown: false },
                { href: "/products", label: "Our Product", hasDropdown: true },
                { href: "/contact", label: "Contact Us", hasDropdown: false },
              ].map((item) => {
                const isActive = pathname === item.href;
                const isItemHovered = hoveredItem === item.href;
                const hasAnyHover = hoveredItem !== null;
                const isDropdownOpen = openDropdown === item.href;

                let textColor = "";
                if (!isWhiteBg) {
                  textColor = "text-white";
                } else if (hasAnyHover) {
                  textColor = isItemHovered ? "text-black" : "text-gray-400";
                } else {
                  textColor = "text-black";
                }

                return (
                  <div
                    key={item.href}
                    className="relative h-16 flex items-center" // Tambahin height biar mouse gak gampang "lepas"
                    onMouseEnter={() => {
                      if (item.hasDropdown) handleDropdownEnter(item.href);
                      else setHoveredItem(item.href);
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) handleDropdownLeave();
                      else setHoveredItem(null);
                    }}
                  >
                    <a
                      href={item.href}
                      className={`relative text-sm group font-normal transition-all duration-300 ${textColor} flex items-center gap-1`}
                    >
                      <span className="transition-colors duration-300">
                        {item.label}
                      </span>
                      {item.hasDropdown && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-current transition-all duration-300 ${
                          isItemHovered
                            ? "w-full"
                            : isActive && !hasAnyHover
                            ? "w-full"
                            : "w-0"
                        }`}
                      />
                    </a>

                    {item.hasDropdown && isDropdownOpen && (
                      <div
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                        }}
                        className="absolute top-full left-0 mt-0 min-w-50 bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn"
                      >
                        {dropdownItems[
                          item.href as keyof typeof dropdownItems
                        ]?.map((dropItem, idx) => (
                          <a
                            key={idx}
                            href={dropItem.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200"
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Language Switcher */}
              <div
                className="relative h-16 flex items-center"
                onMouseEnter={() => handleDropdownEnter("language")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`relative text-sm font-normal transition-all duration-300 flex items-center gap-1 ${
                    !isWhiteBg
                      ? "text-white"
                      : hoveredItem === "language"
                      ? "text-black"
                      : hoveredItem
                      ? "text-gray-400"
                      : "text-black"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </button>

                {openDropdown === "language" && (
                  <div
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    className="absolute top-full right-0 mt-0 min-w-25 bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn"
                  >
                    <button className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200">
                      ID
                    </button>
                    <button className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200">
                      EN
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              suppressHydrationWarning
              className={`md:hidden transition-all duration-300 hover:scale-110 ${
                isWhiteBg ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
          >
            <div className="pb-6 pt-4 space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Our Product" },
                { href: "/contact", label: "Contact Us" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`
                  flex items-center justify-between
                  px-4 py-3 rounded-xl
                  font-medium transition-all duration-300
                  hover:bg-orange-300 active:scale-[0.98]
                  ${
                    pathname === item.href
                      ? "bg-orange-500 text-white"
                      : "text-gray-800"
                  }
                `}
                >
                  {item.label}
                  <span className="opacity-60">
                    <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
