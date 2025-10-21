import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "Morva labs",
      description: "Visual design, Branding",
      icon: "M",
      bgColor: "bg-gradient-to-br from-slate-900 to-slate-700",
    },
    {
      id: 2,
      name: "Rectangle",
      description: "Product design, Icon design",
      icon: "□",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-400",
    },
    {
      id: 3,
      name: "Simply",
      description: "Landing page, Illustration design",
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-300",
    },
  ]

  return (
    <div className="bg-[#F7F7F7] dark:bg-[#2C2C2C] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-[#2c2c2c]">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <h2 className="text-2xl font-bold text-[#666666] dark:text-[#C0C0C0]">Projects</h2>
            </div>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:bg-gray-50 font-semibold bg-transparent"
            >
              View All
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          {/* Projects grid */}
          <div className="space-y-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="p-6 border-2 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Project icon */}
                    <div
                      className={`w-16 h-16 rounded-full ${project.bgColor} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}
                    >
                      {project.icon}
                    </div>

                    {/* Project info */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>

                  {/* Arrow icon */}
                  <ArrowRight
                    size={24}
                    className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
  )
}
