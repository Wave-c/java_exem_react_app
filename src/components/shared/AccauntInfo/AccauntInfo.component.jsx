import React from "react";
import "./AccauntInfo.component.css";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

const AccauntInfo = (props) => { 
  let inputRefs = new Array();

  for(let i = 0; i < 7; i++)
  {
    inputRefs.push(React.createRef());
  }

  const [user, setUser] = useState({});
  const cookie = new Cookies();

  useEffect(() => {
    fetch("http://localhost:8080/secured/get-accaunt-data",
    {
      method: "GET",
      headers: 
      {
        "Authorization" : "Bearer " + cookie.get("jwt"),
        "Content-Type" : "application/json"
      }
    })
      .then(async response => JSON.parse((await response.text()).split("ne splituy suka")))
      .then(res => {setUser(res); console.log(res)});
  }, user);


  return (
    <div className="AccauntInfo">
      <h5>Имя пользователя</h5>
      <input type="text" ref={inputRefs[0]} value={user.username}/>
      <h5>Пароль</h5>
      <input type="text" ref={inputRefs[1]} value={user.password}/>
      <h5>Имя</h5>
      <input type="text" ref={inputRefs[2]} value={user.firstName}/>
      <h5>Фамилия</h5>
      <input type="text" ref={inputRefs[3]} value={user.lastName}/>
      <h5>Отчество</h5>
      <input type="text" ref={inputRefs[4]} value={user.patronymic}/>
      <h5>Страна</h5>
      <input type="text" ref={inputRefs[5]} value={user.country}/>
      <h5>Город</h5>
      <input type="text" ref={inputRefs[6]} value={user.city}/>
    </div>
  ); 
};

export default AccauntInfo;