import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" fixed w-[100%] z-50 bg-primaryColor mt-[-2rem] md:mt-0">
      {/* nav-center  */}
      <div className="p-5 flex justify-between items-center md:container mx-auto ">
        <div className="w-[40%]  mt-[0] md: mt-[0]  large:mt-[0] ">
          <img src="./images/logo.svg " alt="logo" />
        </div>
        {/* btn  */}
        <div className="end self-end flex gap-8 items-center">
          {/* Home  */}
          <div className="hidden smax:block">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="pointer"
            >
              <h3 className="text-white text-xl"> Home</h3>
            </Link>
          </div>
          {/* feature */}
          <div className="hidden smax:block">
            <Link
              to="Features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="pointer"
            >
              <h3 className="text-white text-xl"> Feature</h3>
            </Link>
          </div>
          <button className="  p-[.1rem] bg-gradient-to-r from-darkGradient to-lightGradient rounded-full focus:outline-none">
            <span className="nav-btn fsize  block text-white px-5 py-2 rounded-full bg-[#121B27]">
              <Link
                to="Access"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="pointer"
              >
                Get Priority Access
              </Link>
            </span>
          </button>
        </div>
      </div>
      {/* end of nav-center  */}
    </nav>
  );
};

export default Navbar;
