"use client";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { GlobeDemo } from "@/components/GlobeDemo";
import Header from "@/components/Header";
import ContributionGraph from "@raulcanodev/react-github-dots";
import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <main className="mt-24 mb-10 flex flex-col justify-center px-4 lg:px-0 max-w-[1440px] mx-auto">
        <h1 className="text-4xl text-gradient tracking-wide md:text-6xl font-bold mb-4">
          Projects
        </h1>
        <p className="max-w-3xl text-lg text-gray-700">
          I'm a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I specialize in building user-centric applications that
          make a real difference. Each project showcases my commitment to clean
          code, modern technologies, and exceptional user experiences.
        </p>
      </main>
      <main className="flex flex-col justify-center border-t border-gray-200 pt-20">
        <h1 className="text-4xl mb-4 text-center text-gradient md:text-6xl font-bold">
          Love building things
        </h1>
        <AnimatedTestimonialsDemo />
      </main>
      <main className="flex flex-col justify-center py-20 px-4 lg:px-0 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <IconBrandGithub className="w-20 h-20 text-gray-800" />
            <h2 className="text-4xl md:text-6xl font-bold text-gradient">
              Activity
            </h2>
          </div>
        </div>
        <div className="scale-150 overflow-hidden w-full">
          <ContributionGraph
            username="MirHussainJan"
            token={process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}
          />
        </div>
      </main>
    </>
  );
};

export default page;
