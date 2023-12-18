import React from "react";
import "../styles/Navigation.css";
import Logo from "../images/BigPurpSketchTransparent.png";

export default function Navigation (){
  return (
    <div className="Navigation">
      <img className="Navigation__img" src={Logo}></img>
    </div>
  )
};