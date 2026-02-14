"use client";
import { useEffect, useState } from "react";

const messages = [
  "Analyzing seasonal patterns...",
  "Balancing crowd & hidden gems...",
  "Scanning offbeat destinations...",
  "AI curating your perfect trip..."
];

export default function LoadingOverlay() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 text-white z-500">

      {/* Animated Pulse Orb */}
      <div className="relative">
        <div className="w-10 h-10 bg-orange-500 rounded-full animate-ping absolute" />
        <div className="w-10 h-10 bg-orange-500 rounded-full" />
      </div>

      {/* Message */}
      <p className="text-xl text-sm tracking-wide text-white/90 transition-opacity duration-300">
        {messages[index]}
      </p>

      {/* Subtle dot loader */}
      <div className="flex gap-1 mt-2">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
      </div>

    </div>
  );
}
