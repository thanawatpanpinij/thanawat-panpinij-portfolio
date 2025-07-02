import { SlEye } from "react-icons/sl";

export default function Hero() {
  return (
    <section className="text-center">
      <p className="mb-4 text-white text-xl lg:text-[2rem]">Hi, my name is</p>
      <h1 className="mb-[min(1rem,2rem)] text-accent text-[min(3.5rem,6rem)] leading-16 lg:leading-none">
        Thanawat Panpinij
      </h1>
      <p className="max-w-[764px] mx-auto mb-12 text-dark-gray lg:text-2xl">
        I'm passionate about crafting experiences that are engaging, intuitive,
        and user-centric.
      </p>
      <a
        href="/thanawat-panpinij_resume.pdf"
        target="_blank"
        rel="noopener"
        className="flex gap-2 items-center w-fit mx-auto px-8 py-4 text-white text-shadow-[1px_1px_1px_rgba(6,17,26,.3)] bg-accent rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
      >
        <SlEye size={24} />
        <span>Resume</span>
      </a>
    </section>
  );
}
