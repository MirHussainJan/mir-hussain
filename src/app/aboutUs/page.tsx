import React from "react";
import Header from "@/components/Header";
import { DraggableCardDemo } from "@/components/DraggableCards";
import { SparklesPreview } from "@/components/ui/under-sparkles";
import ExperienceSection from "@/components/Experience";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mt-24 mb-10 flex flex-col justify-center px-4 lg:px-0 max-w-[1440px] mx-auto">
        <h1 className="text-4xl text-gradient tracking-wide md:text-6xl font-bold mb-4">
          About Me
        </h1>
        <p className="max-w-3xl text-lg text-gray-700">
          Hi, I'm Mir Hussain, a passionate Software Engineer and Web Developer
          from Pakistan. I love building modern, scalable, and beautiful web
          applications. My mission is to turn ideas into reality with clean code
          and creative solutions.
        </p>
      </main>
      <main className="flex flex-col justify-center border-t border-gray-200 pt-20">
        <h1 className="text-4xl mb-4 text-center text-gradient md:text-6xl font-bold">
          Sharing knowledge as I learn
        </h1>
        <DraggableCardDemo />
      </main>
      <div className="below-section mb-20 max-w-[1440px] mx-auto px-4 lg:px-0 reveal-on-view">
        <h1 className="text-4xl mb-8 text-center md:text-6xl font-bold">
          <span className="px-5 py-3 bg-neutral-50 relative shadow-md">
            Timeline of Achievements
            <div className="dots absolute bg-neutral-200 w-4 h-4 rounded-full top-[-6] left-[-6]"></div>
            <div className="dots absolute bg-neutral-200 w-4 h-4 rounded-full top-[-6] right-[-6]"></div>
            <div className="dots absolute bg-neutral-200 w-4 h-4 rounded-full left-[-6] bottom-[-6]"></div>
            <div className="dots absolute bg-neutral-200 w-4 h-4 rounded-full right-[-6] bottom-[-6]"></div>
          </span>
        </h1>
        <ExperienceSection />
        {/* Fixed alignment for "Worked at reputed firms" with proper spacing */}
        {/* <div className="text-4xl mb-10 md:text-6xl font-bold text-center flex items-center justify-center flex-wrap gap-1 md:gap-2">
                <span className="text-gradient mr-1 md:mr-2 mb-1 md:mb-2">
                  Worked at
                </span>
                <TextHoverEffect text="reputed" className="text-4xl md:text-6xl" />
                <span className="text-gradient mb-1 md:mb-2">firms</span>
              </div>
              <ExperienceSection />*/}
      </div>
    </>
  );
}
