import MainContent from "@/components/main-content";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import WhatIListen from "@/components/what-i-listen";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#212121] transition-colors duration-500 !p-0 !m-0">
      <div className="max-w-5xl mx-auto">
        <div id="Home" className="bg-white dark:bg-[#212121]">
          <MainContent/>
          <div id="Projects" className="mt-8"><Projects /></div>
          <div id="Experience" className="mt-8"><Experience /></div>
          <div id="WhatIListen" className="mt-8"><WhatIListen /></div>
          <div id="Contact" className="mt-8"><Footer /></div>
        </div>
      </div>
    </main>
  );
}
