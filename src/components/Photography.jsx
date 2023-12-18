import React from "react";
import "../styles/Photography.css";
import Temple from "../images/Fushimi Inari.jpg"

export default function Photography (){
  return (
    <div className="Photography">
      <img className="Photography__img" src={Temple}></img>
    </div>
  )
};