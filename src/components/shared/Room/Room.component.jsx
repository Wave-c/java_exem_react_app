import React from "react";
import "./Room.component.css";
import Header from "../Header/Header.component.jsx";
import { useLocation } from "react-router-dom";

const Room = (props) => { 
  var room = useLocation();
  return (
    <div className="Room">
      <Header/>
      <h1>{room.state.street}</h1>
    </div>
  ); 
};

export default Room;