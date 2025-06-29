import { IoChevronDownOutline } from "react-icons/io5";

export default function Works() {
  return (
    <section id="works" className="sections grid gap-8">
      <section className="flex gap-8 items-center">
        <hr className="border border-secondary w-[min(100%,731px)] h-[1px]" />
        <h2 className="text-[2rem] text-gray">
          My <span className="text-accent">Works</span>
        </h2>
      </section>
      <section className="grid gap-4 grid-cols-3 mt-8">
        {Array.from({ length: 6 }, (ele, i) => (
          <div
            key={i}
            className="w-full h-[253px] bg-dark-gray rounded-2xl"
          ></div>
        ))}
      </section>
      <button className="cursor-pointer flex gap-2 justify-self-end items-center w-fit px-8 py-4 text-accent border-3 border-accent rounded-xl transition-all duration-200 hover:-translate-y-1 hover:text-white hover:bg-accent hover:shadow-[0_0_10px_rgba(0,174,293,.6)]">
        <IoChevronDownOutline size={24} />
        Show more
      </button>
    </section>
  );
}
