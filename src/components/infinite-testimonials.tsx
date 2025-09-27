"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/testimonials";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Mir Hussain was a fantastic experience. His attention to detail and problem-solving skills as a Software Engineer are top-notch.",
    name: "Ayesha Khan",
    title: "Product Manager, Karachi",
  },
  {
    quote:
      "Mir Hussain delivered our web project ahead of schedule and exceeded our expectations. Highly recommended for any web development needs!",
    name: "Ali Raza",
    title: "Startup Founder, Lahore",
  },
  {
    quote:
      "Professional, reliable, and always ready to help. Mir is a talented Web Developer who brings creative solutions to the table.",
    name: "Fatima Noor",
    title: "UI/UX Designer, Islamabad",
  },
  {
    quote:
      "We needed a robust backend for our app and Mir Hussain delivered exactly what we wanted. Great communication throughout the project.",
    name: "Usman Tariq",
    title: "Mobile App Lead, Peshawar",
  },
  {
    quote:
      "Mir's expertise in modern web technologies helped us scale our business online. Would love to work with him again!",
    name: "Sana Ahmed",
    title: "Business Owner, Multan",
  },
];
