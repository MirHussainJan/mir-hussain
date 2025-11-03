"use client";
import "./globals.css";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import Footer from "@/components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only hide loader if pathname actually changed
    if (previousPathnameRef.current !== pathname) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLoading(false);
          previousPathnameRef.current = pathname;
        });
      });
    }
  }, [pathname]);

  useEffect(() => {
    document.title = "Mir Hussain";

    // Intercept all link clicks to show loader immediately
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (
        link &&
        link.href &&
        !link.target &&
        link.href.startsWith(window.location.origin)
      ) {
        const linkUrl = new URL(link.href);
        const currentPath = window.location.pathname;

        // Only show loader if navigating to a different route
        if (linkUrl.pathname !== currentPath) {
          setLoading(true);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  const handleDockLinkClick = (href: string) => {
    // Normalize href to pathname
    const linkUrl = new URL(href, window.location.origin);
    const currentPath = window.location.pathname;

    // Only show loader if navigating to a different route
    if (linkUrl.pathname !== currentPath) {
      setLoading(true);
    }
  };

  return (
    <html lang="en">
      <Head>
        <title>Mir Hussain</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in building modern web applications with clean design and robust functionality."
        />
      </Head>
      <body>
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          color="23, 23, 23"
          outerAlpha={0.25}
          innerScale={0.85}
          outerScale={3.5}
          showSystemCursor={false}
          outerStyle={{
            border: "1.5px solid #171717",
            background: "rgba(23,23,23,0.08)",
            boxShadow: "0 0 0 2px #17171722",
            mixBlendMode: "difference",
          }}
          innerStyle={{
            background: "#171717",
            border: "1.5px solid #fff",
            boxShadow: "0 0 2px #171717, 0 0 1px #fff",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".cursor-pointer",
          ]}
        />
        {loading && <Loader />}
        {children}
        <Footer />
        <FloatingDockDemo onLinkClick={handleDockLinkClick} />
      </body>
    </html>
  );
}