"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
};

const buildKeyframes = (from: any, steps: any[]) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes: any = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

export default function BlurText({
  text,
  className = "",
  delay = 120,
  animateBy = "words",
  direction = "top",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const from = useMemo(
    () => ({
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "top" ? -40 : 40,
    }),
    [direction],
  );

  const to = useMemo(
    () => [
      { filter: "blur(5px)", opacity: 0.6, y: 5 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [],
  );

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((segment, i) => (
        <motion.span
          key={i}
          initial={from}
          animate={inView ? buildKeyframes(from, to) : from}
          transition={{ duration: 0.6, delay: (i * delay) / 1000 }}
          className="inline-block"
        >
          {segment}&nbsp;
        </motion.span>
      ))}
    </p>
  );
}
