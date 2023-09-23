import React, { Component } from "react";
import "./Room.component.css";
import Header from "../Header/Header.component.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PaymentInfoBar from "../PaymentBar/PaymenInfotBar.component";
import ErrorPage from "../../error-page";
import Cookies from "universal-cookie";

const Room = (props) => { 
  var room = useLocation();
  const [typeOfRent, setTypeOfRent] = useState(room.state.typeOfRental === true ? "месяц" : "день");
  const [showPaymentBar, setShowPaymentBar] = useState(false);
  var ref = React.createRef();
  const cookie = new Cookies();

  const onCLickHandler = () =>
  {
    setShowPaymentBar(true);
    fetch("http://185.187.90.17:8080/secured/rent-a-room",
    {
      body: JSON.stringify(room.state),
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + cookie.get("jwt")
      }
    })
    .then(response =>
    {
      if(response.status === 200)
      {
        window.location.replace("/");
      }
      else if(response.status === 401)
      {
        window.location.replace("/sign-in-form")
      }
      else
      {
        return (
          <ErrorPage/>
        )
      }
    });
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
        { showPaymentBar ? <PaymentInfoBar/> : null }
      </div>
    </div>
  ); 
};

export default Room;