import React from "react";
import "./Header.component.css"
import Logo from "../../../Resours/Logo.png";
import { Link } from "react-router-dom";
import SignInOrRegisterOrAccaunt from "../SignInOrRegisterOrAccaunt/SignInOrRegisterOrAccaunt.component.jsx";


const Header = (props) => { 

  return (
    <div id="Header">
      <Link to="/"><img id="logo" src={Logo} alt="Logo"/></Link>
      <b><span id="name">Аренда помещений</span></b>
      <SignInOrRegisterOrAccaunt></SignInOrRegisterOrAccaunt>
    </div>
  ); 
};

export default Header;