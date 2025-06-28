import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="grid gap-16">
      <div className="grid gap-16 max-w-[915px] mx-auto pt-14">
        <Hero />
        <About />
        <Works />
      </div>
      <Contact />
    </main>
  );
}
