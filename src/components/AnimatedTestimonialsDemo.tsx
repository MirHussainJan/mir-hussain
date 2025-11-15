import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { link } from "fs";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A centralized event management platform that brings all your events together in one place. Discover local happenings, create and manage events, RSVP with ease, and connect with attendees. Features real-time updates, calendar integration, and smart event recommendations.",
      name: "ifYK",
      designation: "All Events One Place",
      src: "https://i.ibb.co/Kjkj1GxP/ifYK.png",
      link: "https://ifyk.vercel.app/",
    },
    {
      quote:
        "An interactive 3D car customization application that lets users personalize vehicles in real-time. Features color selection, parts customization, and 360-degree rotation with smooth Three.js animations and realistic rendering.",
      name: "Car Customizer - 3D Model",
      designation: "3D Vehicle Customization App",
      src: "https://i.ibb.co/fGv1Z0ns/3d-model.png",
      link: "https://github.com/MirHussainJan/3D-ModelViewer",
    },
    {
      quote:
        "A full-featured expense tracking application that helps users manage their finances efficiently. Includes budget planning, category-based tracking, visual analytics with charts, and monthly/yearly financial reports.",
      name: "Expense Tracker",
      designation: "Personal Finance Management App",
      src: "https://i.ibb.co/67ZTCS38/Expense-Tracker.png",
      link: "https://expense-tracker-frontend-three-gray.vercel.app/",
    },
    {
      quote:
        "An intelligent text paraphrasing tool that helps users rewrite content while maintaining original meaning. Features multiple paraphrasing modes, real-time suggestions, and supports various writing styles for academic, professional, and creative content.",
      name: "Paraphraser",
      designation: "AI-Powered Text Rewriting Tool",
      src: "https://i.ibb.co/9922mgGr/Dashboard.png",
      link: "https://paraphraser.co/",
    },
    {
      quote:
        "A real-time weather forecasting application powered by OpenWeather API. Provides current conditions, 7-day forecasts, hourly predictions, and location-based weather alerts with beautiful, intuitive visualizations.",
      name: "Weather App",
      designation: "Real-time Weather Forecasting App",
      src: "https://i.ibb.co/FkHnjjVs/Weather.png",
      link: "https://mirhussainjan.github.io/",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
