import Image from "next/image";

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
        <div className="grid gap-4 text-dark-gray w-[50%]">
          <p>
            Lorem ipsum sed aenean augue risus et tellus non praesent sed nisi
            dui viverra nisi consequat commodo dignissim nulla et nulla lectus
            velit phasellus adipiscing nam id feugiat in gravida blandit mauris
            eu tellus id varius justo donec eu mauris justo diam viverra eu
            lectus bibendum suspendisse facilisis orci nec.
          </p>
          <p>
            Lorem ipsum sed aenean augue risus et tellus non praesent sed nisi
            dui viverra nisi consequat commodo dignissim nulla et nulla lectus
            velit phasellus adipiscing nam id feugiat in gravida blandit mauris
            eu tellus id varius justo donec eu mauris justo diam viverra eu
            lectus bibendum suspendisse facilisis orci nec.
          </p>
          <p>
            Lorem ipsum sed aenean augue risus et tellus non praesent sed nisi
            dui viverra nisi consequat commodo dignissim nulla et nulla lectus
            velit phasellus adipiscing nam id feugiat in gravida blandit mauris
            eu tellus id varius justo donec eu mauris justo diam viverra eu
            lectus bibendum suspendisse facilisis orci nec.
          </p>
        </div>
        <div className="overflow-hidden w-[50%] mr-[10px] h-[calc(100%-10px)] rounded-4xl shadow-[10px_10px_var(--color-accent)]">
          <Image
            width={1200}
            height={1200}
            src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751191940/me_bsbdv0.jpg"
            alt="Picture of me standing and smiling"
            className="w-full object-fill"
          />
        </div>
      </section>
    </section>
  );
}
