"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Mir Hussain",
    designation: "Software Engineer",
    image:
      "/mirhussain.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
      <AnimatedTooltip items={people} />
  );
}