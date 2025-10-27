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
import { Globe } from "@/components/ui/globe";

export default function Home() {
  return (
    <main className=" dark:bg-[#212121] min-h-screen p-6">
      <Navigation/>
        <div className="max-w-5xl mx-auto pt-8">
          <div id="Home" className="bg-white dark:bg-[#212121] p-8 md:p-4 mb-8">
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