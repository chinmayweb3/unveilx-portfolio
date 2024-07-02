const info = [
  {
    id: "01",
    title: "research",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "02",
    title: "WIREFRAMING",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "03",
    title: "VISUAL DESIGN",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: "04",
    title: "TESTING",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const FourthSection = () => {
  return (
    <section className="w-full px-[60px] py-[112px] bg-black text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 gap-[3rem] ">
          <div className="max-w-[24rem]">
            <h2 className="sticky top-[80px] uppercase font-Thunder text-[5.5rem] leading-[1.1]">
              my work process
            </h2>
          </div>
          <div className="flex flex-col gap-[32px]">
            {info.map((item) => (
              <div
                key={item.id}
                className="sticky top-[80px] py-[36px] px-[32px] rounded-[8px] border bg-gray3 border-[#424242]"
              >
                <h2 className="uppercase font-Thunder font-semibold leading-[1.1] text-[5rem] mb-[1rem]">
                  {item.id}
                </h2>
                <div className="uppercase text-[2rem] font-medium mb-[1rem] ">
                  {item.title}
                </div>
                <p className="leading-[1.7em] text-[1rem]  ">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
