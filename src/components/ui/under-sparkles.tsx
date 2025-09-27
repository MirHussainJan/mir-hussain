"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview({text = "love"}: { text?: string }) {
  const h1Ref = React.useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    if (h1Ref.current) {
      setWidth(h1Ref.current.offsetWidth);
    }
    const handleResize = () => {
      if (h1Ref.current) setWidth(h1Ref.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-visible mb-10">
      <div className="relative">
        <h1
          ref={h1Ref}
          className="md:text-6xl text-4xl font-bold text-center text-gradient relative z-20 w-full"
        >
          {text}
        </h1>
        {/* Underline effect: absolutely position the effect under h1 */}
        {width && (
          <div
            className="absolute left-0"
            style={{
              width,
              top: `calc(90%)`
            }}
          >
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-neutral-900 to-transparent h-[2px] w-full left-0 blur-md" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={4200}
              className="w-full h-10"
              particleColor="#00000000"
            />
          </div>
        )}
      </div>
    </div>
  );
}
