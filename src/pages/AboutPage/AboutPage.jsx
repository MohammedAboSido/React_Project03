import React from "react";
import abouImg from "../../assets/night.jpg";
import Hero from "../../components/Hero/Hero";
import SuperTrip from "../../components/Trip/SuperTrip";

export default function AboutPage() {
  return (
    <>
      <Hero cName="heroMid" heroImg={abouImg} title="About" btnClass="hide" />
      <SuperTrip />
    </>
  );
}
