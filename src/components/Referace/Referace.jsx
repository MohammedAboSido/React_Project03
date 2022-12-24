import React from "react";
import { Link } from "react-router-dom";

export default function Referace({ title, reff }) {
  return (
    <div>
      <h4>{title}</h4>
      {reff.map((item, index) => {
        return (
          <Link to="/" key={index}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
