// src/components/SplashScreen.tsx
"use client";

import { useEffect } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold">My App</h1>
    </div>
  );
}
