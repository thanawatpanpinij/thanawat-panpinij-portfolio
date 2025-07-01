import Image from "next/image";
import Link from "next/link";
import { FaRegAddressBook } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="sections">
      <section className="flex gap-8 items-center mb-16">
        <h2 className="text-[2rem] text-gray">
          <span className="text-accent">About</span> Me
        </h2>
        <hr className="border border-secondary w-[min(100%,731px)] h-[1px]" />
      </section>
      <section className="flex gap-8">
        <div className="w-[50%]">
          <div className="grid gap-4 mb-8 text-dark-gray">
            <p>
              Hi! My name is Thanawat Panpinij — a developer with a creative
              background in choreography and design. This background has shaped
              my mindset: “True creativity starts with concept”, and it
              continues to guide me on my new journey as a developer.
            </p>
            <p>
              Previously, I worked as a website administrator at a publishing
              company, where I redesigned the site, optimized its SEO, and
              gained hands-on experience with semantic HTML and CSS. Later, I
              joined the Junior Software Developer program by GenKX (Generation
              Thailand x KMUTT) and co-developed CalNoy, a clean food e-commerce
              platform using the MERN stack in an Agile team setting. I
              contributed to both Frontend and Backend, including Git workflow
              support, API design, and deployment.
            </p>
            <p>
              This journey confirmed how much I enjoy solving real-world
              problems through code — and I'm ready to grow further as a
              developer who builds with care, clarity, and collaboration.
            </p>
          </div>
          {/* <Link
            href="/about"
            className="cursor-pointer flex gap-2 items-center w-fit px-8 py-4 text-accent border-3 border-accent rounded-xl transition-all duration-200 hover:-translate-y-1 hover:text-white hover:bg-accent hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
          >
            <FaRegAddressBook size={24} />
            How I Got Here
          </Link> */}
        </div>
        <div className="overflow-hidden w-[50%] mr-[10px] h-[calc(100%-10px)] rounded-4xl shadow-[10px_10px_var(--color-accent)]">
          <Image
            width={1200}
            height={1200}
            src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751367931/me_hdujo9.webp"
            alt="Headshot"
            className="w-full object-cover"
          />
        </div>
      </section>
    </section>
  );
}
