import { ButtonField } from '../components/buttons';

const FirstSection = () => {
  return (
    <section className="w-full bg-black px-[60px] pb-[112px] pt-[84px] msm:px-[6%]">
      <div className="mx-auto max-w-[1280px]">
        <div className="w-[90%]">
          <h1 className="mb-[10px] mt-[20px] font-Thunder text-[10rem] uppercase leading-[1.1] mlg:text-[7rem] msm:text-[3rem]">
            i'm John smith{' '}
            <span className="inline-block">
              <img src="./header.webp" />
            </span>{' '}
            product designer & web{' '}
            <span className="inline-block">
              <img src="./headerstar.webp" />
            </span>{' '}
            developer
          </h1>
          <p className="max-w-[64rem] text-[2rem] text-gray1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <div className="mt-[150px] flex items-center justify-between gap-[20px] msm:flex-col">
          <div>
            <button className="flex items-center justify-center gap-[32px] border-b-[1px] border-white pb-[10px] text-[1.15rem] duration-100 hover:border-lime-green hover:text-lime-green">
              <span>Get in touch</span> <span className="font-black">↗︎</span>
            </button>
          </div>
          <div className="flex justify-end gap-[12px] uppercase">
            <ButtonField className="border-white py-[10px] hover:border-lime-green hover:text-lime-green">behance</ButtonField>
            <ButtonField className="border-white py-[10px] hover:border-lime-green hover:text-lime-green">dribble</ButtonField>
            <ButtonField className="border-white py-[10px] hover:border-lime-green hover:text-lime-green">twitter</ButtonField>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
