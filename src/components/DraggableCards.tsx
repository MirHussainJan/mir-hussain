import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { PinContainer } from "./ui/3d-pin";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Chap 8 Exercise",
      image:
        "https://i.ytimg.com/vi/wlNsJz_R0JQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLCoq7usjGuWu-rdBDISOMO9P14Yig",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Inheritance & Polymorphism",
      image:
        "https://i.ytimg.com/vi/9UukWDYVoXc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBCS2nscHysA3bQyTb2Zfx8hAsYCA",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Writing in file",
      image:
        "https://i.ytimg.com/vi/zmejPSE5y5Y/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAJV5V6UnXEwErfxfyn7_VjpYNr4A",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Constructor & Destructor",
      image:
        "https://i.ytimg.com/vi/xVlvnAW9aNc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLCBXIyVIqxu_TtDmETCfbk5WAyQfg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Access Specifiers",
      image:
        "https://i.ytimg.com/vi/CAOhTJVOnSc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLDGyQghSrgrOYfTbLpuDaVIrd1bfQ",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Constructor Overloading",
      image:
        "https://i.ytimg.com/vi/4vCLwl4Mivw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBOVGvJmv2f7sIVnAGfV7iCTMSmbA",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Reading from file",
      image:
        "https://i.ytimg.com/vi/n0CO_LqNE1A/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAdBO7B4RHXEt_bAwJTdM7gzcwZEg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      {/* <img src="/CODE_X Transparent.png" alt="" className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 scale-150 hover:rotate-z-45 hover:rotate-y-180" /> */}
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none rounded-3xl relative z-10 h-38 w-80 object-cover"
          />
          <h3 className="mt-2 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
