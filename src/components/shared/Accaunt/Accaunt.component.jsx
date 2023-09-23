import React from "react";
import "./Accaunt.component.css";
import Header from "../Header/Header.component.jsx";
import AccauntInfo from "../AccauntInfo/AccauntInfo.component.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import MyOrderLi from "../MyOrderLi/MyOrderLi.component";
import { Link } from "react-router-dom";

const Accaunt = (props) => { 
  const cookie = new Cookies();
  const [rentaledRooms, setRentaledRooms] = useState([]);
  useEffect(()=>
  {
    fetch("http://185.187.90.17:8080/secured/get-rentaled-rooms", 
    {
      method:"GET",
      headers:{
        "Authorization" : "Bearer " + cookie.get("jwt")
      }
    })
    .then(async response => {
      setRentaledRooms(JSON.parse((await response.text())));
      console.log(rentaledRooms);
    })
  }, rentaledRooms);

  return (
    <div className="Accaunt">
      <Header/>
      <AccauntInfo/>
      <Link to="applications">посмотреть заявки</Link>
      <div>
        <ol>
          {
            rentaledRooms.map((component, index) => (
              <React.Fragment key={index}>
                <MyOrderLi room={component}/>
              </React.Fragment>
            ))
          }
        </ol>
      </div>
    </div>
  ); 
};

export default Accaunt;