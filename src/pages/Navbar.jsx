import React, { useCallback } from "react";

import Container from "../assets/Container";
import Li from "../assets/Li";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  let [arrowDown, setArrowDown] = React.useState(false);

  return (
    <nav className="bg-white font-fira">
      <Container>
        <div className="flex justify-between items-center ">
          <div>
            <img className="py-5" src="/Logo.png" alt="public/Logo.png" />
          </div>
          <div className=" hidden md:block">
            <ul className="flex gap-x-[40px] py-[31px]">
              <Li  className='font-normal text-[#000000] hover:text-black' to="/" liText="Home" />
              <Li className='font-normal  text-[#717070] hover:text-black' to="/products" liText="Shop" />
              <Li className='font-normal  text-[#717070] hover:text-black' to="/about" liText="About" />
              <Li className='font-normal  text-[#717070] hover:text-black' to="/contacts" liText="Contacts" />
              <Li className='font-normal  text-[#717070] hover:text-black' to="/journal" liText="Journal" />
            </ul>
          </div>
          <div><div className="flex md:hidden items-center gap-4">
            <div
              className="flex items-center gap-x-1 cursor-pointer"
              onClick={() => setArrowDown(!arrowDown)}
            >
              <FaUserAlt />{" "}
              {arrowDown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            <FaCartShopping />{" "}
          </div></div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
