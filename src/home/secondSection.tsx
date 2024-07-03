import Translation from '../components/translation';

const SecondSection = () => {
  return (
    <section className="w-full bg-gray2 px-[60px] py-[112px] text-black msm:px-[6%] msm:py-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <Translation sideRun="-y" sidePx={80} className="msm: grid w-full grid-cols-[0.75fr_1fr] msm:grid-cols-1 msm:gap-[2rem]">
          <div className="text-[1rem] uppercase">About Me</div>
          <div className="max-w-[600px]">
            <p className="text-[1.25rem] leading-[1.5em] msm:text-[1rem]">
              I partner with clients worldwide to cultivate captivating and immersive digital experiences through the realms of
              design and development.
            </p>
            <div className="grid w-fit grid-cols-2 gap-[56px] pb-[50px] pt-[40px] msm:pb-[32px]">
              <div>
                <div className="text-[4.5rem] msm:text-[2.25rem]">130+</div>
                <div className="my-[10px] h-[1px] w-full bg-black"></div>
                <p className="mt-[25px] text-[1rem] sm:uppercase">completed projects</p>
              </div>

              <div>
                <div className="text-[4.5rem] msm:text-[2.25rem]">5+</div>
                <div className="my-[10px] h-[1px] w-full bg-black"></div>
                <p className="mt-[25px] text-[1rem] sm:uppercase">years of experience</p>
              </div>
            </div>
          </div>
        </Translation>
      </div>
    </section>
  );
};

export default SecondSection;
