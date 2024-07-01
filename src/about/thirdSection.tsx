const ThirdSection = () => {
  return (
    <section className="w-full px-[60px] py-[112px] bg-black text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[0.75fr_1.5fr] gap-[2.5rem] ">
          <h2 className="uppercase">About me</h2>
          <div className="font-normal border-white">
            <p className="text-[1.25rem] leading-[1.5em] mb-[50px]">
              I have been building websites for more than 7 years. With a
              passion for crafting visually stunning websites, I've seamlessly
              integrated no-code tools to make the development process efficient
              and accessible. My goal is to bring a perfect blend of design
              aesthetics and functionality to your digital projects.
            </p>
            <p className="text-[1rem] leading-[1.5em] mb-[1.5rem]">
              My work history
            </p>

            <div className="flex justify-between items-center border-t border-b ">
              <div className="py-[32px] flex items-center gap-[7rem] ">
                <p className="text-[1rem] leading-[1.7em]  ">2010 - 2012</p>
                <div className="uppercase font-Thunder text-[2.75rem] leading-[1.1] font-medium ">
                  Google
                </div>
              </div>
              <div className="leading-[1.7em] font-normal text-[1rem]  ">
                Senior Developer
              </div>
            </div>

            <div className="flex justify-between items-center border-b ">
              <div className="py-[32px] flex items-center gap-[7rem] ">
                <p className="text-[1rem] leading-[1.7em]  ">2010 - 2012</p>
                <div className="uppercase font-Thunder text-[2.75rem] leading-[1.1] font-medium ">
                  Facebook
                </div>
              </div>
              <div className="leading-[1.7em] font-normal text-[1rem]  ">
                Senior Design
              </div>
            </div>

            <div className="flex justify-between items-center border-b ">
              <div className="py-[32px] flex items-center gap-[7rem] ">
                <p className="text-[1rem] leading-[1.7em]  ">2010 - 2012</p>
                <div className="uppercase font-Thunder text-[2.75rem] leading-[1.1] font-medium ">
                  cracktech
                </div>
              </div>
              <div className="leading-[1.7em] font-normal text-[1rem]  ">
                Senior Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
