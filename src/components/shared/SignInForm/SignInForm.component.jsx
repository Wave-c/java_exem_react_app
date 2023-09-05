import React from "react";
import "./SignInForm.component.css";
import Logo from "../../../Resours/Logo.png"
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const SignInForm = (props) => 
{ 
  let inputRefs = new Array();

  for(let i = 0; i < 2; i++)
  {
    inputRefs.push(React.createRef());
  }

  const onButtonClick = () =>
  { 
    var signInUser = {
      "username" : inputRefs[0].current.value,
      "password" : inputRefs[1].current.value
    };
    fetch("http://localhost:8080/auth/sign-in",
    {
      method: "POST",
      
      body: JSON.stringify(signInUser),
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

  return (
    <div className="SignInForm">
      <Link to="/"><img id="logo" src={Logo} alt="Logo"/></Link>
      <div id="login-form-main-div">
        <h1>Войти</h1>
        <div id="sub-login-form-div">
          <input ref={inputRefs[0]} type="text" placeholder="Логин" id="login-input"/>
          <input ref={inputRefs[1]} type="password" placeholder="Пароль" id="password-input"/>
          <button id="login" onClick={onButtonClick}>Войти</button>
        </div>
      </div>
    </div>
  ); 
};

export default SignInForm;