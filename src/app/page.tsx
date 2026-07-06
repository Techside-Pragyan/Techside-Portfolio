import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import GithubActivity from "@/components/sections/GithubActivity";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Timeline from "@/components/sections/Timeline";

import BackendStatus from "@/components/ui/BackendStatus";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Hero />
      <Stats />
      <About />
      <Skills />
      <GithubActivity />
      <Timeline />
      <Projects />
      <Contact />
      <BackendStatus />
    </main>
  );
}
