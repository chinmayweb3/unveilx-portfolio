import Translation from '../components/translation';

const blogInfo = [
  {
    title: 'Design',
    para: '10 Tips for Elevating Your Design Game',
    date: 'June 27, 2023',
  },
  {
    title: 'Fintech',
    para: '10 Tips for Elevating Your Design Game',
    date: 'June 27, 2023',
  },
  {
    title: 'Fintech',
    para: '10 Tips for Elevating Your Design Game',
    date: 'June 27, 2023',
  },
];

const Blog = () => (
  <>
    {blogInfo.map((t, i) => {
      return (
        <Translation sideRun="-y" sidePx={50} key={t.title + i} className="flex flex-col gap-[4px]">
          <button className="mb-[0.5rem] w-fit rounded-[2rem] border-[0.5px] border-white px-[10px] py-[4px] text-[0.82rem]">
            {t.title}
          </button>
          <h3 className="font-Thunder text-[2.75rem] font-medium leading-[1] msm:mr-[20px] msm:text-[2rem]">{t.para}</h3>
          <p className="text-[1rem] text-gray1">{t.date}</p>
        </Translation>
      );
    })}
  </>
);
const SixthSection = () => {
  return (
    <section className="w-full bg-black px-[60px] pb-[112px] text-white msm:px-[6%] msm:pb-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <div>
          <Translation sideRun="-y">
            <h2 className="mb-[3.15rem] font-Thunder text-[5rem] font-semibold uppercase msm:text-[2.85rem]">latest from blog</h2>
          </Translation>
          <div className="grid grid-cols-3 gap-x-[32px] msm:grid-cols-1 msm:gap-[24px]">
            <Blog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
