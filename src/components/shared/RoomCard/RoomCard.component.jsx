import React from "react";
import "./RoomCard.component.css";
import { Link } from "react-router-dom";

const RoomCard = (props) => { 
  var link = "/rooms/" + props.room.id;
  console.log(link);
  return (
    <div className="RoomCard">
      <img width="100px" height="100px" href="" alt="rooms"/>
      <Link to={link} state={props.room}><span className="address">{props.room.street + " " + props.room.houseNumber}</span></Link>
    </div>
  ); 
};

export default RoomCard;