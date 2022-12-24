import React from "react";
import tripData from "./Data";
import style from "./style.module.css";
import Trip from "./Trip";

export default function SuperTrip() {
  return (
    <div className={style.trip}>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Map</p>
      <div className={style.tripCard}>
        {tripData.map((item) => {
          return (
            <Trip
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
