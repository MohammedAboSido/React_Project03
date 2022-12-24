import React from "react";
import style from "./style.module.css";
import SubDestination from "./SubDestination";

export default function Destination() {
  return (
    <div className={style.destination}>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportuniy to see a ot vithin a time frome</p>
      <SubDestination />
    </div>
  );
}
