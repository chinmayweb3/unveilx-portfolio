const info = [
  {
    id: '01',
    title: 'research',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: '02',
    title: 'WIREFRAMING',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: '03',
    title: 'VISUAL DESIGN',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: '04',
    title: 'TESTING',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const FourthSection = () => {
  return (
    <section className="w-full bg-black px-[60px] py-[112px] text-white msm:px-[6%] msm:py-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 gap-[3rem] msm:grid-cols-1">
          <div className="max-w-[24rem]">
            <h2 className="sticky top-[80px] font-Thunder text-[5.5rem] uppercase leading-[1.1]">my work process</h2>
          </div>
          <div className="flex flex-col gap-[32px]">
            {info.map((item) => (
              <div key={item.id} className="sticky top-[80px] rounded-[8px] border border-[#424242] bg-gray3 px-[32px] py-[36px]">
                <h2 className="mb-[1rem] font-Thunder text-[5rem] font-semibold uppercase leading-[1.1]">{item.id}</h2>
                <div className="mb-[1rem] text-[2rem] font-medium uppercase">{item.title}</div>
                <p className="text-[1rem] leading-[1.7em]">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
