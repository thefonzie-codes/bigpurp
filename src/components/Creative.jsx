import React from "react";
import "../styles/Creative.css";
import Meguro from "../images/Prague.jpg";

export default function Creative (){
  return (
    <div className="Creative">
      <img className="Creative__img" src={Meguro}></img>
    </div>
  )
};