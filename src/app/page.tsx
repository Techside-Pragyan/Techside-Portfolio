import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Hero />
      <About />
      <Skills />
      <TechStack />
    </main>
  );
}
