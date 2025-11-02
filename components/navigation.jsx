"use client";

import React from "react";
import {
  IconHome,
  IconBriefcase,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { motion } from "framer-motion";

export function Navigation() {
  const navItems = [
    { title: "Home", icon: <IconHome />, href: "#Home" },
    { title: "Projects", icon: <IconBriefcase />, href: "#Projects" },
    { title: "GitHub", icon: <IconBrandGithub />, href: "https://github.com" },
    { title: "LinkedIn", icon: <IconBrandLinkedin />, href: "https://linkedin.com" },
    { title: "X", icon: <IconBrandX />, href: "https://x.com" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed bottom-8
        left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:right-auto
        z-50 w-auto md:w-auto
      "
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="
          flex items-center justify-center gap-3
          px-6 py-2.5
          rounded-2xl
          border border-gray-400/40 dark:border-gray-600/60
          bg-white/85 dark:bg-neutral-900/85
          shadow-[0_2px_8px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          transition-all duration-300 ease-out
        "
      >
        {navItems.slice(0, 2).map((item, i) => (
          <NavIcon key={i} {...item} />
        ))}

        <Divider />

        {navItems.slice(2).map((item, i) => (
          <NavIcon key={i} {...item} />
        ))}

        <Divider />

        <AnimatedThemeToggler/>
      </motion.div>
    </motion.nav>
  );
}

function NavIcon({ href, title, icon }) {
  return (
    <motion.a
      href={href}
      title={title}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 250, damping: 14 }}
      className="
        group relative flex items-center justify-center
        w-11 h-11 rounded-xl
        text-gray-700 dark:text-gray-300
        transition-all duration-300 ease-out
        hover:text-blue-600 dark:hover:text-blue-400
        hover:bg-gray-100/90 dark:hover:bg-neutral-800/90
        hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)]
        dark:hover:shadow-[0_4px_14px_rgba(255,255,255,0.05)]
        cursor-pointer
      "
    >
      {icon}
    </motion.a>
  );
}

function Divider() {
  return <div className="h-6 w-px bg-gray-300 dark:bg-neutral-700" />;
}
