"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

export default function MainContent() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="Home"
      className="
        flex flex-col items-start justify-start
        gap-6 sm:gap-8
        px-4 sm:px-8 md:px-12 
        py-8 sm:py-10 md:py-16
        max-w-[850px] mx-auto
      "
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60
          mb-4 sm:mb-6
          shadow-xl rounded-2xl overflow-hidden
          group self-center sm:self-start
        "
      >
        <img
          src="/Jay_Icon.jpeg"
          alt="Jay Panchal"
          className="
            w-full h-full object-cover rounded-2xl
            transform transition-transform duration-700 ease-in-out
            group-hover:scale-105
          "
        />
      </motion.div>

      {/* Text Content */}
      <div className="text-left w-full">
        <motion.h1
          custom={0}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="
            text-3xl sm:text-4xl md:text-5xl font-bold
            text-gray-900 dark:text-white
            mb-3 sm:mb-4
          "
        >
          Hi, I'm Jay Panchal 👋
        </motion.h1>

        <motion.p
          custom={1}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="
            text-sm sm:text-base md:text-lg
            text-gray-600 dark:text-[#C0C0C0]
            mb-6 leading-relaxed max-w-2xl
          "
        >
          Engineering taught me how to think, but curiosity taught me how to grow.
          <br />
          I love building things — not just products, but skills, ideas, and
          possibilities.
          <br />
          Every day, I aim to move one step closer to becoming the person I’ve
          always wanted to be.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          custom={2}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="flex justify-start"
        >
          <a
            href="/Jay's-Resume.pdf"
            download
            className="
              relative inline-flex items-center justify-center gap-2
              px-6 py-2.5 rounded-lg
              border border-gray-400/40 dark:border-gray-600/60
              bg-transparent
              text-gray-900 dark:text-white
              font-semibold tracking-wide
              shadow-[0_2px_6px_rgba(0,0,0,0.08)]
              hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
              hover:bg-gray-900/5 dark:hover:bg-white/10
              backdrop-blur-sm
              transition-all duration-300 ease-out
              overflow-hidden cursor-pointer active:scale-[0.97]
            "
            onClick={(e) => {
              const circle = document.createElement("span");
              const diameter = Math.max(
                e.currentTarget.clientWidth,
                e.currentTarget.clientHeight
              );
              const radius = diameter / 2;

              circle.style.width = circle.style.height = `${diameter}px`;
              circle.style.left = `${
                e.clientX - e.currentTarget.offsetLeft - radius
              }px`;
              circle.style.top = `${
                e.clientY - e.currentTarget.offsetTop - radius
              }px`;
              circle.classList.add("ripple");

              const ripple = e.currentTarget.getElementsByClassName("ripple")[0];
              if (ripple) ripple.remove();

              e.currentTarget.appendChild(circle);
            }}
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
