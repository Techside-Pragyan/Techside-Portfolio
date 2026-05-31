import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Hero />
      <About />
    </main>
  );
}
