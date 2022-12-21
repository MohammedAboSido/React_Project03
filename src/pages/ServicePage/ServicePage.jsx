import React from "react";
import serviceImg from "../../assets/1.jpg";
import Hero from "../../components/Hero/Hero";

export default function ServicePage() {
  return (
    <>
      <Hero
        cName="heroMid"
        heroImg={serviceImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}
