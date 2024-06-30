import { useRef, useState } from "react";

const info = [
  {
    title: "Heath care",
    para: "624 x 468",
    src: "https://cdn.prod.website-files.com/6669563d598cbb2a4f785473/6669563d598cbb2a4f78547c_2.webp",
  },
  {
    title: "cashsend app",
    para: "App Design",
    src: "https://cdn.prod.website-files.com/6669563d598cbb2a4f785473/6669563d598cbb2a4f7854d2_01.webp",
  },
  {
    title: "saas app",
    para: "Web Design",
    src: "https://cdn.prod.website-files.com/6669563d598cbb2a4f785473/6669563d598cbb2a4f7854f0_3.webp",
  },
  {
    title: "fintech web",
    para: "Web App Design",
    src: "https://cdn.prod.website-files.com/6669563d598cbb2a4f785473/6669563d598cbb2a4f7854f1_4.webp",
  },
];
type Iitem = {
  item: {
    title: string;
    para: string;
    src: string;
  };
};

const Project = ({ item }: Iitem) => {
  const divref = useRef<HTMLDivElement>(null);
  const playref = useRef<HTMLDivElement>(null);
  let time: ReturnType<typeof setTimeout>;

  return (
    <div
      ref={divref}
      onMouseMove={(e) => {
        if (!divref.current || !playref.current) return;
        const r = divref.current?.getBoundingClientRect();

        const positionX = e.clientX - r.left - r.width / 2;
        const positionY = e.clientY - r.top - r.height / 2;
        playref.current.style.transform = `translate(${positionX}px,${positionY}px)`;
      }}
      onMouseEnter={() => {
        time = setTimeout(() => {
          if (playref.current) playref.current.style.transition = "50ms";
          console.log("chagned");
        }, 180);
      }}
      onMouseLeave={(e) => {
        clearTimeout(time);
        if (playref.current) {
          playref.current.style.transition = "200ms";
          playref.current.style.transform = `translate(0px,0px`;
        }
      }}
      className="relative flex justify-center rounded-xl items-center overflow-hidden"
    >
      <div key={item.title} className="relative w-full group">
        <img
          loading="lazy"
          className="aspect-[4:3] group-hover:scale-[1.1] duration-[700ms] ease-in-out "
          src={item.src}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0c0c0c05] to-[#000000c4] " />
        <div className="absolute bottom-[5%] left-0 w-full text-center text-white">
          <h2 className="uppercase font-Thunder text-[3.25rem] font-semibold leading-[1.1]">
            {item.title}
          </h2>
          <p className="text-[1rem] mb-[16px]">{item.para}</p>
        </div>
      </div>
      <div
        ref={playref}
        style={{
          transform: "translate(0px,0px)",
        }}
        className="pointer-events-none duration-150 ease-in absolute bg-slate-50"
      >
        play
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <section className="w-full px-[60px] py-[112px] bg-white text-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between">
          <div className="w-[48rem]">
            <div className="uppercase text-[1rem] pb-[8px]">Projects</div>
            <h2 className="uppercase text-[5rem] leading-[1.1] font-semibold font-Thunder ">
              Helping brands achieve sustainable results
            </h2>
          </div>
          <button className="mb-[20px] self-end flex justify-center items-center gap-[32px] border-b-[1px] border-black text-[1.15rem] pb-[10px]">
            <span>View All Project</span> <span>↗︎</span>
          </button>
        </div>
        <div className="mt-[56px]">
          <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[2.2rem] ">
            {info.map((i) => (
              <Project key={i.title} item={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
