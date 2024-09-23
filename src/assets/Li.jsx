import React from "react";
import { Link } from "react-router-dom";

const Li = ({ liText, to, className }) => {
  return (

      <ul>
        <li><Link activeStyle={{color: "red"}} activeClassname='active' className={`${className}`} to={to}>{liText}</Link></li>
      </ul>
 
  );
};

export default Li;
