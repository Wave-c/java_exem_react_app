import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header.component";
import Cookies from "universal-cookie";
import RoomCard from "../RoomCard/RoomCard.component";
import "./ApplicationsList.component.css";
import Applications from "../Applications/Applications.component";

const ApplicationsList = (props) => { 
  const [roomsAndIdsList, setRoomsAndIdsList] = useState([]);
  const cookie = new Cookies();

  useEffect(()=>{
    fetch("http://185.187.90.17:8080/secured/get-applications",
    {
      method: "GET",
      headers: 
      {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + cookie.get("jwt")
      }
    })
    .then(async response =>
      {
        setRoomsAndIdsList(JSON.parse((await response.text())));
      });
  }, [])

  return (
    <div className="ApplicationsList">
      <Header/>
      {
        roomsAndIdsList.map((component, index) => (
                    <React.Fragment key={index}>
                        <Applications room={component.room} a_id={component.id}/>
                    </React.Fragment>
                ))
        }
    </div>
  ); 
};

export default ApplicationsList;