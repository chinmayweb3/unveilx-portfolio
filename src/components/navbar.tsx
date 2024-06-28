import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-black">
      <header className="mx-auto max-w-[1280px] h-[91px] flex items-center justify-between ">
        <Link to={"/"}>
          <img src="https://cdn.prod.website-files.com/6669563d598cbb2a4f78544f/666b4b63ff948b19b104c941_Unveil%20X.svg" />
        </Link>
        <nav className="flex items-center">
          <Link className="px-[16px] py-[8px]" to={"/"}>
            Home
          </Link>
          <Link className="px-[16px] py-[8px]" to={"/about"}>
            About
          </Link>
          <Link className="px-[16px] py-[8px]" to={"/"}>
            Work
          </Link>
          <Link className="px-[16px] py-[8px]" to={"/"}>
            Blog
          </Link>
          <Link className="px-[16px] py-[8px]" to={"/"}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
