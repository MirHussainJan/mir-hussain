"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
  className = "",
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [textDimensions, setTextDimensions] = useState({ width: 0, height: 0 });
  
  // Use useInView to trigger animation when component enters viewport (re-animates on re-entry)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  useEffect(() => {
    const measureText = () => {
      if (containerRef.current) {
        const tempSpan = document.createElement('span');
        tempSpan.textContent = text;
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.fontSize = 'inherit';
        tempSpan.style.fontFamily = 'inherit';
        tempSpan.style.fontWeight = 'inherit';
        tempSpan.className = className;
        
        containerRef.current.appendChild(tempSpan);
        const rect = tempSpan.getBoundingClientRect();
        setTextDimensions({ width: rect.width, height: rect.height });
        containerRef.current.removeChild(tempSpan);
      }
    };

    // Initial measurement
    measureText();

    // Remeasure on window resize for responsive behavior
    const handleResize = () => {
      measureText();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text, className]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative ${className}`}
      style={{ 
        width: textDimensions.width > 0 ? `${textDimensions.width}px` : 'auto',
        height: textDimensions.height > 0 ? `${textDimensions.height}px` : '1em',
        minWidth: '1em',
        verticalAlign: 'baseline',
        marginRight: '0.25rem' // Add small margin to prevent overlap
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${Math.max(textDimensions.width, 50)} ${Math.max(textDimensions.height, 30)}`}
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient
            id={`textGradient-${text}`}
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="25%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Circular reveal mask that follows cursor */}
          <motion.radialGradient
            id={`revealMask-${text}`}
            gradientUnits="userSpaceOnUse"
            r="15%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: duration ?? 0.1, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          
          {/* Mask for hover fill effect */}
          <mask id={`hoverMask-${text}`}>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="black"
            />
            {hovered && (
              <circle
                cx={maskPosition.cx}
                cy={maskPosition.cy}
                r="20%"
                fill="white"
              />
            )}
          </mask>
        </defs>
        
        {/* Base outlined text (always visible) */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="1"
          className="fill-transparent stroke-neutral-200 dark:stroke-neutral-800"
          style={{ 
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'inherit'
          }}
        >
          {text}
        </text>
        
        {/* Animated stroke text - re-animates each time it enters viewport */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="1"
          className="fill-transparent"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={isInView ? {
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          } : {
            strokeDashoffset: 1000,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
          style={{ 
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'inherit'
          }}
        >
          {text}
        </motion.text>
        
        {/* Gradient filled text that appears only where cursor hovers */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={`url(#textGradient-${text})`}
          mask={`url(#hoverMask-${text})`}
          style={{ 
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'inherit'
          }}
        >
          {text}
        </text>
      </svg>
      
      {/* Invisible text for layout */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
    </span>
  );
};