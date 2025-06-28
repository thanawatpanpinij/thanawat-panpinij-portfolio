import Link from "next/link";
import { SlEye } from "react-icons/sl";

export default function Hero() {
  return (
    <section className="text-center">
      <p className="mb-4 text-white text-[2rem]">Hi, my name is</p>
      <h1 className="mb-8 text-accent text-8xl">Thanawat Panpinij</h1>
      <p className="max-w-[764px] mx-auto mb-12 text-dark-gray text-2xl">
        I'm passionate about crafting experiences that are engaging, intuitive,
        and user-centric.
      </p>
      <Link
        href="#"
        className="flex gap-2 items-center w-fit mx-auto px-8 py-4 text-white bg-accent rounded-xl transition-shadow duration-200 hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
      >
        <SlEye size={24} />
        Resume
      </Link>
    </section>
  );
}
