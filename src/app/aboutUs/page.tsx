import React from "react";
import Header from "@/components/Header";
import { DraggableCardDemo } from "@/components/DraggableCards";

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
      <main className="flex flex-col justify-center border-t border-gray-200 pt-10">
        <h1 className="text-4xl mb-4 text-center text-gradient md:text-6xl font-bold">
          Sharing knowledge as I learn
        </h1>
        <DraggableCardDemo />
      </main>
    </>
  );
}
