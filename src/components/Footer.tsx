"use client";
import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full p-4 md:px-0 bg-white border-t border-gray-200 text-sm gap-2">
      <div className="max-w-[1440px] flex flex-col md:flex-row items-center justify-between mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <span>Made with</span>
          <span className="text-gradient text-xl">❤️</span>
          <span>by Mir Hussain</span>
        </div>
        {/* Right */}
        <div className="flex items-center gap-1">
          <span>&copy; 2025</span>
          <span>All rights reserved</span>
          <span>|</span>
          <span>Islamabad, Pakistan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
