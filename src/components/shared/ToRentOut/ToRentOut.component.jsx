import React from "react";
import Header from "../Header/Header.component";
import "./ToRentOut.component.css";
import Cookies from "universal-cookie";

const ToRentOut = (props) => { 
  var inputRefs = new Array(11);

  var cookie = new Cookies();

  for(let i = 0; i < 11; i++)
  {
    inputRefs[i] = React.createRef();
  }

  const onClickHandler = () =>
  {
    var request = {
      title: inputRefs[0].current.value,
      description: inputRefs[1].current.value,
      //titleImg: inputRefs[2].current.files[0],
      country: inputRefs[3].current.value,
      city: inputRefs[4].current.value,
      street: inputRefs[5].current.value,
      houseNumber: inputRefs[6].current.value,
      floorNumber: inputRefs[7].current.value,
      apartmentNumber: inputRefs[8].current.value,
      price: inputRefs[9].current.value,
      typeOfRental: inputRefs[10].current.value == "день" ? true : false,
    }
    var responseString;

    fetch("http://localhost:8080/secured/to-rent-out",
    {
      body: JSON.stringify(request),
      method:"POST",
      headers: 
      {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + cookie.get("jwt")
      }
    }).then(async response => 
      {
        responseString = await response.text();
      })
      if(responseString === "ok")
      {
        window.location.replace("/");
      }
  }

  return (
    <div className="ToRentOut">
      <Header/>
      <input type="text" placeholder="Название" ref={inputRefs[0]}/><br/>
      <input type="text" placeholder="Описание" ref={inputRefs[1]}/><br/>
      <input type="file" ref={inputRefs[2]}/><br/>
      <input type="text" placeholder="Страна" ref={inputRefs[3]}/><br/>
      <input type="text" placeholder="Город" ref={inputRefs[4]}/><br/>
      <input type="text" placeholder="Улица" ref={inputRefs[5]}/><br/>
      <input type="text" placeholder="Номер дома" ref={inputRefs[6]}/><br/>
      <input type="text" placeholder="Этаж" ref={inputRefs[7]}/><br/>
      <input type="text" placeholder="Номер квартиры" ref={inputRefs[8]}/><br/>
      <input type="text" placeholder="Цена" ref={inputRefs[9]}/><br/>
      <input type="text" placeholder="Тип аренды (месяц/день)" ref={inputRefs[10]}/><br/>
      <input type="button" onClick={onClickHandler} value="Submit"/>
    </div>
  ); 
};

export default ToRentOut;