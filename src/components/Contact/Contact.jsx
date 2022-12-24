import React from "react";
import style from "./style.module.css";

export default function Contact() {
  return (
    <div className={style.formContainer}>
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
        <textarea placeholder="Message" rows="4" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
