import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbCategoryMinus, TbCategoryPlus } from "react-icons/tb";

const Category = () => { 
  let [cateIcon, setCateIcon] = useState(false);
  let category = ["Furniture", "Electronics", "Clothes", "Bags"];
  let category2 = {
    Fruiture: ["Chairs", "Tables", "Sofas"],
    Electronics: ["Laptops", "Mobile Phones", "TVs"],
    Clothes: ["Dresses", "man", "women"],
    Bags: ["Handbags", "Wallets", "Shoes"],
  };
  let [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className=" relative">
      <div className="flex items-center gap-x-4 py-[40px]">
        <div onClick={() => setCateIcon(!cateIcon)}>
          {cateIcon ? (
            <TbCategoryMinus className="text-[18px]" />
          ) : (
            <TbCategoryPlus className="text-[18px]" />
          )}
        </div>
        <div
          className={`cursor-pointer`}
          onClick={() => setCateIcon(!cateIcon)}
        >
          <h1 className="hidden md:block font-medium">Shop by Category</h1>
        </div>
      </div>

      <div
        className={` absolute top-[77%] z-50 ${cateIcon ? "block" : "hidden"}`}
      >
        {Object.keys(category2).map((category) => (
          <div className=" relative" key={category}>
            <ul
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className=" w-[263px] transition-all duration-300 bg-[#262626]"
            >
              <li
                className={`px-4 ${hoveredCategory === category ? "pl-8" : ""} hover:pl-8 transition-all duration-500 text-white py-3 border-t-[1px] relative `}
              >
                {category}{" "}
                <div className="hidden md:block">
                  {" "}
                  <MdOutlineKeyboardArrowRight className=" absolute bottom-1/2 translate-y-[50%] right-[5px] visible" />{" "}
                </div>
                <div className="md:hidden">
                  {hoveredCategory === category ? (
                    <MdKeyboardArrowDown className=" absolute bottom-1/2 translate-y-[50%] right-[5px] visible" />
                  ) : (
                    <MdOutlineKeyboardArrowRight className=" absolute bottom-1/2 translate-y-[50%] right-[5px] visible" />
                  )}
                </div>
              </li>{" "}
              <ul
                className={` md:hidden ${hoveredCategory === category ? "block" : "hidden"}`}
              >
                {category2[category].map((subcategory) => (
                  <li
                    className="hover:bg-slate-200 hover:text-[#171717] pl-4 text-white py-2 "
                    key={subcategory}
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        ))}


        {hoveredCategory === category ?
        <div className="absolute top-0 left-full">
        {Object.keys(category2).map((category) => (
          <ul>
            {category2[category].map((subcategory) => (
              <li
                className="hover:bg-slate-200 hover:text-[#171717] pl-4 text-black py-2 "
                key={subcategory}
              >
                {subcategory}
              </li>
            ))}
          </ul>
        ))}
      </div> : null}

      </div>
    </div>
  );
};

export default Category;
