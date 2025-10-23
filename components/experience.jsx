"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Experience() {
  const experience = [
    {
      id: 1,
      name: "Road Side Assistance",
      description: "Visual design, Branding",
      icon: "M",
      bgColor: "bg-gradient-to-br from-slate-900 to-slate-700",
    },
    {
      id: 2,
      name: "Insight Zone",
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
    <section
      className="
        bg-[#F7F7F7] dark:bg-[#2C2C2C]
        rounded-3xl
        px-5 sm:px-8 md:px-12
        py-8 sm:py-10 md:py-12
        border border-gray-200 dark:border-[#2C2C2C]
      "
    >
      {/* Header */}
      <div
        className="
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          mb-6 sm:mb-8 gap-4
        "
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#555555] dark:text-[#C0C0C0] tracking-tight">
            Experience
          </h2>
        </div>

        <div className="w-full md:w-auto md:ml-auto">
          <Button
            variant="outline"
            className="
              border border-gray-300
              hover:bg-gray-100 dark:hover:bg-gray-800
              font-medium md:font-semibold
              bg-transparent
              text-sm md:text-base
              w-full md:w-auto
              h-9 sm:h-10 md:h-11
              px-4 sm:px-6
              rounded-xl
            "
          >
            View All
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Experience cards */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {experience.map((exp) => (
          <Card
            key={exp.id}
            className="
              bg-white dark:bg-[#373737]
              px-4 py-4 sm:px-6 sm:py-5
              border border-gray-100 dark:border-[#2C2C2C]
              rounded-2xl
              shadow-sm hover:shadow-md
              transition-all duration-200
              hover:-translate-y-[2px]
              active:scale-[0.99]
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Icon */}
                <div
                  className={`
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-full ${exp.bgColor}
                    flex items-center justify-center
                    text-white text-lg sm:text-xl font-bold flex-shrink-0
                  `}
                >
                  {exp.icon}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#2C2C2C] dark:text-white mb-[2px]">
                    {exp.name}
                  </h3>
                  <p className="text-sm text-[#555555] dark:text-[#C0C0C0] leading-snug">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={20}
                className="text-gray-400 group-hover:text-gray-600 transition-colors"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
