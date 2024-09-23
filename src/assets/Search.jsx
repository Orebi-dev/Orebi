import React from "react";
import Container from "./Container";
import Category from "./Category";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import Li from "./Li";
import { CgClose } from "react-icons/cg";

const Search = () => {
  let [arrowDown, setArrowDown] = React.useState(false);
  let [chartOpen, setChartOpen] = React.useState(false);

  return (
    <div className="bg-[#f5f5f3] font-fira">
      <Container>
        <div className=" flex justify-between items-center gap-[100px] bg-[#f5f5f3]">
          <div className=" cursor-pointer">
            <Category />
          </div>
          <div className=" relative ">
            {" "}
            <input
              type="text"
              placeholder="Search Products"
              className="py-4 pr-[55px] pl-[21px] outline-none w-full md:w-[601px]"
            />
            <BiSearch className=" absolute  bottom-[50%] translate-y-[50%] right-[22px] text-[18px]" />
          </div>

          <div className=" hidden md:flex items-center gap-6 ">
            <div
              className="flex items-center gap-x-1 cursor-pointer py-[40px] relative"
              onClick={() => setArrowDown(!arrowDown)}
            >
              <FaUserAlt />{" "}
              {arrowDown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              <div className=" bg-neutral-100 absolute top-[77%] right-0 w-52">
                {" "}
                <Li
                  to="/dashboard"
                  liText="My Account"
                  className={`border text-center py-[15px]   hover:text-white hover:bg-[#2B2B2B] ${arrowDown ? "block" : "hidden"}`}
                />
                <Li
                  to="/login"
                  liText="Log In"
                  className={` border-b border-l border-r text-center py-[15px]  top-[77%] right-0 w-52 hover:text-white hover:bg-[#2B2B2B] ${arrowDown ? "block" : "hidden"}`}
                />
              </div>
            </div>

            {/* Add to Cart */}

            <div className={`relative py-10`}>
              {" "}
              <FaCartShopping
                onClick={() => setChartOpen(!chartOpen)}
                className=" cursor-pointer"
              />{" "}
              <div
                className={`bg-[#F5F5F3] border absolute top-[77%] right-[0] w-[358px]  ${chartOpen ? "block" : "hidden"}`}
              >
                <div className="relative">
                  <div className="p-5 flex gap-5 items-center">
                    <div className=" w-20 h-20 bg-[#D8D8D8] "></div>
                    <div className=" space-y-2 font-medium">
                      <p>Black Smart Watch</p>
                      <p>$44.00</p>
                    </div>
                  </div>

                  <div className=" absolute bottom-1/2 translate-y-[50%] right-5 cursor-pointer">
                    <CgClose />
                  </div>
                </div>

                <div className="bg-white p-5 space-y-[13px]">
                  <p>
                    Subtotal: <span className="font-bold">$44.00</span>
                  </p>
                  <div className="flex gap-x-[21px]">
                    <button className=" border border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white py-3 w-[148px]">
                      View Cart
                    </button>
                    <button className=" border border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white py-3 w-[148px]">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
