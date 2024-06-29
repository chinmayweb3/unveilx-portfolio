import React from "react";
import { motion } from "framer-motion";

const info = [
  "UI / UX design",
  "web design",
  "webflow development",
  "product design",
];

const Accord = ({ title, index }: { title: string; index: number }) => {
  const [open, setOpen] = React.useState<"opened" | "closed">("closed");
  return (
    <div
      onClick={() =>
        setOpen((prev) => (prev == "closed" ? "opened" : "closed"))
      }
    >
      <div className="border-black border-t-[1px] py-[32px] grid grid-cols-[calc(32px+10rem)_2fr_1fr] items-center cursor-pointer">
        <div>
          <motion.img
            animate={open}
            variants={{
              opened: { rotate: "45deg" },
              closed: { rotate: "0deg" },
            }}
            className="w-[2rem]"
            src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/66698faccd01b5e8778c2e38_plus.svg"
          />
        </div>
        <div className="uppercase font-inter text-[2.2rem] font-semibold leading-[1.5] ">
          {title}
        </div>
        <div className="text-[1.5rem] justify-self-end ">[0{index}]</div>
      </div>

      <motion.div
        animate={open}
        initial={{ height: 0 }}
        variants={{ opened: { height: "auto" }, closed: { height: 0 } }}
        transition={{ bounce: 0.25, type: "spring" }}
        className="overflow-hidden"
      >
        <div className="py-[40px] flex gap-[7.1rem]  pr-[176px] ">
          <div className="uppercase text-[1rem] ">Overview</div>
          <div>
            <p className="leading-1.7rem] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="mt-[1.8rem] flex gap-[10px] ">
              <button className="text-[0.9rem] uppercase border border-black px-[10px] py-[6px] rounded-[100px] ">
                webflow design
              </button>
              <button className="text-[0.9rem] uppercase border border-black px-[10px] py-[6px] rounded-[100px] ">
                workpress
              </button>
              <button className="text-[0.9rem] uppercase border border-black px-[10px] py-[6px] rounded-[100px] ">
                framer
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FourthSection = () => {
  return (
    <section className="w-full px-[60px] py-[112px] bg-lime-green text-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[768px] w-full mx-auto">
          <div className="pb-[16px] mb-[24px]">
            <h2 className="uppercase font-Thunder font-semibold mb-[32px] text-[5rem] inline-block ">
              my skill & service
            </h2>
          </div>
          <div>
            {info.map((item, index) => (
              <Accord key={item} title={item} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
