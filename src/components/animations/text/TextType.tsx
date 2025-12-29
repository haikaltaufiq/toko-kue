"use client";

import {
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";

type TextTypeProps = {
  text: string[] | string;
  as?: keyof JSX.IntrinsicElements;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  cursorCharacter?: string;
};

export default function TextType({
  text,
  as: Component = "h1",
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 1500,
  initialDelay = 0,
  loop = true,
  className = "",
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [showCursor]);

  useEffect(() => {
    const currentText = textArray[textIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textArray.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentText.length) {
          if (!loop && textIndex === textArray.length - 1) return;
          setTimeout(() => setIsDeleting(true), pauseDuration);
          setCharIndex(0);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    charIndex,
    isDeleting,
    textIndex,
    textArray,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  return createElement(
    Component,
    { className: `inline-flex items-center ${className}` },
    <>
      <span>{displayedText}</span>
      {showCursor && (
        <span ref={cursorRef} className="ml-1">
          {cursorCharacter}
        </span>
      )}
    </>,
  );
}
