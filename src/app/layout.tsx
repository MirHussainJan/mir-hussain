import type { Metadata } from "next";
import "./globals.css";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Mir Hussain",
  description: "Full Stack Developer specializing in building modern web applications with clean design and robust functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingDockDemo />
      </body>
    </html>
  );
}
