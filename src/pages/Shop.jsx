import React from "react";
import Container from "../assets/Container";

const Shop = () => {
  return (
    <div className=" font-fira">
      <Container className={`pt-[100px]`}>
        <h1 className="text-[49px] text-[#262626]">
          {" "}
          {window.location.pathname.split("/")[1]}{" "}
        </h1>
        <p className="text-[16px] text-[#262626]">
          {" "}
          Home {"> "} {window.location.pathname.split("/")[1]}{" "}
        </p>
      </Container>
    </div>
  );
};

export default Shop;
