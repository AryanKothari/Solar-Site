"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TeamImage() {
  const [blurAmount, setBlurAmount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxBlur = 10; // Maximum blur amount
      const scrollPosition = window.scrollY;
      const blur = Math.min(scrollPosition / 20, maxBlur); // Adjust divisor for sensitivity
      setBlurAmount(blur);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Base unblurred image */}
      <Image
        src="/photos/hero.jpg"
        alt="The Root team"
        fill
        className="object-cover"
        priority
      />

      {/* Blurred overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000`}
        style={{
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          maskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
          WebkitMaskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
} 