import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useGSAP = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = [],
) => {
  const contextRef = useRef<gsap.Context | undefined>(undefined);

  useEffect(() => {
    contextRef.current = gsap.context(callback);

    return () => {
      contextRef.current?.revert();
    };
  }, dependencies);

  return contextRef;
};
