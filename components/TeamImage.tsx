"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TeamImage() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(true);
    }, 1000); // 2 seconds delay before blur

    return () => clearTimeout(timer);
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
        src="/photos/team-pic.JPG"
        alt="The Root team"
        fill
        className="object-cover"
        priority
      />

      {/* Blurred overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isBlurred ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backdropFilter: `blur(5px)`,
          WebkitBackdropFilter: `blur(5px)`,
          maskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
          WebkitMaskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
} 