import Hero from "@/components/HomePage/Hero";
import About from "@/components/HomePage/About";
import ProjectSection from "@/components/HomePage/ProjectSection";
import Contact from "@/components/HomePage/Contact";
import Aside from "@/components/HomePage/Aside";

export default function Home() {
  return (
    <main className="grid gap-16">
      <div className="grid gap-16 max-w-[calc(915px+4rem)] mx-auto px-8 pt-14">
        <Hero />
        <About />
        <ProjectSection />
      </div>
      <Contact />
      {/* <Aside /> */}
    </main>
  );
}
