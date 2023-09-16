import React from "react";
import "./Room.component.css";
import Header from "../Header/Header.component.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Room = (props) => { 
  var room = useLocation();
  const [typeOfRent, setTypeOfRent] = useState(room.state.typeOfRental === true ? "месяц" : "день");
  
  const onCLickHandler = () =>
  {

  }

  return (
    <div className="Room">
      <Header/>
      <div className="info-div">
        <h1>{room.state.title}</h1>
        <h4>Описание:</h4>
        <span>{room.state.description}</span>
      </div>
      <div className="payment-info-div">
        <span>От {room.state.price}р в {typeOfRent}</span><br/>
        <button onClick={onCLickHandler}>Снять</button>
      </div>
    </div>
  ); 
};

export default Room;