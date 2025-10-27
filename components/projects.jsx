"use client"

import { BentoGrid } from "./ui/bento-grid"
import { ChevronRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Road Side Assistance",
      description: "Visual design, Branding",
      tags: ["Design", "Branding"],
      color: "from-blue-500 to-cyan-500",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack development",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-purple-500 to-pink-500",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Real-time messaging with AI",
      tags: ["Next.js", "AI", "WebSocket"],
      color: "from-orange-500 to-red-500",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "HRMS Dashboard",
      description: "Payroll & Attendance Automation",
      tags: ["React", "MongoDB", "Tailwind"],
      color: "from-green-500 to-emerald-400",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "CRM Suite",
      description: "Lead tracking & analytics",
      tags: ["Next.js", "PostgreSQL", "Chart.js"],
      color: "from-indigo-500 to-sky-400",
      span: "md:col-span-2 md:row-span-1",
    },
  ]

  return (
    <section className="px-6 py-14 md:py-20 border-t border-gray-200 dark:[border-gray-700] bg-white dark:bg-[#212121]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Projects</h2>
          <button className="flex items-center gap-2 text-black dark:text-white font-medium hover:gap-3 transition-all">
            View All <ChevronRight size={20} />
          </button>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] ${project.span}`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between group-hover:text-white transition-all">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white group-hover:text-white transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-100 transition-colors text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full group-hover:bg-white group-hover:bg-opacity-20 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <ExternalLink className="text-white" size={20} />
              </div>
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
