import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { DraggableCardDemo } from "@/components/DraggableCards";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
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
        <AnimatedTestimonialsDemo/>
      </main>
    </>
  );
};

export default page;
