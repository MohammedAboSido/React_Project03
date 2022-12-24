import React from "react";
import serviceImg from "../../assets/1.jpg";
import Hero from "../../components/Hero/Hero";
import Service from "../../components/Service/Service";

export default function ServicePage() {
  return (
    <>
      <Hero
        cName="heroMid"
        heroImg={serviceImg}
        title="Service"
        btnClass="hide"
      />
      <Service />
    </>
  );
}
