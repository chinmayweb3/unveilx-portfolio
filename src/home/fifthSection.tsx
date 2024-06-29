import React from "react";

const Card = ({ move }: { move: number }) => {
  return (
    <div
      style={{ transform: `translateX(-${move * (440 + 24)}px)` }}
      className={`shrink-0 w-[440px] duration-700 relative bg-gray3 mr-[24px] inline-block border-[2px] border-[#424242] rounded-[12px] `}
    >
      <div className=" p-[2rem]">
        <img
          className="aspect-square w-[96px] mb-[20px] "
          src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854c2_Person%2004.webp"
        />

        <div className="mb-[24px]">
          <p className="text-[1.125rem] leading-[1.7em]  ">
            "Working with John was effortless. His quick responses and deep
            comprehension of our objectives made the experience delightful. He's
            truly a valuable ally in our digital endeavors."
          </p>
        </div>
        <div className="text-[1.25rem] mb-[0.5rem] font-semibold">
          Shahin Alam
        </div>
        <div className="text-[1rem] text-gray1 ">CEO, SamirTS</div>
      </div>
    </div>
  );
};

const FifthSection = () => {
  const [card, setCard] = React.useState(0);
  console.log("moving ", card);

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
              onClick={() => setCard((prev) => prev + 1)}
              className="flex justify-center items-center w-[40px] aspect-square "
            >
              <img src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/6669563d598cbb2a4f7854d9_Arrow-Right.svg" />
            </button>
          </div>
        </div>

        <div className="mt-[60px] flex justify-start flex-nowrap ">
          <Card move={card} />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
