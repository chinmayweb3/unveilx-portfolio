import React from 'react';
import { motion } from 'framer-motion';

const info = [
  {
    name: 'Shahin Alam',
    subTitle: 'CEO, SamirTS',
    img: './review1.webp',
  },
  {
    name: 'Shahin Alam',
    subTitle: 'CEO, SamirTS',
    img: './review2.webp',
  },
  {
    name: 'Shahin Alam',
    subTitle: 'CEO, SamirTS',
    img: './review3.webp',
  },
  {
    name: 'Shahin Alam',
    subTitle: 'CEO, SamirTS',
    img: './review4.webp',
  },
  {
    name: 'Shahin Alam',
    subTitle: 'CEO, SamirTS',
    img: './review5.webp',
  },
  {
    name: 'Shahin Alam',
    subTitle: 'CEO, SamirTS',
    img: './review6.webp',
  },
];

const marqueeInfo = ['./logo1.svg', './logo2.svg', './logo3.svg', './logo4.svg', './logo5.svg', './logo6.svg'];

const ReviewCard = ({ move, item }: { move: number; item: Record<any, string> }) => {
  return (
    <div
      style={{ transform: `translateX(-${move * (440 + 24)}px)` }}
      className={`relative mr-[24px] inline-block w-[440px] shrink-0 rounded-[12px] border-[2px] border-[#424242] bg-gray3 duration-700 mlg:w-[400px] msm:mr-[16px] msm:w-[300px]`}
    >
      <div className="p-[2rem] msm:p-[1.5rem]">
        <img className="mb-[20px] aspect-square w-[96px] msm:w-[72px]" src={item.img} />

        <div className="mb-[24px]">
          <p className="text-[1.125rem] leading-[1.7em] msm:text-[0.8rem]">
            "Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience
            delightful. He's truly a valuable ally in our digital endeavors."
          </p>
        </div>
        <div className="mb-[0.5rem] text-[1.25rem] font-semibold msm:text-[1rem]">{item.name}</div>
        <div className="text-[1rem] text-gray1 msm:text-[0.9rem]">{item.subTitle}</div>
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{
          x: '-50%',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: 'linear',
        }}
        className="flex min-w-max items-center"
      >
        {marqueeInfo.map((n, i) => {
          return (
            <div className="mr-[80px] shrink-0 msm:mr-[40px]" key={'marquee' + i}>
              <img loading="lazy" src={n} alt="logo images" />
            </div>
          );
        })}
        {marqueeInfo.map((n, i) => {
          return (
            <div className="mr-[80px] shrink-0 msm:mr-[40px]" key={'marquee2' + i}>
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
    <section className="w-full overflow-hidden bg-black px-[60px] py-[112px] text-white msm:px-[6%] msm:py-[80px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-start justify-between">
          <h2 className="font-Thunder text-[5rem] font-semibold uppercase msm:text-[2.85rem]">what they think</h2>
          <div className="mt-[20px] flex items-center gap-[10px] mlg:hidden">
            <button
              onClick={() => setCard((prev) => (prev == 0 ? prev : prev - 1))}
              className={`flex aspect-square w-[40px] items-center justify-center ${
                card == 0 ? 'cursor-default opacity-[0.48]' : ''
              }`}
            >
              <img loading="lazy" src="./arrowLeft.svg" />
            </button>
            <button
              onClick={() => setCard((prev) => (prev == info.length - 3 ? prev : prev + 1))}
              className={`flex aspect-square w-[40px] items-center justify-center ${
                card == info.length - 3 ? 'cursor-default opacity-[0.48]' : ''
              }`}
            >
              <img loading="lazy" src="./arrowRight.svg" />
            </button>
          </div>
        </div>

        <div className="mt-[60px] flex flex-nowrap justify-start pb-[10px] mlg:overflow-x-scroll">
          {info.map((i, index) => (
            <ReviewCard key={i.name + index} item={i} move={card} />
          ))}
        </div>
        <div className="pt-[112px] msm:pt-[80px]">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
