"use client"
import React, { useState } from 'react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandYoutube, IconCopy, IconMail, IconCheck, IconDownload } from '@tabler/icons-react';

const Header = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <header className="w-full self-start bg-white border border-gray-200 fixed top-0 z-50">
      <div className="mx-auto px-4 md:px-0 max-w-[1440px]">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">
              Mir Hussain
            </h1>
          </div>

          {/* Right Section - All Actions */}
          <div className="flex items-center gap-3">
            
            {/* Email with Copy (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border">
              <IconMail className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">mirhussainjan10387@gmail.com</span>
              <button
                onClick={() => copyToClipboard('mirhussainjan10387@gmail.com')}
                className={`p-2 rounded-full transition-colors ${
                  copySuccess 
                    ? 'bg-green-100 text-green-600' 
                    : 'hover:bg-gray-200 text-gray-500'
                }`}
                title="Copy email"
              >
                {copySuccess ? <IconCheck className="w-3 h-3" /> : <IconCopy className="w-3 h-3" />}
              </button>
            </div>

            {/* CV Download Button */}
            <a 
              href="https://drive.usercontent.google.com/u/0/uc?id=1Em897GiZEqo7WLER4vB6T66BfXZ77hq3&export=download"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              <IconDownload className="w-4 h-4" />
              CV
            </a>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <a 
                href="https://drive.usercontent.google.com/u/0/uc?id=1Em897GiZEqo7WLER4vB6T66BfXZ77hq3&export=download"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                title="Download CV"
              >
                <IconDownload className="w-4 h-4" />
              </a>

              <a
                href="mailto:mirhussainjan10387@gmail.com"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                title="Send Email"
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/mir-hussain-8003b527a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
                title="LinkedIn"
              >
                <IconBrandLinkedin className="w-4 h-4" />
              </a>
              
              <a
                href="https://github.com/MirHussainJan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400 transition-colors"
                title="GitHub"
              >
                <IconBrandGithub className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.youtube.com/@codex05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                title="YouTube"
              >
                <IconBrandYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;