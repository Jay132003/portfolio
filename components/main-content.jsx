import React from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Copy } from "lucide-react"

export default function MainContent() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                I&apos;m Jay Panchal
              </h1>
              <p className="text-lg text-gray-600 dark:text-[#C0C0C0] mb-8 leading-relaxed">
                With great power comes great electricity bills!
              </p>

              {/* Action buttons */}
              <div className="flex gap-4">
                <Button
                  className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-6 rounded-xl font-semibold flex items-center gap-2 cursor-pointer"
                  size="lg"
                >
                  <Plus size={20} />
                  Hire Me
                </Button>
                <Button
                  effect="ringHover"
                  variant="outline"
                  className="px-6 py-6 rounded-xl font-semibold cursor-pointer"
                  size="lg"
                >
                  <Copy size={20} />
                  Copy Email
                </Button>
              </div>
            </div>

            {/* Right side - Avatar */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full"></div>
                <img
                  src="/Jay_Icon.jpeg"
                  alt="Jay Panchal"
                  className="relative w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
  )
}
