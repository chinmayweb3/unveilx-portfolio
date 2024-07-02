import { ButtonField } from '../components/buttons';

const FirstSection = () => {
  return (
    <section className="w-full bg-gray2 px-[60px] pb-[60px] text-black msm:px-[6%] msm:pb-[40px]">
      <div className="mx-auto max-w-[1280px] py-[2rem]">
        <div className="flex flex-col items-center justify-start text-center">
          <h1 className="mb-[10px] mt-[20px] pb-[16px] font-Thunder text-[10rem] font-semibold uppercase leading-[1.1] mlg:text-[7rem] msm:text-[3rem]">
            bringing{' '}
            <span className="inline-block msm:h-[40px]">
              <img className="msm:h-full" src="./header.webp" />
            </span>{' '}
            best design solutions
          </h1>
          <p className="max-w-[56rem] text-[1.5rem] text-gray3 msm:text-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="mt-[40px] flex gap-[12px] border-black">
            <ButtonField>behance</ButtonField>
            <ButtonField>dribble</ButtonField>
            <ButtonField>twitter</ButtonField>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
