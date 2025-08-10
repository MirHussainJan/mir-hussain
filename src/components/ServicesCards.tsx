"use client";
import React from "react";
import { Card } from "./ui/Cards";
import {
  IconBrandFigma,
  IconBrandAdobe,
  IconBrandSketch,
  IconBrandFramer,
  IconBrandReact,
  IconBrandFlutter,
  IconBrandSwift,
  IconBrandKotlin,
  IconBrandAdobePhotoshop,
  IconBrandAdobeIllustrator,
  IconBrandBlender,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";

// Technology interface
interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// Service interface
interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  technologies: Technology[];
}

// Services data with technologies
const servicesData: Service[] = [
  {
    id: 1,
    icon: "/website-theme-svgrepo-com.svg",
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    technologies: [
      {
        name: "Figma",
        icon: <IconBrandFigma color="#F24E1E" size={28} />,
        color: "#F24E1E",
      },
      {
        name: "Adobe XD",
        icon: <IconBrandAdobe color="#FF61F6" size={28} />,
        color: "#FF61F6",
      },
      {
        name: "Sketch",
        icon: <IconBrandSketch color="#F7B500" size={28} />,
        color: "#F7B500",
      },
      {
        name: "Framer",
        icon: <IconBrandFramer color="#0055FF" size={28} />,
        color: "#0055FF",
      },
    ],
  },
  {
    id: 2,
    icon: "/operating-system-svgrepo-com.svg",
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
    technologies: [
      {
        name: "React",
        icon: <IconBrandReact color="#61DAFB" size={28} />,
        color: "#61DAFB",
      },
      {
        name: "Flutter",
        icon: <IconBrandFlutter color="#02569B" size={28} />,
        color: "#02569B",
      },
      {
        name: "Swift",
        icon: <IconBrandSwift color="#FA7343" size={28} />,
        color: "#FA7343",
      },
      {
        name: "Kotlin",
        icon: <IconBrandKotlin color="#7F52FF" size={28} />,
        color: "#7F52FF",
      },
    ],
  },
  {
    id: 3,
    icon: "/design-svgrepo-com (1).svg",
    title: "Design & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
    technologies: [
      {
        name: "Photoshop",
        icon: <IconBrandAdobePhotoshop color="#31A8FF" size={28} />,
        color: "#31A8FF",
      },
      {
        name: "Illustrator",
        icon: <IconBrandAdobeIllustrator color="#FF9A00" size={28} />,
        color: "#FF9A00",
      },
      {
        name: "Blender",
        icon: <IconBrandBlender color="#F5792A" size={28} />,
        color: "#F5792A",
      },
    ],
  },
  {
    id: 4,
    icon: "/coding-terminal-svgrepo-com (1).svg",
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    technologies: [
      {
        name: "JavaScript",
        icon: <IconBrandJavascript color="#F7DF1E" size={28} />,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: <IconBrandTypescript color="#3178C6" size={28} />,
        color: "#3178C6",
      },
      {
        name: "Python",
        icon: <IconBrandPython color="#3776AB" size={28} />,
        color: "#3776AB",
      },
      {
        name: "Node.js",
        icon: <IconBrandNodejs color="#339933" size={28} />,
        color: "#339933",
      },
      {
        name: "MongoDB",
        icon: <IconBrandMongodb color="#47A248" size={28} />,
        color: "#47A248",
      },
    ],
  },
];

// Main ServicesCards Component
const ServicesCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 px-18 justify-center">
      {servicesData.map((service) => (
        <Card
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          technologies={service.technologies}
        />
      ))}
    </div>
  );
};

export default ServicesCards;
