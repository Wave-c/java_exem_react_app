import React from "react";
import "./RegisterForm.component.css";
import Logo from "../../../Resours/Logo.png";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const RegisterForm = (props) => 
{ 
  let inputRefs = new Array();
  for(let i = 0; i < 7; i++)
  {
    inputRefs.push(React.createRef());
  }

  const onButtonClick = () =>
  {
    var regUser = {
      "last_name" : inputRefs[0].current.value,
      "first_name" : inputRefs[1].current.value,
      "patronymic" : inputRefs[2].current.value,
      "country" : inputRefs[3].current.value,
      "city" : inputRefs[4].current.value,
      "username" : inputRefs[5].current.value,
      "password" : inputRefs[6].current.value
    }
    fetch("http://185.187.90.17:8080/auth/registration",
    {
      method : "POST",

      body : JSON.stringify(regUser),

      headers :
      {
        "Content-Type": "application/json"
      }
    }).then(async(response) => 
      {
        if(response.status == 200)
        {
          fetch("http://185.187.90.17:8080/auth/sign-in",
          {
            method: "POST",

            body: JSON.stringify({
              "username" : inputRefs[5].current.value,
              "password" : inputRefs[6].current.value
            }),
            headers: 
            {
              "Content-Type": "application/json"
            }
          
            }).then(async (response) => 
              { 
                var jwt = await response.text().then(result => result);
                console.log(jwt);
                if(jwt != null)
                {
                  var cookie = new Cookies();
                  cookie.set("jwt", jwt);
                  console.log("cookie jwt: " + cookie.get("jwt"));
                  window.location.replace("/");
                }
                else
                {
                
                }
              });
        }
      });

    //window.location.replace("/");
  }

  return (
    <div className="RegisterForm">
      <Link to="/"><img id="logo" src={Logo} alt="Logo"/></Link>
      <div id="register-form-main-div">
        <h1>Регистрация</h1>
        <div id="sub-register-form-div">
          <input ref={inputRefs[0]} type="text" placeholder="Фамилия" id="last-name-input"/>
          <input ref={inputRefs[1]} type="text" placeholder="Имя" id="first-name-input"/>
          <input ref={inputRefs[2]} type="text" placeholder="Отчество" id="patronymic-input"/>
          <input ref={inputRefs[3]} type="text" placeholder="Страна" id="country-input"/>
          <input ref={inputRefs[4]} type="text" placeholder="Город" id="city-input"/>
          <input ref={inputRefs[5]} type="text" placeholder="Логин" id="login-input"/>
          <input ref={inputRefs[6]} type="password" placeholder="Пароль" id="password-input"/>
          <button id="register" onClick={onButtonClick}>Зарегестрироваться</button>
        </div>
      </div>
    </div>
  ); 
};

export default RegisterForm;