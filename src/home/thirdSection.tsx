import { useRef } from 'react';

const info = [
  {
    title: 'Heath care',
    para: '624 x 468',
    src: './project1.webp',
  },
  {
    title: 'cashsend app',
    para: 'App Design',
    src: './project2.webp',
  },
  {
    title: 'saas app',
    para: 'Web Design',
    src: './project3.webp',
  },
  {
    title: 'fintech web',
    para: 'Web App Design',
    src: './project4.webp',
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
  const parentRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLDivElement>(null);
  let time: ReturnType<typeof setTimeout>;

  return (
    <div
      ref={parentRef}
      onMouseMove={(e) => {
        if (!parentRef.current || !playRef.current) return;
        const r = parentRef.current?.getBoundingClientRect();

        const positionX = Math.floor(e.clientX - r.left - r.width / 2);
        const positionY = Math.floor(e.clientY - r.top - r.height / 2);
        playRef.current.style.transform = `translate(${positionX}px,${positionY}px) scale(1,1)`;
      }}
      onMouseEnter={() => {
        time = setTimeout(() => {
          if (playRef.current) playRef.current.style.transition = '50ms';
        }, 200);
      }}
      onMouseLeave={() => {
        clearTimeout(time);
        if (playRef.current) {
          playRef.current.style.transition = '150ms';
          playRef.current.style.transform = `translate(0px,0px) scale(0,0)`;
        }
      }}
      className="relative flex items-center justify-center overflow-hidden rounded-xl"
    >
      <div key={item.title} className="group relative w-full">
        <img loading="lazy" className="aspect-[4:3] duration-[700ms] ease-in-out group-hover:scale-[1.1]" src={item.src} />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-[#0c0c0c05] to-[#000000c4]" />
        <div className="absolute bottom-[5%] left-0 w-full text-center text-white">
          <h2 className="font-Thunder text-[3.25rem] font-semibold uppercase leading-[1.1]">{item.title}</h2>
          <p className="mb-[16px] text-[1rem]">{item.para}</p>
        </div>
      </div>
      <div
        ref={playRef}
        style={{
          transform: 'translate(0px,0px) scale(0,0)',
          transition: '150ms',
        }}
        className="pointer-events-none absolute ease-out"
      >
        <div className="flex aspect-square w-[100px] items-center justify-center rounded-full bg-white">
          <div className="flex aspect-square w-[48px] items-center justify-center rounded-full bg-black">
            <img className="aspect-square w-[24px]" src="./arrowTopRight.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <section className="w-full bg-white px-[60px] py-[112px] text-black">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex justify-between">
          <div className="w-[48rem]">
            <div className="pb-[8px] text-[1rem] uppercase">Projects</div>
            <h2 className="font-Thunder text-[5rem] font-semibold uppercase leading-[1.1]">
              Helping brands achieve sustainable results
            </h2>
          </div>
          <button className="mb-[20px] flex items-center justify-center gap-[32px] self-end border-b-[1px] border-black pb-[10px] text-[1.15rem]">
            <span>View All Project</span> <span>↗︎</span>
          </button>
        </div>
        <div className="mt-[56px]">
          <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[2.2rem]">
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
