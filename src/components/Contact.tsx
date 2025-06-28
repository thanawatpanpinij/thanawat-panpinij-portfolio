import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="relative py-8">
      <svg
        className="absolute -z-1 top-[-53px] left-0 w-full"
        viewBox="0 0 1440 380"
        preserveAspectRatio="none"
      >
        <path
          fill="var(--color-secondary)"
          d="M0,100 Q 720 -100, 1440 100 L1440,380 L0,380 L0,100"
        />
      </svg>
      <div className="w-[min(100%,915px)] mx-auto text-center">
        <h2 className="mb-4 text-5xl text-gray">Get In Touch</h2>
        <p className="max-w-[764px] mx-auto mb-12 text-dark-gray">
          Lorem ipsum placerat curabitur tellus gravida arcu commodo tristique
          suspendisse amet malesuada posuere consequat nisl tellus et justo
          rhoncus fermentum viverra commodo aliquet vitae lacinia.
        </p>
        <Link
          href="mailto:thanawatpanpinij@gmail.com"
          className="flex gap-2 items-center w-fit mx-auto px-8 py-4 text-white bg-accent rounded-xl transition-shadow duration-200 hover:shadow-[0_0_10px_rgba(0,174,293,.6)]"
        >
          <HiOutlineMail size={24} />
          Send message
        </Link>
      </div>
    </section>
  );
}
