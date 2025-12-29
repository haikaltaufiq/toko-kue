"use client";

import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

type Props = {
  src: string;
  direction?: 1 | -1;
  velocity?: number;
};

function useElementWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        const firstChild = ref.current.firstElementChild as HTMLElement;
        if (firstChild) {
          setWidth(firstChild.offsetWidth);
        }
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export default function ScrollVelocityRow({
  src,
  direction = 1,
  velocity = 50,
}: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const singleItemWidth = useElementWidth(wrapperRef);

  const x = useTransform(baseX, (v) => {
    if (singleItemWidth === 0) return 0;
    // Wrap seamlessly within single item width
    const wrapped = ((v % singleItemWidth) + singleItemWidth) % singleItemWidth;
    return -wrapped;
  });

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (singleItemWidth === 0) return;

    let moveBy =
      directionFactor.current * velocity * direction * (delta / 1000);

    const currentVelocity = velocityFactor.get();
    if (currentVelocity < 0) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * currentVelocity;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <motion.div
        ref={wrapperRef}
        style={{ x }}
        className="flex will-change-transform"
      >
        <div className="flex shrink-0 items-center pr-8">
          <img src={src} alt="clients" className="h-20 md:h-24 lg:h-28" />
        </div>
        <div className="flex shrink-0 items-center pr-8">
          <img src={src} alt="clients" className="h-20 md:h-24 lg:h-28" />
        </div>
        <div className="flex shrink-0 items-center pr-8">
          <img src={src} alt="clients" className="h-20 md:h-24 lg:h-28" />
        </div>
        <div className="flex shrink-0 items-center pr-8">
          <img src={src} alt="clients" className="h-20 md:h-24 lg:h-28" />
        </div>
        <div className="flex shrink-0 items-center pr-8">
          <img src={src} alt="clients" className="h-20 md:h-24 lg:h-28" />
        </div>
        <div className="flex shrink-0 items-center pr-8">
          <img src={src} alt="clients" className="h-20 md:h-24 lg:h-28" />
        </div>
      </motion.div>
    </div>
  );
}
