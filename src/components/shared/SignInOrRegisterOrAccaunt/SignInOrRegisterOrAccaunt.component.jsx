import React from "react";
import "./SignInOrRegisterOrAccaunt.component.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const SignInOrRegisterOrAccaunt = (props) => { 
  var cookie = new Cookies();
  if(cookie.get("jwt") == null)
  {
    return (
      <>
        <Link to={`/sign-in-form`}><button id="signin-button">Sign in</button></Link>
        <Link to={`/register-form`}><button id="register-button">Register</button></Link>
      </>
      )
  }
  else
  {
    
    return (
      <Link to={'/accaunt'}>
        <Avatar size="70px" round={true}/>
      </Link>
    )
  }
};

export default SignInOrRegisterOrAccaunt;