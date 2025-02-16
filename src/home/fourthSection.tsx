import React from 'react';
import { motion } from 'framer-motion';
import { ButtonField } from '../components/buttons';
import Translation from '../components/translation';

const info = ['UI / UX design', 'web design', 'webflow development', 'product design'];

const Accord = ({ title, index }: { title: string; index: number }) => {
  const [open, setOpen] = React.useState<'opened' | 'closed'>('closed');
  return (
    <Translation
      sideRun="-y"
      duration={0.3}
      onClick={() => setOpen((prev) => (prev == 'closed' ? 'opened' : 'closed'))}
      className={`${info.length == index ? 'border-b-[1px] border-black' : ''}`}
    >
      <div className="grid cursor-pointer grid-cols-[calc(32px+10rem)_2fr_1fr] items-center border-t-[1px] border-black py-[32px] msm:grid-cols-[1.5fr_60px] msm:py-[26px]">
        <div className="msm:hidden">
          <motion.img
            animate={open}
            variants={{
              opened: { rotate: '45deg' },
              closed: { rotate: '0deg' },
            }}
            className="w-[2rem]"
            src="./plus.svg"
          />
        </div>
        <div className="font-inter text-[2.2rem] font-semibold uppercase leading-[1.5] msm:text-[20px]">{title}</div>
        <div className="justify-self-end text-[1.5rem] msm:pr-[10px] msm:text-[1.15rem]">[0{index}]</div>
      </div>

      <motion.div
        animate={open}
        initial={{ height: 0 }}
        variants={{ opened: { height: 'auto' }, closed: { height: 0 } }}
        transition={{ bounce: 0.25, type: 'spring' }}
        className="overflow-hidden"
      >
        <div className="flex gap-[7.1rem] py-[40px] pr-[176px] msm:flex-col msm:gap-[2rem] msm:pr-[0] msm:pt-[20px]">
          <div className="text-[1rem] uppercase">Overview</div>
          <div>
            <p className="leading-1.7rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
              et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="mt-[1.8rem] flex flex-wrap gap-[10px] border-black">
              <ButtonField className="px-[10px]">webflow design</ButtonField>
              <ButtonField className="px-[10px]">workpress</ButtonField>
              <ButtonField className="px-[10px]">framer</ButtonField>
            </div>
          </div>
        </div>
      </motion.div>
    </Translation>
  );
};

const FourthSection = () => {
  return (
    <section className="w-full bg-lime-green px-[60px] py-[112px] text-black msm:px-[6%] msm:py-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto w-full max-w-[768px]">
          <div className="mb-[24px] pb-[16px]">
            <Translation sideRun="-y" sidePx={50}>
              <h2 className="mb-[32px] inline-block font-Thunder text-[5rem] font-semibold uppercase msm:text-[2.85rem]">
                my skill & service
              </h2>
            </Translation>
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
