import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
// import Aside from "@/components/HomePage/Aside";

export default function Home() {
  return (
    <main className="grid gap-16">
      <div className="grid gap-16 max-w-[calc(915px+4rem)] mx-auto px-8 pt-14">
        <Hero />
        <About />
        <Project />
      </div>
      <Contact />
      {/* <Aside /> */}
    </main>
  );
}
