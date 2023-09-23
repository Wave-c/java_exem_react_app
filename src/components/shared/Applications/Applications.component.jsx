import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import RoomCard from "../RoomCard/RoomCard.component";
import Cookies from "universal-cookie";
import "./Applications.component.css";



const Applications = (props) => { 
  const [okOrCancel, setOkOrCancel] = useState(null);

  const cookie = new Cookies();
    useEffect(() =>
    {
      if(okOrCancel !== null)
      {
        fetch("http://185.187.90.17:8080/secured/access-or-not?"+new URLSearchParams(
          {
            isAccess : okOrCancel,
            roomId : props.room.id,
            applicationId : props.a_id
          }),
        {
          method: "GET",
          headers:
          {
            "Authorization" : "Bearer " + cookie.get("jwt")
          }
        })
        .then(response=>{});
      }
    }, okOrCancel);

  return (
    <div className="Applications">
      <RoomCard room={props.room}/>
      <button onClick={()=>setOkOrCancel(true)}>Ok</button>
      <button onClick={()=>setOkOrCancel(false)}>Cancel</button>
    </div>
  ); 
};

export default Applications;