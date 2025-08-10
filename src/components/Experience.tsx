import React from 'react';
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandAngular,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandDocker,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandPython,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVite,
} from '@tabler/icons-react';
import { TechnologyBubble } from './ui/Cards';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Experience {
  id: number;
  title: string;
  role: string;
  date: string;
  desc: string;
  technologies: Technology[];
  logo: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Proto IT Consultants",
    role: "Associate Web Developer",
    date: "September 2024 - Present",
    desc: "Led the development of key features for Google Cloud Platform's web console while improving performance metrics by 35%.",
    technologies: [
      { name: "TypeScript", icon: <IconBrandTypescript color="#3178C6" size={28} />, color: "#3178C6" },
      { name: "React", icon: <IconBrandReact color="#61DAFB" size={28} />, color: "#61DAFB" },
      { name: "Angular", icon: <IconBrandAngular color="#DD0031" size={28} />, color: "#DD0031" },
      { name: "Node.js", icon: <IconBrandNodejs color="#339933" size={28} />, color: "#339933" },
      { name: "Docker", icon: <IconBrandDocker color="#2496ED" size={28} />, color: "#2496ED" },
    ],
    logo: "/ProtoIt.png",
  },
  {
    id: 4,
    title: "Fiverr",
    role: "Freelance Web Developer",
    date: "July 2025 - Present",
    desc: "Worked as a freelance developer on fiverr, collaborating with senior developers to deliver high-quality software solutions.",
    technologies: [
      { name: "JavaScript", icon: <IconBrandJavascript color="#F7DF1E" size={28} />, color: "#F7DF1E" },
      { name: "HTML5", icon: <IconBrandHtml5 color="#E34F26" size={28} />, color: "#E34F26" },
      { name: "CSS3", icon: <IconBrandCss3 color="#1572B6" size={28} />, color: "#1572B6" },
      { name: "Next.js", icon: <IconBrandNextjs color="#000000" size={28} />, color: "#000000" },
      { name: "Tailwind CSS", icon: <IconBrandTailwind color="#06B6D4" size={28} />, color: "#06B6D4" },
      { name: "Vite", icon: <IconBrandVite color="#646CFF" size={28} />, color: "#646CFF" },
    ],
    logo: "/fiverr.png",
  },
  {
    id: 2,
    title: "Ezitech Solutions",
    role: "MERN Stack Developer",
    date: "August 2024 - November 2024",
    desc: "Worked on the Microsoft Teams web application, implementing real-time collaboration features and UI components.",
    technologies: [
      { name: "JavaScript", icon: <IconBrandJavascript color="#F7DF1E" size={28} />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <IconBrandTypescript color="#3178C6" size={28} />, color: "#3178C6" },
      { name: "React", icon: <IconBrandReact color="#61DAFB" size={28} />, color: "#61DAFB" },
      { name: "Node.js", icon: <IconBrandNodejs color="#339933" size={28} />, color: "#339933" },
      { name: "Git", icon: <IconBrandGit color="#F05032" size={28} />, color: "#F05032" },
    ],
    logo: "/ezitech.png",
  },
  {
    id: 3,
    title: "Nastp",
    role: "Cockpit Simulations Developer",
    date: "June 2023 - July 2023",
    desc: "Developed and maintained core components of Airbnb's booking platform.",
    technologies: [
      { name: "Python", icon: <IconBrandPython color="#61DAFB" size={28} />, color: "#61DAFB" },
      { name: "Git", icon: <IconBrandGit color="#F05032" size={28} />, color: "#F05032" },
    ],
    logo: "/nastp.png",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16">
      <div className="mx-auto space-y-16">
        {experienceData.map((experience) => (
          <div key={experience.id}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              {/* Left Side - Text Content */}
              <div className="flex-grow order-2 md:order-1 w-full">
                <div className="flex flex-wrap items-center gap-4 mb-1">
                  <h4 className="text-4xl text-gradient">
                    {experience.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {experience.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {experience.role}
                </h3>

                <p className="mb-2 text-neutral-900 leading-relaxed max-w-3xl">
                  {experience.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  <TechnologyBubble technologies={experience.technologies} />
                </div>
              </div>

              {/* Right Side - Logo */}
              <div className="flex-shrink-0 order-1 md:order-2">
                <img
                  src={experience.logo}
                  alt={`${experience.title} logo`}
                  className="w-20 sm:w-38 md:w-42 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
