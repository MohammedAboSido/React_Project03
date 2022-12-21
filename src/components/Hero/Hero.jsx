import React from "react";
import style from "./style.module.css";

export default function Hero(props) {
  return (
    <>
      <div className={style[props.cName]}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className={style.heroText}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={style[props.btnClass]}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}
