import React from "react";
import "./SignInOrRegisterOrAccaunt.component.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useState } from "react";

const SignInOrRegisterOrAccaunt = (props) => { 
  const [accauntImg, setAccauntImg] = useState();
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
    const base64ToArrayBuffer = (base64) => {
      var binaryString = window.atob(base64);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      return bytes;
    }
  
  
  
   const handleFileDataType = ext => {
      switch (ext) {
        case 'pdf':
          return 'application/pdf';
        case 'jpg':
          return 'image/jpeg';
        case 'jpeg':
          return 'image/jpeg';
        case 'png':
          return 'image/png';
        case 'tiff':
          return 'image/tiff';
        case 'docx':
          return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      }
    };

    var userName;
    fetch("http://185.187.90.17:8080/secured/accaunt",
    {
      method:"GET",
      headers:{
        "Authorization" : "Bearer " + cookie.get("jwt")
      }
    })
    .then(async response => response.status===401 ? window.location.replace("/sign-in-form"): await response.text())
    .then(res => 
    {
      userName = res; 
      console.log(res)
    });
    // .then(()=>{
    //   fetch("http://localhost:8080/secured/get-accaunt-img?" + new URLSearchParams({userName: userName}),
    //   {
    //     headers:
    //     {
    //        method:"GET",
    //        "Authorization" : "Bearer " + cookie.get("jwt")
    //     }
    //   })
    //   .then(async res => 
    //     {
    //       setAccauntImg(
    //         new File(
    //           [base64ToArrayBuffer(await res.text())], "accauntImg", 
    //           { 
    //             type: handleFileDataType("jpg"), 
    //             lastModified: new Date() 
    //           }
    //         )
    //       )
    //     }
    //   );
    // });
    return (
      <>
        <div id="to-rent-out-div">
          <Link to="/to-rent-out">
            <h4>Сдать в аренду</h4>
          </Link>
        </div>
        <Link to={'/accaunt'}>
          <Avatar size="70px" round={true}/>
        </Link>
      </>
    )
  }
};

export default SignInOrRegisterOrAccaunt;