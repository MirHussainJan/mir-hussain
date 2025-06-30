"use client"
import React, { useState } from 'react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandYoutube, IconCopy, IconFileText, IconMail, IconCheck } from '@tabler/icons-react';
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

// Original navbar components (unchanged)
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-40 mx-auto",
        scrolled ? "w-4/5" : "w-full",
        "transition-all duration-500",
        className
      )}
      style={{
        color: '#fff', // tailwind text-white
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible: scrolled },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        width: visible ? "80%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        backgroundColor: '#171717', // tailwind bg-neutral-900
        color: '#fff', // tailwind text-white
      }}
      className={cn(
        "relative z-[60] mx-auto w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 flex",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: "9999px", // Always fully rounded
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between bg-[#171717] text-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Startup</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

// Custom Header Implementation using the navbar structure
const Header = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Left Section - Email and Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Mobile: show only email icon button that opens mailto */}
          <a
            href="mailto:mirhussainjan10387@gmail.com"
            className="flex sm:hidden items-center justify-center rounded-full transition-all duration-300 w-8 h-8 cursor-pointer border border-neutral-600 hover:border-emerald-500 bg-neutral-900 text-white"
            title="Send Email"
          >
            <IconMail className="w-4 h-4" />
          </a>
          {/* Desktop: show email and CV */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="relative">
              <IconMail className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <span className="font-medium text-base text-white">mirhussainjan10387@gmail.com</span>
            <button
              onClick={() => copyToClipboard('mirhussainjan10387@gmail.com')}
              className={`group relative flex items-center justify-center transition-all duration-300 rounded-full w-10 h-10 cursor-pointer ${
                copySuccess 
                  ? 'bg-green-500 text-white border-green-500 shadow-green-500/25' 
                  : visible
                    ? 'text-white hover:text-neutral-900 bg-neutral-700 hover:bg-white border border-neutral-600 hover:border-white'
                    : 'text-neutral-900 hover:text-white bg-neutral-100 hover:bg-blue-500 border border-neutral-200 hover:border-blue-500'
              }`}
              title="Copy email"
            >
              {copySuccess ? (
                <IconCheck className="w-5 h-5 transition-all duration-300" />
              ) : (
                <IconCopy className="w-5 h-5 transition-all duration-300" />
              )}
            </button>
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-neutral-300 to-transparent transition-colors duration-300" />
          </div>
          {/* CV button always visible */}
          <button className={`flex items-center justify-center rounded-full transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 cursor-pointer ${
            visible 
              ? 'text-white hover:text-neutral-900 bg-neutral-700 hover:bg-emerald-500 border border-neutral-600 hover:border-emerald-500'
              : 'text-neutral-900 hover:text-white bg-neutral-100 hover:bg-emerald-500 border border-neutral-200 hover:border-emerald-500'
          }`}>
            <span className="text-sm">CV</span>
          </button>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex items-center gap-2 sm:gap-2">
          <a
            href="www.linkedin.com/in/mir-hussain-8003b527a"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center text-white border border-blue-600 hover:border-blue-700 rounded-full transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 bg-transparent"
            title="LinkedIn Profile"
          >
            <IconBrandLinkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" />
          </a>
          <a
            href="https://github.com/MirHussainJan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center text-white border border-slate-700 hover:border-slate-800 rounded-full transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 bg-transparent"
            title="GitHub Profile"
          >
            <IconBrandGithub className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" />
          </a>
          <a
            href="https://www.youtube.com/@codex05"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center text-white border border-red-500 hover:border-red-600 rounded-full transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 bg-transparent"
            title="YouTube Channel"
          >
            <IconBrandYoutube className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" />
          </a>
        </div>
      </NavBody>

    </Navbar>
  );
};

export default Header;