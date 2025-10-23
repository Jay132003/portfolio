"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Copy } from "lucide-react"

export default function MainContent() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("panchalj481@gmail.com")
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

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
                  className="rounded-lg border-2
                     bg-[#141414]
                     dark:bg-[#383838]
                     border-gray-700 px-6 py-6
                     dark:border-[#383838]
                     hover:bg-gray-500
                     hover:border-gray-500
                     dark:hover:bg-gray-200
                     hover:text-white
                     text-white
                     dark:hover:text-gray-800
                      font-semibold flex items-center gap-2 cursor-pointer"
                  size="lg"
                >
                  <Plus size={20} />
                  Hire Me
                </Button>
                <Button
                onClick={handleCopyEmail}
                className="rounded-lg border-2 
                bg-[#FCFCFC]
                hover:bg-gray-300
                dark:hover:bg-gray-500
                dark:hover:border-gray-500
                border-gray-300 px-6 py-6 
                text-gray-900
                dark:hover:text-white
                 font-semibold flex items-center gap-2"
              >
                {isCopied ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {isCopied ? "Copied!" : "Copy Email"}
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
