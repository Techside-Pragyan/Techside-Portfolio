import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import GithubActivity from "@/components/sections/GithubActivity";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <GithubActivity />
      <Projects />
      <Contact />
    </main>
  );
}
