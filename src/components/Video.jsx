import React from "react";
import "../styles/Video.css";
import Cat from "../images/ShinjukuCat.mp4";

export default function Video (){
  return (
    <div className="Video">
      <video autoPlay muted loop className="Video__video" src={Cat}></video>
    </div>
  )
};