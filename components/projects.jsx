"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "Road Side Assistance",
      role: "Full-Stack Platform",
      description:
        "A roadside assistance platform for real-time service tracking, agent dispatch, and customer feedback management. Integrated with map-based live tracking and WhatsApp notifications.",
      tech: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
      ],
      timeline: "September 2025 – Present",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      role: "Frontend Developer",
      description:
        "Developed a scalable e-commerce solution supporting multiple vendors, product categories, and dynamic pricing. Added advanced filters, cart management, and Razorpay payment integration.",
      tech: [
        { name: "Next.js", icon: "▲" },
        { name: "TailwindCSS", icon: "🎨" },
        { name: "Firebase", icon: "🔥" },
      ],
      timeline: "June 2025 – August 2025",
      link: "#",
    },
    {
      title: "AI Chat Application",
      role: "Product Engineer",
      description:
        "Built a chat interface using OpenAI APIs for real-time conversational AI with context memory, markdown rendering, and theme toggling.",
      tech: [
        { name: "Next.js", icon: "▲" },
        { name: "OpenAI", icon: "🤖" },
        { name: "WebSocket", icon: "🔗" },
      ],
      timeline: "April 2025 – June 2025",
      link: "#",
    },
    {
      title: "HRMS Dashboard",
      role: "Automation Developer",
      description:
        "End-to-end HRMS suite including payroll automation, attendance tracking, leave management, and employee performance analytics.",
      tech: [
        { name: "React", icon: "⚛️" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
      ],
      timeline: "January 2025 – April 2025",
      link: "#",
    },
  ];

  return (
    <section
      id="Projects"
      className="w-full bg-transparent dark:bg-[#212121] transition-colors duration-300"
    >
      {/* ✦ Divider */}
      <div className="relative flex items-center justify-center mt-8 mb-10">
        <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-700/40 to-transparent dark:via-amber-500/40 animate-pulse" />
        <div className="relative z-10 flex items-center gap-2 px-8 py-2 bg-gradient-to-r from-stone-50 via-stone-100 to-stone-50 dark:from-[#1b1a18] dark:via-[#242320] dark:to-[#1b1a18] rounded-full border border-stone-200/60 dark:border-stone-600/40 shadow-[0_0_15px_rgba(99,85,50,0.15)]">
          <span className="text-amber-600 dark:text-amber-400 text-[18px]">✦</span>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-600 via-stone-600 to-rose-400 dark:from-amber-400 dark:via-stone-400 dark:to-rose-300 bg-clip-text text-transparent">
            Projects
          </span>
          <span className="text-amber-600 dark:text-amber-400 text-[18px]">✦</span>
        </div>
      </div>

      {/* ✨ Project Cards */}
      <div className="w-full px-4 sm:px-[clamp(1rem,4vw,3rem)] py-6 md:py-10">
        <div className="max-w-[950px] mx-auto">
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-amber-50">
              Featured Work
            </h2>
            <button className="flex items-center gap-2 text-stone-700 dark:text-amber-100 font-medium hover:gap-3 transition-all">
              View All <ExternalLink size={20} />
            </button>
          </div>

          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.04 }}
              viewport={{ once: true }}
              className="relative group mb-5"
            >
              {/* ✨ Hover Glow (Amber–Stone Blend) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out blur-[18px] rounded-xl bg-gradient-to-r from-amber-700/10 via-stone-500/15 to-rose-400/10 dark:from-amber-400/15 dark:via-stone-400/20 dark:to-rose-300/15 pointer-events-none" />

              <motion.div
                whileHover={{
                  scale: 1.015,
                  y: -3,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="
                  relative z-10 p-5 md:p-6
                  rounded-xl border border-stone-200 dark:border-stone-700
                  bg-white dark:bg-[#22211e]
                  shadow-[0_4px_15px_rgba(80,70,50,0.08)]
                  hover:shadow-[0_8px_25px_rgba(99,85,50,0.2)]
                  transition-all duration-300 ease-out
                  will-change-transform
                "
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg md:text-xl font-semibold text-stone-900 dark:text-amber-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-150">
                        {proj.title}
                      </h3>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === i ? null : i)
                        }
                        className="text-stone-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-transform duration-150 active:scale-90"
                      >
                        {openIndex === i ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>

                    <p className="text-sm text-stone-600 dark:text-amber-300 mt-1">
                      {proj.role}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      {proj.tech.map((t) => (
                        <div
                          key={t.name}
                          className="flex items-center gap-1.5 text-sm text-stone-700 dark:text-amber-200"
                        >
                          <span>{t.icon}</span>
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-4 mt-3 md:mt-0">
                    <p className="text-stone-500 dark:text-amber-400 text-sm md:text-base whitespace-nowrap">
                      {proj.timeline}
                    </p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-stone-300 dark:border-stone-600 rounded-md text-sm text-stone-800 dark:text-amber-100 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 transition-colors duration-150"
                    >
                      View <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Expand Section */}
                <motion.div
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-sm text-stone-700 dark:text-amber-200 leading-relaxed border-t border-stone-200 dark:border-stone-700 pt-3">
                    {proj.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
