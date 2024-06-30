const Footer = () => {
  return (
    <footer className="w-full px-[60px] py-[32px] bg-lime-green text-black">
      <div className="max-w-[1280px] mx-auto pb-[16px]">
        <div className="py-[80px] text-center">
          <p className="text-[1.25rem] font-normal pb-[20px] ">
            Have a project in mind?
          </p>
          <div className="text-[10rem] font-Thunder leading-[1.1] uppercase font-semibold mb-[10px]  ">
            LET'S WORK TOGETHER
          </div>
          <button className="uppercase mx-auto border-black border text-[1.125rem] rounded-[12rem] py-[1rem] px-[2rem] hover:text-white hover:bg-black duration-100">
            get in touch
          </button>
        </div>
        <div className="w-full h-[2px] bg-black " />
        <div className="pt-[48px] flex items-center justify-between">
          <div className="w-[240px] text-[1rem] font-medium ">
            Designed by Md Shahin Alam - Powered by{" "}
            <span className="underline">Webflow</span>
          </div>
          <div className="grid grid-cols-4 justify-items-start font-medium text-[1rem] leading-[1.5] gap-x-[2.5rem] gap-y-[1.7rem] ">
            <button>Licenses</button>
            <button>Style guide</button>
            <button>About </button>
            <button>Changelog</button>
            <button>Instructions</button>
            <button>404 page</button>
            <button>Protected Page</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
