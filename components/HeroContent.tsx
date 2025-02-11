"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroContent() {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 50); // Delay to ensure the effect is visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative container mx-auto flex flex-col items-center text-center gap-4 h-full justify-center mt-10 transition-all duration-1000 ease-in-out ${
        isBlurred ? "blur-sm" : "blur-none"
      }`}
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
        Solar Canopy
      </h1>
      <p className="text-xl text-muted-foreground max-w-[600px] mx-auto text-white">
        Enabling the Duke community to charge devices using renewable energy source.
      </p>
      <div className="flex gap-4 mt-6">
        <Button size="lg" asChild>
          <Link href="/project">Project Overview</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/team">Meet the Team</Link>
        </Button>
      </div>
    </div>
  );
} 