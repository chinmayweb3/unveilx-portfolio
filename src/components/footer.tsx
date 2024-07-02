const footList = ['Licenses', 'Style guide', 'About ', 'Changelog', 'Instructions', '404 page', 'Protected Page', 'Contact'];
const Footer = () => {
  return (
    <footer className="w-full bg-lime-green px-[60px] py-[32px] text-black">
      <div className="mx-auto max-w-[1280px] pb-[16px]">
        <div className="py-[80px] text-center">
          <p className="pb-[20px] text-[1.25rem] font-normal msm:text-[1rem]">Have a project in mind?</p>
          <div className="mb-[10px] font-Thunder text-[10rem] font-semibold uppercase leading-[1.1] msm:text-[2.25rem]">
            LET'S WORK TOGETHER
          </div>
          <button className="mx-auto rounded-[12rem] border border-black px-[2rem] py-[1rem] text-[1.125rem] uppercase duration-100 hover:bg-black hover:text-white">
            get in touch
          </button>
        </div>
        <div className="h-[2px] w-full bg-black" />
        <div className="flex items-center justify-between pt-[48px] msm:flex-col">
          <div className="w-[240px] text-[1rem] font-medium">
            Designed by Md Shahin Alam - Powered by <span className="underline">Webflow</span>
          </div>
          <div className="grid grid-cols-4 justify-items-start gap-x-[2.5rem] gap-y-[1.7rem] text-[1rem] font-medium leading-[1.5] msm:grid-cols-3">
            {footList.map((n) => (
              <button className="hover:underline" key={n}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
