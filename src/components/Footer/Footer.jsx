import React from "react";
import Icon from "../Icon/Icon";
import Referace from "../Referace/Referace";
import { iconData, referaceData } from "./Data";
import style from "./style.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.top}>
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          {iconData.map((item) => {
            return <Icon iconName={item.iconName} key={item.id} />;
          })}
        </div>
      </div>
      <div className={style.bottom}>
        {referaceData.map((item) => {
          return <Referace title={item.title} reff={item.reff} key={item.id} />;
        })}
      </div>
    </div>
  );
}
