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
      className: "absolute bottom-32 left-[45%] rotate-[10deg]",
    },
    {
      title: "Access Specifiers",
      image:
        "https://i.ytimg.com/vi/CAOhTJVOnSc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLDGyQghSrgrOYfTbLpuDaVIrd1bfQ",
      className: "absolute top-20 right-[25%] rotate-[2deg]",
    },
    {
      title: "Constructor Overloading",
      image:
        "https://i.ytimg.com/vi/4vCLwl4Mivw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBOVGvJmv2f7sIVnAGfV7iCTMSmbA",
      className: "absolute top-42 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Reading from file",
      image:
        "https://i.ytimg.com/vi/n0CO_LqNE1A/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAdBO7B4RHXEt_bAwJTdM7gzcwZEg",
      className: "absolute bottom-50 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      <PinContainer title="/@codex05" href="https://youtube.com/@codex05">
        <div className="w-[40rem]">
          <img src="./C DE X.png" className="" alt="" />
        </div>
        <h1 className="text-3xl text-center font-semibold my-5 text-gradient">
          Click to see the YT Channel
        </h1>
      </PinContainer>
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
