import React from "react";
import "./Accaunt.component.css";
import Header from "../Header/Header.component.jsx";
import AccauntInfo from "../AccauntInfo/AccauntInfo.component.jsx";

const Accaunt = (props) => { 
  

  return (
    <div className="Accaunt">
      <Header/>
      <AccauntInfo/>
      {/* <input type="file" name="fileIn" ref={inputRef} />
      <button>Send</button> */}
    </div>
  ); 
};

export default Accaunt;