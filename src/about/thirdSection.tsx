const info = [
  {
    date: '2010 - 2012',
    title: 'Google',
    subTitle: 'Senior Developer',
  },
  {
    date: '2010 - 2012',
    title: 'Facebook',
    subTitle: 'Senior Design',
  },
  {
    date: '2010 - 2012',
    title: 'cracktech',
    subTitle: 'Senior Developer',
  },
];

const ThirdSection = () => {
  return (
    <section className="w-full bg-black px-[60px] py-[112px] text-white msm:px-[6%] msm:py-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[0.75fr_1.5fr] gap-[2.5rem] msm:grid-cols-1">
          <h2 className="uppercase">About me</h2>
          <div className="border-white font-normal">
            <p className="mb-[50px] text-[1.25rem] leading-[1.5em] msm:text-[1rem]">
              I have been building websites for more than 7 years. With a passion for crafting visually stunning websites, I've
              seamlessly integrated no-code tools to make the development process efficient and accessible. My goal is to bring a
              perfect blend of design aesthetics and functionality to your digital projects.
            </p>
            <p className="mb-[1.5rem] text-[1rem] leading-[1.5em]">My work history</p>

            {info.map((n) => (
              <div
                key={n.title}
                className="flex items-center justify-between border-b border-t msm:flex-col msm:items-start msm:gap-0"
              >
                <div className="my-[32px] flex items-center gap-[7rem] msm:mb-[10px]">
                  <p className="text-[1rem] leading-[1.7em]">{n.date}</p>
                  <div className="font-Thunder text-[2.75rem] font-medium uppercase leading-[1.1] msm:text-[2rem]">{n.title}</div>
                </div>
                <div className="text-[1rem] font-normal leading-[1.7em] msm:mb-[20px]">{n.subTitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
