import React from "react";
import "./AccauntInfo.component.css";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

function sendFileToServer(file, cookie, user) {
  var reader = new FileReader();
  var fileByteArray = [];
  reader.readAsArrayBuffer(file);
  reader.onloadend = function (evt) {
    if (evt.target.readyState == FileReader.DONE) {
       var arrayBuffer = evt.target.result,
           array = new Uint8Array(arrayBuffer);
       for (var i = 0; i < array.length; i++) {
           fileByteArray.push(array[i]);
      }
    }
    console.log(fileByteArray);
    
    fetch("http://185.187.90.17:8080/secured/set-accaunt-img",
    {
      method: "POST",
      headers:
      {
        "Authorization" : "Bearer " + cookie.get("jwt"),
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        accauntImg: fileByteArray,
        userName: user.username
      })
    })
  }
}

const AccauntInfo = (props) => { 
  let inputRefs = new Array();

  for(let i = 0; i < 8; i++)
  {
    inputRefs.push(React.createRef());
  }

  const [user, setUser] = useState({});
  const cookie = new Cookies();

  const onValueChange = (e)=>
  {
    var file;
    e.preventDefault();

    console.log(e.dataTransfer);

    file = e.dataTransfer.files[0];

    console.log(file);

    sendFileToServer(file, cookie, user);
  }

  useEffect(() => {
    fetch("http://185.187.90.17:8080/secured/get-accaunt-data",
    {
      method: "GET",
      headers: 
      {
        "Authorization" : "Bearer " + cookie.get("jwt"),
        "Content-Type" : "application/json"
      }
    })
      .then(async response => 
      {
        if(response.status === 401)
        {
          window.location.replace("/sign-in-form");
        }
        if(response.status === 200)
        {
          JSON.parse((await response.text()).split("ne splituy"))
        }
      })
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
      <br/>
      <input type="file" ref={inputRefs[7]} onDrop={onValueChange}/>
    </div>
  ); 
};

export default AccauntInfo;