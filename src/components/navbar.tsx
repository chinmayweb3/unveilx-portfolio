import { Link } from "react-router-dom";

const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "" },
  { name: "Blog", path: "" },
  { name: "Contact", path: "" },
];

const Navbar = () => {
  return (
    <div className="w-full px-[60px] bg-black">
      <header className="mx-auto max-w-[1280px] h-[91px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="w-[104px]"
            src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/666b4b63ff948b19b104c941_Unveil%20X.svg"
          />
        </Link>
        <nav className="flex items-center">
          {navList.map((n, i) =>
            !n.path ? (
              <button className="px-[16px] py-[8px] hover:underline">
                {n.name}
              </button>
            ) : (
              <Link
                to={n.path}
                key={i}
                className={`px-[16px] py-[8px] ${
                  n.path == location.pathname ? "" : "hover:underline"
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
