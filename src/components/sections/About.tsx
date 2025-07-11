import Image from "next/image";
// import Link from "next/link";
// import { FaRegAddressBook } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="sections">
      <section className="flex gap-8 items-center mb-16">
        <h2 className="text-[1.75rem] lg:text-[2rem] text-gray whitespace-nowrap">
          <span className="text-accent">About</span> Me
        </h2>
        <hr className="flex-grow border border-secondary h-[1px]" />
      </section>
      <section className="md:flex md:gap-8">
        <div className="md:w-[50%]">
          <div className="grid gap-4 mb-16 lg:mb-8 text-dark-gray">
            <p>
              Hi! My name is{" "}
              <span className="text-accent">Thanawat Panpinij</span> — a
              developer with a{" "}
              <span className="text-accent">creative background</span> in
              choreography and design. This background has shaped my mindset:
              “True creativity starts with concept”, and it continues to guide
              me on my new journey as a developer.
            </p>
            <p>
              Previously, I worked as{" "}
              <span className="text-accent">a website administrator</span> at a
              publishing company, where I{" "}
              <span className="text-accent">
                redesigned the site, optimized its SEO, and gained hands-on
                experience with semantic HTML and CSS
              </span>
              . Later, I joined the Junior Software Developer program by GenKX
              (Generation Thailand x KMUTT) and{" "}
              <span className="text-accent">
                co-developed CalNoy, a clean food e-commerce platform using the
                MERN stack in an Agile team setting
              </span>
              . I contributed to both Frontend and Backend, including Git
              workflow support, API design, and deployment.
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
        <div className="overflow-hidden md:w-[50%] max-w-[300px] md:max-w-fit h-[calc(100%-10px)] mx-auto md:mr-[10px] rounded-4xl shadow-[10px_10px_var(--color-accent)]">
          <Image
            width={1200}
            height={1200}
            src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751367931/me_hdujo9.webp"
            alt="Headshot"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nAE0AMv/AM7OzsjFx5+ameHh4
QDw7/R5pL6rvs34+PgAqKqtACdjAEt90dHRAFxXVQAhQAATPYSEg1+CHAiusoLvAAAAAElFTkSuQmCC"
            className="w-full mx-auto object-cover"
          />
        </div>
      </section>
    </section>
  );
}
