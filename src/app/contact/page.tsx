"use client";
import { GlobeDemo } from "@/components/GlobeDemo";
import Header from "@/components/Header";
import {
  IconSend,
} from "@tabler/icons-react";
import { useState, useMemo } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",  
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Memoize the Globe to prevent re-rendering when form state changes
  const memoizedGlobe = useMemo(() => <GlobeDemo />, []);

  return (
    <>
      <Header />
      <main className="mt-24 flex flex-col justify-center px-4 lg:px-0 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl text-gradient tracking-wide md:text-6xl font-bold mb-4">
            Ping me anywhere
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Have a project in mind or want to collaborate? Connect with me from anywhere in the world. Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Contact Information */}
          <div>
            {memoizedGlobe}
          </div>
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gradient mb-6">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full font-extralight px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full font-extralight px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full font-extralight px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full font-extralight px-4 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full text-white bg-neutral-900 border border-neutral-900 py-4 px-6 rounded-full font-semibold flex hover:bg-neutral-950 hover:text-white items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative"
              >
                {status === "sending" ? (
                  <>
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    ✓ Message Sent!
                  </>
                ) : (
                  <>
                    <IconSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
