import React from "react";
import { navbarData } from "./Data";
import style from "./style.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={style.navbarItems}>
        <h1 className={style.navbarLogo}>Trippy</h1>
        <ul className={style.navMenu}>
          {navbarData.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.url}
                  className={
                    item.cName === "navLinks"
                      ? style.navLinks
                      : style.navLinksMobile
                  }
                >
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
}
