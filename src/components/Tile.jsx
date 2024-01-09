import React from "react";
import "../styles/Tile.css";

export default function Tile ({src, alt}){ 
  return (
    <div className={"Tile"} style={{backgroundImage: `url(${src})` }}>
      {/* <img className={"Tile__img"}  alt={alt}></img> */}
      <h1>{alt}</h1>
    </div>
  )
};