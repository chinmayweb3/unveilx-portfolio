import React from "react";
import { motion } from "framer-motion";

const info = [
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "./review1.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "./review2.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "./review3.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "./review4.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "./review5.webp",
  },
  {
    name: "Shahin Alam",
    subTitle: "CEO, SamirTS",
    img: "./review6.webp",
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

const marqueeInfo = [
  "./logo1.svg",
  "./logo2.svg",
  "./logo3.svg",
  "./logo4.svg",
  "./logo5.svg",
  "./logo6.svg",
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

const Marquee = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{
          x: "-50%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
        className="flex items-center min-w-max"
      >
        {marqueeInfo.map((n, i) => {
          return (
            <div className="shrink-0 mr-[80px] " key={"marquee" + i}>
              <img loading="lazy" src={n} alt="logo images" />
            </div>
          );
        })}
        {marqueeInfo.map((n, i) => {
          return (
            <div className="shrink-0 mr-[80px] " key={"marquee2" + i}>
              <img loading="lazy" src={n} alt="logo images" />
            </div>
          );
        })}
      </motion.div>
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
              <img loading="lazy" src="./arrowLeft.svg" />
            </button>
            <button
              onClick={() =>
                setCard((prev) => (prev == info.length - 3 ? prev : prev + 1))
              }
              className={`flex justify-center items-center w-[40px] aspect-square ${
                card == info.length - 3 ? "opacity-[0.48] cursor-default" : ""
              }`}
            >
              <img loading="lazy" src="./arrowRight.svg" />
            </button>
          </div>
        </div>

        <div className="mt-[60px] flex justify-start flex-nowrap ">
          {info.map((i, index) => (
            <Card key={i.name + index} item={i} move={card} />
          ))}
        </div>
        <div className="py-[112px] ">
          <Marquee />
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
