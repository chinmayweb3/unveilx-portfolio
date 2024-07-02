const info = [
  { id: '01', title: 'awwards', para: 'Site of the day', year: '2023' },
  { id: '02', title: '99 DESIGN.COM', para: 'Site of the day', year: '2023' },
  { id: '03', title: 'awwards', para: 'Site of the day', year: '2023' },
  { id: '04', title: 'awwards', para: 'Site of the day', year: '2023' },
];

const FifthSection = () => {
  return (
    <section className="w-full bg-lime-green px-[60px] py-[112px] text-black msm:px-[6%] msm:py-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-[50px] font-Thunder text-[5rem] font-semibold uppercase leading-[1.1] msm:mb-[32px] msm:text-[2.85rem]">
          my achievement
        </h2>
        <div className="border-black text-[1rem]">
          {info.map((n, i) => (
            <div
              key={n.id + n.title}
              className={`grid grid-cols-[0.75fr_1.5fr_0.75fr_1fr] items-center border-b border-inherit py-[1.75rem] msm:grid-cols-1 msm:text-center ${i == 0 ? 'border-t' : ''}`}
            >
              <p>[{n.id}]</p>
              <h2 className="text-[1.65rem] font-semibold uppercase">{n.title}</h2>
              <p>{n.para}</p>
              <p className="justify-self-end msm:justify-self-center">{n.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
