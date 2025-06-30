"use client";

import React from "react";
import { InfiniteTechStack } from "./ui/infinite-moving-cards";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandCpp,
  IconBrandMongodb,
  IconBrandMysql,
  IconDatabase,
  IconBrandGit,
  IconBrandDocker,
  IconBrandNodejs,
  IconServer,
  IconCode,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
} from "@tabler/icons-react";

export function TechStackDemo() {
  return (
    <InfiniteTechStack
      items={techStack}
      direction="right"
      speed="slow"
    />
  );
}

const techStack = [
  {
    icon: <IconCode width="80" height="80" className="text-blue-500" />,
    name: "C",
  },
  {
    icon: <IconBrandCpp width="80" height="80" className="text-blue-600" />,
    name: "C++",
  },
  {
    icon: <IconCode width="80" height="80" className="text-purple-600" />,
    name: "C#",
  },
  {
    icon: <IconBrandJavascript width="80" height="80" className="text-yellow-500" />,
    name: "JavaScript",
  },
  {
    icon: <IconBrandTypescript width="80" height="80" className="text-blue-600" />,
    name: "TypeScript",
  },
  {
    icon: <IconBrandPython width="80" height="80" className="text-green-500" />,
    name: "Python",
  },
  {
    icon: <IconBrandReact width="80" height="80" className="text-cyan-500" />,
    name: "React",
  },
  {
    icon: <IconBrandNextjs width="80" height="80" className="text-black" />,
    name: "Next.js",
  },
  {
    icon: <IconBrandNodejs width="80" height="80" className="text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <IconBrandMongodb width="80" height="80" className="text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <IconBrandMysql width="80" height="80" className="text-orange-500" />,
    name: "MySQL",
  },
  {
    icon: <IconDatabase width="80" height="80" className="text-blue-500" />,
    name: "PostgreSQL",
  },
  {
    icon: <IconServer width="80" height="80" className="text-gray-600" />,
    name: "SQL Server",
  },
  {
    icon: <IconBrandGit width="80" height="80" className="text-orange-600" />,
    name: "Git",
  },
  {
    icon: <IconBrandGithub width="80" height="80" className="text-black" />,
    name: "GitHub",
  },
  {
    icon: <IconBrandDocker width="80" height="80" className="text-blue-500" />,
    name: "Docker",
  },
  {
    icon: <IconBrandHtml5 width="80" height="80" className="text-orange-500" />,
    name: "HTML5",
  },
  {
    icon: <IconBrandCss3 width="80" height="80" className="text-blue-500" />,
    name: "CSS3",
  },
  {
    icon: <IconBrandVscode width="80" height="80" className="text-blue-600" />,
    name: "VS Code",
  },
];