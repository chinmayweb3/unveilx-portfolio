import { ButtonField } from '../components/buttons';
import Translation from '../components/translation';

const FirstSection = () => {
  return (
    <section className="w-full bg-black px-[60px] pb-[112px] pt-[84px] msm:px-[6%] msm:py-[4rem] msm:pt-[1rem]">
      <div className="mx-auto max-w-[1280px]">
        <div className="w-[90%]">
          <Translation>
            <h1 className="mb-[10px] mt-[20px] font-Thunder text-[10rem] font-semibold uppercase leading-[1.1] mlg:text-[7rem] msm:text-[3rem]">
              i'm John Doe{' '}
              <span className="inline-block msm:h-[40px]">
                <img className="msm:h-full" src="./header.webp" />
              </span>{' '}
              website developer & web{' '}
              <span className="inline-block msm:h-[40px]">
                <img className="msm:h-full" src="./headerstar.webp" />
              </span>{' '}
              designer
            </h1>
          </Translation>
          <p className="max-w-[64rem] text-[2rem] text-gray1 msm:text-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <Translation
          sideRun="-y"
          className="mt-[150px] flex items-center justify-between gap-[32px] msm:mt-[60px] msm:flex-col msm:items-start"
        >
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
        </Translation>
      </div>
    </section>
  );
};

export default FirstSection;
