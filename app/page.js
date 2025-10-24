import Image from "next/image";
import { LandingPage } from "@/components/navigation";
import Header from "@/components/header";
import { Navigation } from "@/components/navigation";
import MainContent from "@/components/main-content";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import { Dice1 } from "lucide-react";
import WhatIListen from "@/components/what-i-listen";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F0F0] dark:bg-[#161616] p-6">
      <Navigation/>
        <div className="max-w-4xl mx-auto pt-24">
          <div id="Home" className="bg-white dark:bg-[#212121] rounded-2xl p-8 md:p-4 shadow-sm border border-gray-200 dark:border-[#2c2c2c] mb-8">
            <Header/>
            <MainContent/>
            <div id="Projects" className="mt-8"><Projects/></div>
            <div id="Experience" className="mt-8"><Experience/></div>
            <div id="WhatIListen" className="mt-8"><WhatIListen/></div>
            <div id="Contact" className="mt-8"><Footer/></div>
          </div>
        </div>
      </main>
  );
}