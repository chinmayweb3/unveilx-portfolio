const FourthSection = () => {
  return (
    <section className="w-full px-[60px] py-[112px] bg-lime-green text-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[768px] w-full mx-auto">
          <div className="pb-[16px] mb-[24px]">
            <h2 className="uppercase font-Thunder font-semibold mb-[32px] text-[5rem] inline-block ">
              my skill & service
            </h2>
          </div>
          <div>
            <div>
              <div className="border-black border-t-[1px] py-[32px] grid grid-cols-[calc(32px+10rem)_2fr_1fr] items-center ">
                <div>
                  <img
                    className="w-[2rem]"
                    src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/66698faccd01b5e8778c2e38_plus.svg"
                  />
                </div>
                <div className="uppercase font-inter text-[2.2rem] font-semibold leading-[1.5] ">
                  UI /ux design
                </div>
                <div className="text-[1.5rem] justify-self-end ">[01]</div>
              </div>
              <div className="">
                <div className="py-[40px] flex gap-[7.1rem]  pr-[176px] ">
                  <div className="uppercase text-[1rem] ">Overview</div>
                  <div>
                    <p className="leading-1.7rem] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                    <div className="mt-[1.8rem] flex gap-[10px] ">
                      <button className="text-[0.9rem] uppercase border border-black px-[10px] py-[6px] rounded-[100px] ">
                        webflow design
                      </button>
                      <button className="text-[0.9rem] uppercase border border-black px-[10px] py-[6px] rounded-[100px] ">
                        workpress
                      </button>
                      <button className="text-[0.9rem] uppercase border border-black px-[10px] py-[6px] rounded-[100px] ">
                        framer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
