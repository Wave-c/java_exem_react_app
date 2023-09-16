import React from "react";
import "./MyOrderLi.component.css";

const MyOrderLi = (props) => { 
  return (
    <li className="MyOrderLi">
      <h2>{props.room.title}</h2>
    </li>
  ); 
};

export default MyOrderLi;