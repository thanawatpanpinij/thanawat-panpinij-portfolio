import Hero from "@/components/HomePage/Hero";
import About from "@/components/HomePage/About";
import ProjectSection from "@/components/HomePage/ProjectSection";
import Contact from "@/components/HomePage/Contact";
import Aside from "@/components/HomePage/Aside";

export default function Home() {
  return (
    <main className="grid gap-16">
      <div className="grid gap-16 max-w-[915px] mx-auto pt-14">
        <Hero />
        <About />
        <ProjectSection />
      </div>
      <Contact />
      {/* <Aside /> */}
    </main>
  );
}
