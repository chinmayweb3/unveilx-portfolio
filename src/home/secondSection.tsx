const SecondSection = () => {
  return (
    <section className="w-full bg-gray2 px-[60px] py-[112px] text-black msm:px-[6%] msm:py-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <div className="msm: grid w-full grid-cols-[0.75fr_1fr] msm:grid-cols-1">
          <div className="text-[1rem] uppercase">About Me</div>
          <div className="max-w-[600px]">
            <p className="text-[1.25rem] leading-[1.5em]">
              I partner with clients worldwide to cultivate captivating and immersive digital experiences through the realms of
              design and development.
            </p>
            <div className="flex gap-[56px] pb-[50px] pt-[40px]">
              <div>
                <div className="text-[4.5rem]">130+</div>
                <div className="my-[10px] h-[1px] w-full bg-black"></div>
                <p className="mt-[25px] text-[1rem] uppercase">completed projects</p>
              </div>

              <div>
                <div className="text-[4.5rem]">5+</div>
                <div className="my-[10px] h-[1px] w-full bg-black"></div>
                <p className="mt-[25px] text-[1rem] uppercase">years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
