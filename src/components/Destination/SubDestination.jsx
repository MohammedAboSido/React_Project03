import React from "react";
import destinationData from "./Data";
import style from "./style.module.css";

export default function SubDestination() {
  return (
    <>
      {destinationData.map((item) => {
        return (
          <div
            className={item.id === 1 ? style.firstDes : style.secondDes}
            key={item.id}
          >
            <div className={style.desText}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className={style.image}>
              <img alt="img" src={item.img1} />
              <img alt="img" src={item.img2} />
            </div>
          </div>
        );
      })}
    </>
  );
}
