import { ButtonField } from "../components/buttons";

const FirstSection = () => {
  return (
    <section className="w-full px-[60px] bg-black pt-[84px] pb-[112px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-[90%]">
          <h1 className="uppercase text-[10rem] mlg:text-[7rem] font-Thunder leading-[1.1] mt-[20px] mb-[10px]">
            i'm John smith{" "}
            <span className="inline-block">
              <img src="./header.webp" />
            </span>{" "}
            product designer & web{" "}
            <span className="inline-block">
              <img src="./headerstar.webp" />
            </span>{" "}
            developer
          </h1>
          <p className="text-gray1 max-w-[64rem] text-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex justify-between items-center mt-[150px]">
          <div>
            <button className="flex justify-center items-center gap-[32px] border-b-[1px] border-white text-[1.15rem] pb-[10px] hover:border-lime-green hover:text-lime-green duration-100">
              <span>Get in touch</span> <span className="font-black">↗︎</span>
            </button>
          </div>
          <div className="flex gap-[12px] uppercase justify-end">
            <ButtonField className=" py-[10px] border-white hover:border-lime-green hover:text-lime-green">
              behance
            </ButtonField>
            <ButtonField className=" py-[10px] border-white hover:border-lime-green hover:text-lime-green">
              dribble
            </ButtonField>
            <ButtonField className=" py-[10px] border-white hover:border-lime-green hover:text-lime-green">
              twitter
            </ButtonField>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
