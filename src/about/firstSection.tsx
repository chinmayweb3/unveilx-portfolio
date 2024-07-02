import { ButtonField } from "../components/buttons";

const FirstSection = () => {
  return (
    <section className="w-full px-[60px] bg-gray2 text-black pb-[60px] ">
      <div className="max-w-[1280px] mx-auto py-[2rem]">
        <div className="flex flex-col justify-start text-center items-center">
          <h1 className="uppercase font-Thunder text-[10rem] mlg:text-[7rem] leading-[1.1] font-semibold pb-[16px] mt-[20px] mb-[10px] ">
            bringing{" "}
            <span className="inline-block">
              <img src="./header.webp" />
            </span>{" "}
            best design solutions
          </h1>
          <p className="max-w-[56rem] text-[1.5rem] text-gray3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="flex gap-[12px] mt-[40px] border-black">
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
