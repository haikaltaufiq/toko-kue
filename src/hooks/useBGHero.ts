import { useState, useEffect } from "react";
import { TRANSITION_DURATION } from "@/types/hero.types";

/**
 * Custom hook to manage background image transitions with Petronas-style dissolve effect
 * @param activeId - Current active navigation item ID
 * @returns Object containing current and previous image states
 */
export function useBackgroundTransition(activeId: number) {
  const [currentId, setCurrentId] = useState(activeId);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activeId === currentId) return;

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setCurrentId(activeId);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);

    return () => clearTimeout(timer);
  }, [activeId, currentId]);

  return { currentId, isTransitioning };
}
