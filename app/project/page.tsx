"use client";

import { useEffect, useState } from "react";
import ProjectOverview from "./ProjectOverview";
// import ProjectComponents from "./ProjectComponents";
import EngineeringProjectShowcase from "@/components/engineering-project-showcase";
import ThreeDViewer from "./3DViewer";

export default function ProjectPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show title when user starts scrolling
      setShowTitle(window.scrollY > 40);
      
      // Keep video fixed until scrolling past viewport height
      setIsFixed(window.scrollY < window.innerHeight/2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer div to create scroll space */}
      <div className="h-[200vh]">
        {/* Fixed video container */}
        <div
          className={`w-full h-screen transition-all duration-300 ${
            isFixed ? "fixed" : "absolute top-[100vh]"
          } left-0`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/lapse.mov" type="video/mp4" />
          </video>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Title that appears on scroll */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              showTitle ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
              The Root yup
            </h1>
          </div>
        </div>
      </div>

      <div className="relative bg-background">
        <div className="container mx-auto py-24">
          <ProjectOverview />
          {/* <ProjectComponents />  old component tsx */}
          <ThreeDViewer modelPath="/models/untitled.glb" />
          <EngineeringProjectShowcase />
        </div>
      </div>
    </>
  );
} 