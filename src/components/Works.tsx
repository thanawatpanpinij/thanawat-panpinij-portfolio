import { CiCirclePlus } from "react-icons/ci";

export default function Works() {
  return (
    <section id="works" className="grid gap-8">
      <section className="flex gap-8 items-center">
        <hr className="border border-secondary w-[min(100%,731px)] h-[1px]" />
        <h2 className="text-[2rem] text-gray">
          My <span className="text-accent">Works</span>
        </h2>
      </section>
      <section className="grid gap-4 grid-cols-3">
        {Array.from({ length: 6 }, (ele, i) => (
          <div
            key={i}
            className="w-full h-[253px] bg-dark-gray rounded-2xl"
          ></div>
        ))}
      </section>
      <button className="cursor-pointer flex gap-2 justify-self-end items-center w-fit px-8 py-4 text-accent border-2 border-accent rounded-xl transition-colors duration-200 hover:text-white hover:bg-accent">
        <CiCirclePlus size={24} strokeWidth={1} />
        Show more
      </button>
    </section>
  );
}
