import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="sections relative px-8 pt-8 pb-16">
      <div className="overflow-hidden absolute -z-1 top-[-53px] left-0 w-full h-[calc(100%+53px)]">
        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="var(--color-secondary)"
            d="M0,50 Q720 -30,1440 50 L1440,420 L0,420 L0,50"
            className="md:hidden"
          />
          <path
            fill="var(--color-secondary)"
            d="M0,100 Q720 -100, 1440 100 L1440,420 L0,420 L0,100"
            className="hidden md:block"
          />
        </svg>
      </div>
      <div className="w-[min(100%,915px)] mx-auto text-center">
        <p className="mb-4 text-accent text-xl lg:text-2xl">
          Let's build something meaningful together!
        </p>
        <h2 className="mb-4 text-4xl lg:text-5xl text-white">Get In Touch</h2>
        <p className="max-w-[764px] mx-auto mb-12 text-dark-gray">
          Whether you're looking for a passionate full-stack developer, want to
          collaborate on a creative project, or just want to say hi — feel free
          to drop me a message. I'm always open to new opportunities and
          meaningful conversations.
        </p>
        <Link
          href="mailto:thanawatpanpinij@gmail.com"
          className="flex gap-2 items-center w-fit mx-auto px-8 py-4 text-white text-shadow-[1px_1px_1px_rgba(6,17,26,.3)] bg-accent rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
        >
          <HiOutlineMail size={24} />
          Let's Talk
        </Link>
      </div>
    </section>
  );
}
