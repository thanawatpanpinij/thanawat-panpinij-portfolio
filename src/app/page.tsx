import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="grid gap-16 px-8">
      <div className="grid gap-16 max-w-[915px] mx-auto pt-14 pb-16">
        <Hero />
        <About />
        <Works />
      </div>
      <Contact />
    </main>
  );
}
