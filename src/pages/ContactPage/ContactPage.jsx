import React from "react";
import contactImg from "../../assets/2.jpg";
import Hero from "../../components/Hero/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero
        cName="heroMid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}
