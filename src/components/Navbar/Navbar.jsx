import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./Data";
import style from "./style.module.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <>
      <nav className={style.navbarItems}>
        <h1 className={style.navbarLogo}>Trippy</h1>
        <div className={style.menuIcons} onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={
            clicked ? ` ${style.navMenuActive} ${style.navMenu}` : style.navMenu
          }
        >
          {navbarData.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.url}
                  className={
                    item.cName === "navLinks"
                      ? style.navLinks
                      : style.navLinksMobile
                  }
                >
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
}
