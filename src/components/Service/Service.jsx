import React from "react";
import serviceData from "./Data";
import style from "./style.module.css";
import SubService from "./SubService";
export default function Service() {
  return (
    <div className={style.serviceContainer}>
      {serviceData.map((item) => {
        return (
          <SubService
            title={item.title}
            description={item.description}
            key={item.id}
          />
        );
      })}
    </div>
  );
}
