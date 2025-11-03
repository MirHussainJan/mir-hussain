import React from "react";
import {
  IconTrophy,
  IconBrandYoutube,
  IconCertificate,
  IconBrandGithub,
} from "@tabler/icons-react";

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  desc: string;
  icon: React.ReactNode;
  iconColor: string;
}

const achievementData: Achievement[] = [
  {
    id: 1,
    title: "1st Place - Neuron Nexus Competition",
    subtitle: "NASCON '24",
    date: "2024",
    desc: "Won first place in the prestigious Neuron Nexus competition at NASCON '24, showcasing innovative solutions and technical expertise.",
    icon: <IconTrophy size={88} />,
    iconColor: "#FFD700",
  },
  {
    id: 2,
    title: "YouTube Channel Milestone",
    subtitle: "100K+ Views",
    date: "2024",
    desc: "Reached over 100,000 views on YouTube channel, sharing knowledge and tutorials with the developer community.",
    icon: <IconBrandYoutube size={88} />,
    iconColor: "#FF0000",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    subtitle: "React Libraries",
    date: "2023 - Present",
    desc: "Actively contributed to open source by fixing bugs and enhancing features in popular React libraries, helping improve the ecosystem.",
    icon: <IconBrandGithub size={88} />,
    iconColor: "#333333",
  },
  {
    id: 4,
    title: "Full Stack Developer Certification",
    subtitle: "PNY Institute",
    date: "2023",
    desc: "Successfully completed the Full Stack Developer certification program from PNY Institute, mastering modern web development technologies.",
    icon: <IconCertificate size={88} />,
    iconColor: "#4CAF50",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="p-8 bg-neutral-100 relative shadow-md">
      <div className="dots absolute bg-neutral-200 w-6 h-6 rounded-full top-[-12] left-[-12]"></div>
      <div className="dots absolute bg-neutral-200 w-6 h-6 rounded-full top-[-12] right-[-12]"></div>
      <div className="dots absolute bg-neutral-200 w-6 h-6 rounded-full left-[-12] bottom-[-12]"></div>
      <div className="dots absolute bg-neutral-200 w-6 h-6 rounded-full right-[-12] bottom-[-12]"></div>
      <div className="mx-auto space-y-16">
        {achievementData.map((achievement, idx) => (
          <div
            key={achievement.id}
            className={
              idx % 2 === 0 ? "reveal-left-on-view" : "reveal-right-on-view"
            }
          >
            <div className="flex flex-col md:flex-row items-start justify-between gap-3">
              {/* Left Side - Text Content */}
              <div className="flex-grow order-2 md:order-1 w-full">
                <h4 className="text-3xl font-bold text-gradient mb-2 tracking-wide">
                  {achievement.title}
                </h4>

                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h4 className="text-xl font-bold">{achievement.subtitle}</h4>
                  <span className="text-sm text-gray-700">
                    {achievement.date}
                  </span>
                </div>

                <p className="mb-2 text-gray-700 font-extralight leading-relaxed max-w-2xl">
                  {achievement.desc}
                </p>
              </div>

              {/* Right Side - Icon */}
              <div className="flex-shrink-0 order-1 md:order-2">
                <div
                  className=""
                  style={{ color: achievement.iconColor }}
                >
                  {achievement.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
