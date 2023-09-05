import React from "react";
import "./RegisterForm.component.css";
import Logo from "../../../Resours/Logo.png";
import { Link } from "react-router-dom";

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
      "lastName" : inputRefs[0].current.value,
      "firstName" : inputRefs[1].current.value,
      "patronymic" : inputRefs[2].current.value,
      "country" : inputRefs[3].current.value,
      "city" : inputRefs[4].current.value,
      "login" : inputRefs[5].current.value,
      "password" : inputRefs[6].current.value
    }
    fetch("http://localhost:8080/auth/register",
    {
      method : "POST",

      body : JSON.stringify(regUser),

      headers :
      {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((response) => 
      {
        //void
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