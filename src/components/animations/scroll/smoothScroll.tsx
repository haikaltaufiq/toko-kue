"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, ScrollSmoother } from "@/lib/gsap";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: scrollerRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={scrollerRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
