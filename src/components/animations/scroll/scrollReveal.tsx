"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  enableRotation?: boolean;
  baseRotation?: number;
  baseOpacity?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  enableRotation = false,
  baseRotation = 3,
  baseOpacity = 0.1,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (enableRotation) {
        gsap.fromTo(
          el,
          {
            transformOrigin: "0% 50%",
            rotate: baseRotation,
          },
          {
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      }

      gsap.fromTo(
        el,
        {
          opacity: baseOpacity,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [enableRotation, baseRotation, baseOpacity]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
