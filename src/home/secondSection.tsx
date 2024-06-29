const SecondSection = () => {
  return (
    <section className="w-full px-[60px] py-[112px] bg-gray2 text-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-full grid grid-cols-[0.75fr_1fr]">
          <div className="uppercase text-[1rem]">About Me</div>
          <div className="max-w-[600px] ">
            <p className="text-[1.25rem] leading-[1.5em]">
              I partner with clients worldwide to cultivate captivating and
              immersive digital experiences through the realms of design and
              development.
            </p>
            <div className="flex gap-[56px] pt-[40px] pb-[50px]">
              <div>
                <div className="text-[4.5rem]">130+</div>
                <div className="h-[1px] w-full bg-black my-[10px]"></div>
                <p className="uppercase text-[1rem] mt-[25px]">
                  completed projects
                </p>
              </div>

              <div>
                <div className="text-[4.5rem]">5+</div>
                <div className="h-[1px] w-full bg-black my-[10px]"></div>
                <p className="uppercase text-[1rem] mt-[25px]">
                  years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
