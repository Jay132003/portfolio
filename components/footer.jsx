"use client"

import { Button } from "./ui/button"
import { useState } from "react"

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("panchalj481@gmail.com")
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <footer className="w-full">
        {/* Main Footer Container with Border */}
        <div className="bg-white dark:bg-[#212121]">

          {/* Let's Work Together Section */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-[#FFFFFF] mb-4">The Future Needs Your Vision.</h2>
            <p className=" text-1xl sm:text-lg text-gray-600 dark:text-[#C0C0C0] mb-8">And I’ll make sure it looks and feels extraordinary.</p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
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
                <span>+</span>
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

          {/* Social Section */}
          <div className="mb-8 rounded-2xl border border-gray-200 dark:border-[#2C2C2C] bg-[#F7F7F7] dark:bg-[#2C2C2C] px-8 py-8">
            <div
              className="
                flex flex-col sm:flex-row
                items-center sm:items-center
                justify-center sm:justify-between
                gap-4 sm:gap-0
              "
              >
              {/* Follow Me text */}
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#CCCCCC] dark:bg-[#616161]" />
                <span className="text-base sm:text-lg text-[#666666] dark:text-[#C0C0C0]">
                  Follow Me
                </span>
            </div>

              {/* Social Icons */}
              <div className="flex gap-2 sm:gap-4">
                {/* X/Twitter */}
                <a
                  href="https://x.com/panchalj44?t=7vNfXrIqToVXle7DaVHHSQ&s=08"
                  className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 dark:bg-[#212121] 
                  dark:border-[#212121] 
                  dark:text-white 
                  border-gray-300 
                  text-gray-900 transition-all 
                  hover:border-gray-900 
                  hover:bg-gray-900 
                  dark:hover:bg-gray-300 
                  dark:hover:border-gray-300 
                  hover:text-white 
                  dark:hover:text-[#212121]"
                >
                  <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.308l7.725-8.835L.424 2.25h6.679l4.882 6.268L17.75 2.25zM16.962 20.495h1.832L7.04 3.977H5.074L16.962 20.495z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/offx.jayyy/"
                  className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 dark:bg-[#212121] 
                  dark:border-[#212121] 
                  dark:text-white 
                  border-gray-300 
                  text-gray-900 transition-all 
                  hover:border-gray-900 
                  hover:bg-gray-900 
                  dark:hover:bg-gray-300 
                  dark:hover:border-gray-300 
                  hover:text-white 
                  dark:hover:text-[#212121]"
                >
                  <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/panchal-jay-461630252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 
                  dark:bg-[#212121] 
                  dark:border-[#212121] 
                  dark:text-white 
                  border-gray-300 
                  text-gray-900 transition-all 
                  hover:border-gray-900 
                  hover:bg-gray-900 
                  dark:hover:bg-gray-300 
                  dark:hover:border-gray-300 
                  hover:text-white 
                  dark:hover:text-[#212121]"
                >
                  <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="rounded-2xl border border-gray-200 dark:border-[#2C2C2C] bg-[#F7F7F7] dark:bg-[#2C2C2C] px-8 py-12 text-center">
            <p className="dark:text-white text-gray-600">Created with{" "}
            <a href="https://khushalz.vercel.app/" className="hover:text-gray-900 dark:hover:text-gray-300">Khushal Khandelwal</a>
            {" "}😎</p>
            <p className="mt-3 text-gray-600 dark:text-white">
            Inspired by{" "}
              <a href="https://mauliktanna.com/" className="hover:text-gray-900 dark:hover:text-gray-300">
              Maulik Tanna
              </a>{" "}❤️
            </p>
          </div>
        </div>
    </footer>
  )
}