"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

export default function MainContent() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="Home"
      className="
        flex flex-col items-center justify-start
        w-full !p-0 !m-0
        bg-white dark:bg-[#212121]
      "
    >
      {/* 🌄 Banner */}
      <motion.div
        custom={0}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="
          relative w-full
          max-w-[1100px]
          mx-auto overflow-hidden
          rounded-none
          px-0
        "
      >
        <img
          src="/Jiraya.png"
          alt="Banner"
          className="
            w-full h-[250px] sm:h-[270px] md:h-[300px]
            object-cover object-center
            [mask-image:linear-gradient(to_bottom,transparent_5%,black_20%,black_80%,transparent_95%)]
            transition-transform duration-700 ease-in-out
            hover:scale-[1.02]
          "
        />

        {/* 🧠 Quote */}
        <p
          className="
            absolute inset-0 flex items-center justify-center text-center
            px-4 sm:px-6 md:px-8
            italic font-medium
            text-[12px] sm:text-[14px]
            leading-relaxed
            text-gray-900 dark:text-gray-100
            [text-shadow:_0_2px_6px_rgba(255,255,255,0.9),_0_0_12px_rgba(255,255,255,0.8)]
            dark:[text-shadow:_0_2px_6px_rgba(0,0,0,0.8),_0_0_10px_rgba(0,0,0,0.7)]
            transition-all duration-500 ease-in-out
          "
        >
          Once you've been hurt you learn to hate. But if you hurt another you become hated.
          <br />
          But it's because one understands such pain, the generosity toward others becomes second nature.
          <br />
          It's a process called Growing up.
          <br />~ Jiraya
        </p>
      </motion.div>

      {/* 👤 Profile + Text Group */}
      <div
        className="
          relative flex flex-col items-start
          w-full max-w-[1100px]
          -mt-[60px] sm:-mt-[70px] md:-mt-[80px]
          px-[clamp(1rem,3vw,2rem)]
        "
      >
        {/* Profile Image */}
        <motion.div
          custom={1}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="
            relative
            w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px]
            rounded-full overflow-hidden
            border-[5px] border-white dark:border-[#2d2d2d]
            shadow-[0_8px_25px_rgba(0,0,0,0.15)]
            z-10 mb-6
          "
        >
          <img
            src="/Jay_Icon.jpeg"
            alt="Jay Panchal"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        {/* ✍️ Text Below Image */}
        <div>
          <motion.h1
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="
              text-3xl sm:text-4xl md:text-5xl font-bold
              text-gray-900 dark:text-white
              mb-4
            "
          >
            Hi, I'm Jay Panchal 👋
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="
              text-[15px] sm:text-[16px] md:text-[17px]
              text-gray-700 dark:text-[#C0C0C0]
              leading-relaxed max-w-[700px]
            "
          >
            Engineering taught me how to think, but curiosity taught me how to grow.
            <br />
            I love building things — not just products, but skills, ideas, and possibilities.
            <br />
            Every day, I aim to move one step closer to becoming the person I’ve always wanted to be.
          </motion.p>

          {/* 📄 Resume Button */}
          <motion.div
            custom={4}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex justify-start mt-8"
          >
            <a
              href="/Jay's-Resume.pdf"
              download
              className="
                inline-flex items-center gap-2 px-6 py-2.5
                border border-gray-400/50 dark:border-gray-600/60
                rounded-lg font-medium text-gray-900 dark:text-white
                hover:bg-gray-900/5 dark:hover:bg-white/10
                transition-all duration-300 ease-out
              "
            >
              <ArrowDownToLine className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
