import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { AnimatePresence, useCycle, motion } from 'framer-motion';

const navList = [
  { name: 'Home', path: '/', color: 'white', bg: 'black' },
  { name: 'About', path: '/about', color: 'black', bg: 'gray2' },
  { name: 'Work', path: '', color: 'white', bg: 'black' },
  { name: 'Blog', path: '', color: 'white', bg: 'black' },
  { name: 'Contact', path: '', color: 'white', bg: 'black' },
];

const Navbar = () => {
  const [css, setcss] = React.useState({ bg: 'black', color: 'white' });
  const p = location.pathname;

  useEffect(() => {
    const n = navList.find((n) => n.path == p);
    setcss({ bg: n?.bg ?? 'black', color: n?.color ?? 'white' });
  }, []);

  return (
    <div className={`w-full px-[60px] msm:px-[6%] bg-${css.bg} text-${css.color}`}>
      <header className="mx-auto flex h-[91px] max-w-[1280px] items-center justify-between msm:h-[80px]">
        <Link className="z-[20]" onClick={() => setcss({ bg: 'black', color: 'white' })} to={'/'}>
          {/* <svg className="w-[104px]" width="143" height="25" viewBox="0 0 143 25" fill="none">
            <path
              fill={css.color}
              d="M15.6946 0.727272H19.2173V16.0341C19.2173 17.6629 18.8348 19.1061 18.0696 20.3636C17.3045 21.6136 16.2287 22.5985 14.8423 23.3182C13.456 24.0303 11.831 24.3864 9.96733 24.3864C8.11127 24.3864 6.49006 24.0303 5.10369 23.3182C3.71733 22.5985 2.64157 21.6136 1.87642 20.3636C1.11127 19.1061 0.728693 17.6629 0.728693 16.0341V0.727272H4.24006V15.75C4.24006 16.803 4.47112 17.7386 4.93324 18.5568C5.40294 19.375 6.06581 20.0189 6.92188 20.4886C7.77794 20.9508 8.79309 21.1818 9.96733 21.1818C11.1491 21.1818 12.1681 20.9508 13.0241 20.4886C13.8878 20.0189 14.5469 19.375 15.0014 18.5568C15.4635 17.7386 15.6946 16.803 15.6946 15.75V0.727272ZM43.1065 0.727272V24H39.8793L28.0497 6.93182H27.8338V24H24.3224V0.727272H27.5724L39.4134 17.8182H39.6293V0.727272H43.1065ZM50.2628 0.727272L56.7401 19.6818H57.0014L63.4787 0.727272H67.2741L58.8991 24H54.8423L46.4673 0.727272H50.2628ZM70.6349 24V0.727272H85.2259V3.75H74.1463V10.8409H84.4645V13.8523H74.1463V20.9773H85.3622V24H70.6349ZM93.4276 0.727272V24H89.9162V0.727272H93.4276ZM98.5412 24V0.727272H102.053V20.9773H112.598V24H98.5412ZM127.516 0.727272L133.084 9.82955H133.266L138.834 0.727272H142.902L135.652 12.3636L142.947 24H138.857L133.266 15.0227H133.084L127.493 24H123.402L130.822 12.3636L123.447 0.727272H127.516Z"
            /> 
          </svg> */}
          <svg width="120" height="25" viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_203_13)">
              <path
                d="M18.9659 1H22.4886V16.3074C22.4886 17.9363 22.1061 19.3795 21.3409 20.6371C20.5758 21.8871 19.5 22.872 18.1136 23.5918C16.7273 24.3039 15.1023 24.66 13.2386 24.66C11.3826 24.66 9.76137 24.3039 8.375 23.5918C6.98864 22.872 5.91288 21.8871 5.14773 20.6371C4.38258 19.3795 4 17.9363 4 16.3074V1H7.51137V16.0233C7.51137 17.0763 7.74243 18.012 8.20455 18.8302C8.67425 19.6484 9.33712 20.2923 10.1932 20.7621C11.0492 21.2243 12.0644 21.4553 13.2386 21.4553C14.4204 21.4553 15.4394 21.2243 16.2954 20.7621C17.1591 20.2923 17.8182 19.6484 18.2727 18.8302C18.7348 18.012 18.9659 17.0763 18.9659 16.0233V1ZM46.3778 1V24.2736H43.1506L31.321 7.20478H31.1051V24.2736H27.5937V1H30.8437L42.6847 18.0916H42.9006V1H46.3778ZM53.5341 1L60.0114 19.9552H60.2727L66.75 1H70.5454L62.1704 24.2736H58.1136L49.7386 1H53.5341ZM73.9062 24.2736V1H88.4972V4.02284H77.4176V11.114H87.7358V14.1255H77.4176V21.2508H88.6335V24.2736H73.9062ZM96.6989 1V24.2736H93.1875V1H96.6989ZM101.813 24.2736V1H105.324V21.2508H115.869V24.2736H101.813Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_13">
                <rect width="120" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <nav className="flex items-center msm:hidden">
          {navList.map((n, i) =>
            !n.path ? (
              <button key={n.name + i} className="px-[16px] py-[8px] hover:underline">
                {n.name}
              </button>
            ) : (
              <Link
                onClick={() => setcss({ bg: n.bg, color: n.color })}
                to={n.path}
                key={n.name + i}
                className={`px-[16px] py-[8px] ${n.path == p ? '' : 'hover:underline'}`}
              >
                {n.name}
              </Link>
            )
          )}
        </nav>
        <Mobile css={css} setcss={setcss} />
      </header>
    </div>
  );
};

export default Navbar;

const Mobile = React.memo(({ css, setcss }: { css: any; setcss: any }) => {
  const [open, setOpen] = useCycle(false, true);
  return (
    <>
      <nav onClick={() => setOpen()} className="z-[9] hidden aspect-square place-content-center msm:grid">
        <IoIosMenu className="h-[2rem] w-[2rem]" />
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
            className={`absolute left-0 top-0 z-[1] flex h-[100vh] w-full flex-col items-center justify-center gap-[30px] pb-[5%] text-[22px] bg-${css.bg} saturate-[2] text-${css.color}`}
          >
            {navList.map((n, i) => {
              if (!n.path) {
                return (
                  <button onClick={() => setOpen()} key={n.name + i} className="px-[16px] py-[8px] uppercase">
                    {n.name}
                  </button>
                );
              }
              return (
                <>
                  <Link
                    onClick={() => {
                      setcss({ bg: n.bg, color: n.color });
                      setOpen();
                    }}
                    to={n.path}
                    key={n.name + i}
                    className={`px-[16px] py-[8px] uppercase`}
                  >
                    {n.name}
                  </Link>
                </>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
