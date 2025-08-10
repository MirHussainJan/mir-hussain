'use client'
// TechnologyBubble component
import React, { useRef, useEffect, useState } from 'react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export const TechnologyBubble: React.FC<{ technologies: Technology[] }> = ({ technologies }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [textWidths, setTextWidths] = useState<{ [key: number]: number }>({});
  const textRefs = useRef<{ [key: number]: HTMLSpanElement | null }>({});
  
  if (!technologies || technologies.length === 0) return null;

  // Measure text width when component mounts or technologies change
  useEffect(() => {
    const widths: { [key: number]: number } = {};
    Object.keys(textRefs.current).forEach(key => {
      const numKey = parseInt(key);
      if (textRefs.current[numKey]) {
        // Calculate total width: icon space (40px) + gap (8px) + text width + right padding (16px)
        const textWidth = textRefs.current[numKey]!.scrollWidth;
        widths[numKey] = textWidth + 64; // Adjust this value based on your spacing needs
      }
    });
    setTextWidths(widths);
  }, [technologies]);

  return (
    <div className="flex flex-row mt-5 mb-3 -space-x-2 card-main">
      {technologies.map((technology, index) => (
        <div
          key={index}
          className="flex py-2 ps-1 pe-4 flex-row items-center gap-2 rounded-full bg-white overflow-hidden transition-all duration-500 ease-in-out border border-neutral-300 hover:shadow-xl h-10"
          style={{
            width: hoveredIndex === index ? `${textWidths[index] || 200}px` : '40px'
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            style={{ color: technology.color }}
            className="flex items-center justify-center w-8 h-8 flex-shrink-0"
          >
            {technology.icon}
          </span>
          <span
            ref={el => textRefs.current[index] = el}
            className="text-sm font-medium text-gray-700 whitespace-nowrap"
          >
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface CardProps {
  icon: string;
  title: string;
  description: string;
  technologies?: Technology[];
}

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  technologies = [],
}) => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <div className="text-center rounded-3xl md:text-left Card relative bg-white transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.9),0_10px_25px_-3px_rgba(0,0,0,0.1)]">
      <div className="w-full bg-neutral-900 p-6 flex items-center justify-center icon rounded-3xl">
        <img src={icon} alt={title + " icon"} className="w-36 h-36" />
      </div>
      <div className="card-main my-4">
        <h3 className="text-3xl text-gradient font-bold tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-gray-700 text-sm font-extralight leading-relaxed">
          {description}
        </p>
      </div>

      {/* Technology Bubbles */}
      {technologies.length > 0 && <TechnologyBubble technologies={technologies} />}
    </div>
  );
};
