import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const navList = [
  { name: "Home", path: "/", color: "white", bg: "black" },
  { name: "About", path: "/about", color: "black", bg: "gray2" },
  { name: "Work", path: "", color: "white", bg: "black" },
  { name: "Blog", path: "", color: "white", bg: "black" },
  { name: "Contact", path: "", color: "white", bg: "black" },
];

const Navbar = () => {
  const [css, setcss] = React.useState({ bg: "black", color: "white" });
  const p = location.pathname;

  useEffect(() => {
    const n = navList.find((n) => n.path == p);
    setcss({ bg: n?.bg ?? "black", color: n?.color ?? "white" });
  }, []);

  return (
    <div className={`w-full px-[60px] bg-${css.bg} text-${css.color}`}>
      <header className="mx-auto max-w-[1280px] h-[91px] flex items-center justify-between">
        <Link onClick={() => setcss({ bg: "black", color: "white" })} to={"/"}>
          <svg
            className="w-[104px]"
            width="143"
            height="25"
            viewBox="0 0 143 25"
            fill="none"
          >
            <path
              fill={css.color}
              d="M15.6946 0.727272H19.2173V16.0341C19.2173 17.6629 18.8348 19.1061 18.0696 20.3636C17.3045 21.6136 16.2287 22.5985 14.8423 23.3182C13.456 24.0303 11.831 24.3864 9.96733 24.3864C8.11127 24.3864 6.49006 24.0303 5.10369 23.3182C3.71733 22.5985 2.64157 21.6136 1.87642 20.3636C1.11127 19.1061 0.728693 17.6629 0.728693 16.0341V0.727272H4.24006V15.75C4.24006 16.803 4.47112 17.7386 4.93324 18.5568C5.40294 19.375 6.06581 20.0189 6.92188 20.4886C7.77794 20.9508 8.79309 21.1818 9.96733 21.1818C11.1491 21.1818 12.1681 20.9508 13.0241 20.4886C13.8878 20.0189 14.5469 19.375 15.0014 18.5568C15.4635 17.7386 15.6946 16.803 15.6946 15.75V0.727272ZM43.1065 0.727272V24H39.8793L28.0497 6.93182H27.8338V24H24.3224V0.727272H27.5724L39.4134 17.8182H39.6293V0.727272H43.1065ZM50.2628 0.727272L56.7401 19.6818H57.0014L63.4787 0.727272H67.2741L58.8991 24H54.8423L46.4673 0.727272H50.2628ZM70.6349 24V0.727272H85.2259V3.75H74.1463V10.8409H84.4645V13.8523H74.1463V20.9773H85.3622V24H70.6349ZM93.4276 0.727272V24H89.9162V0.727272H93.4276ZM98.5412 24V0.727272H102.053V20.9773H112.598V24H98.5412ZM127.516 0.727272L133.084 9.82955H133.266L138.834 0.727272H142.902L135.652 12.3636L142.947 24H138.857L133.266 15.0227H133.084L127.493 24H123.402L130.822 12.3636L123.447 0.727272H127.516Z"
            />
          </svg>
        </Link>
        <nav className="flex items-center">
          {navList.map((n, i) =>
            !n.path ? (
              <button className="px-[16px] py-[8px] hover:underline">
                {n.name}
              </button>
            ) : (
              <Link
                onClick={() => setcss({ bg: n.bg, color: n.color })}
                to={n.path}
                key={i}
                className={`px-[16px] py-[8px] ${
                  n.path == p ? "" : "hover:underline"
                }`}
              >
                {n.name}
              </Link>
            )
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
