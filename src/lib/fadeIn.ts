import { Variants } from "framer-motion";

type FadeInOptions = {
  offset?: number;
  duration?: number;
  delay?: number;
};

const DEFAULTS = {
  offset: 40,
  duration: 0.6,
  delay: 0,
};

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" = "up",
  options: FadeInOptions = {},
): Variants => {
  const { offset, duration, delay } = { ...DEFAULTS, ...options };

  const axis = {
    x: direction === "left" ? -offset : direction === "right" ? offset : 0,
    y: direction === "up" ? -offset : direction === "down" ? offset : 0,
  };

  return {
    hidden: {
      opacity: 0,
      x: axis.x,
      y: axis.y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // smooth, professional
      },
    },
  };
};
