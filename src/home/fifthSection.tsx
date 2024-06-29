import React from "react";

const info = [
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854c2_Person%2004.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854c4_Person%2002.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854c0_Person%2001.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854c3_Person%2003.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854c1_Person%2006.webp",
  },
];

const blogInfo = [
  {
    title: "Design",
    para: "10 Tips for Elevating Your Design Game",
    date: "June 27, 2023",
  },
  {
    title: "Fintech",
    para: "10 Tips for Elevating Your Design Game",
    date: "June 27, 2023",
  },
  {
    title: "Fintech",
    para: "10 Tips for Elevating Your Design Game",
    date: "June 27, 2023",
  },
];

const Blog = () => (
  <>
    {blogInfo.map((t, i) => {
      return (
        <div key={t.title + i} className="flex flex-col gap-[4px] ">
          <button className="w-fit text-[0.82rem] border-[0.5px] border-white rounded-[2rem] py-[4px] px-[10px] mb-[0.5rem] ">
            {t.title}
          </button>
          <h3 className="text-[2.75rem] font-medium font-Thunder leading-[1] ">
            {t.para}
          </h3>
          <p className="text-gray1 text-[1rem] ">{t.date}</p>
        </div>
      );
    })}
  </>
);

const Card = ({ move, item }: { move: number; item: Record<any, string> }) => {
  return (
    <div
      style={{ transform: `translateX(-${move * (440 + 24)}px)` }}
      className={`shrink-0 w-[440px] duration-700 relative bg-gray3 mr-[24px] inline-block border-[2px] border-[#424242] rounded-[12px] `}
    >
      <div className=" p-[2rem]">
        <img className="aspect-square w-[96px] mb-[20px] " src={item.img} />

        <div className="mb-[24px]">
          <p className="text-[1.125rem] leading-[1.7em]  ">
            "Working with John was effortless. His quick responses and deep
            comprehension of our objectives made the experience delightful. He's
            truly a valuable ally in our digital endeavors."
          </p>
        </div>
        <div className="text-[1.25rem] mb-[0.5rem] font-semibold">
          {item.name}
        </div>
        <div className="text-[1rem] text-gray1 ">{item.subTitle}</div>
      </div>
    </div>
  );
};

const FifthSection = () => {
  const [card, setCard] = React.useState(0);

  return (
    <section className="w-full px-[60px] py-[112px] bg-black text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-start">
          <h2 className="font-Thunder text-[5rem] font-semibold uppercase ">
            what they think
          </h2>
          <div className="flex items-center gap-[10px] mt-[20px]">
            <button
              onClick={() => setCard((prev) => (prev == 0 ? prev : prev - 1))}
              className={` flex justify-center items-center w-[40px] aspect-square ${
                card == 0 ? "opacity-[0.48] cursor-default " : ""
              }`}
            >
              <img src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854d8_Arrow-Left.svg" />
            </button>
            <button
              onClick={() =>
                setCard((prev) => (prev == info.length - 3 ? prev : prev + 1))
              }
              className={`flex justify-center items-center w-[40px] aspect-square ${
                card == info.length - 3 ? "opacity-[0.48] cursor-default" : ""
              }`}
            >
              <img src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854d9_Arrow-Right.svg" />
            </button>
          </div>
        </div>

        <div className="mt-[60px] flex justify-start flex-nowrap ">
          {info.map((i, index) => (
            <Card key={i.name + index} item={i} move={card} />
          ))}
        </div>
        <div className="py-[112px] ">
          <div></div>
        </div>
        <div>
          <h2 className="font-Thunder text-[5rem] font-semibold uppercase mb-[3.15rem] ">
            latest from blog
          </h2>
          <div className="grid grid-cols-3 gap-x-[32px] ">
            <Blog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
