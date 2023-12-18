import React from "react";
import "../styles/AboutUs.css";
import Kirk from "../images/AboutUs.jpg";

export default function AboutUs (){
  return (
    <div className="AboutUs">
      <img className="AboutUs__img" src={Kirk}></img>
    </div>
  )
};