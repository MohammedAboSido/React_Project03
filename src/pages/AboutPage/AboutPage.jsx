import React from "react";
import abouImg from "../../assets/night.jpg";
import Hero from "../../components/Hero/Hero";

export default function AboutPage() {
  return (
    <>
      <Hero cName="heroMid" heroImg={abouImg} title="About" btnClass="hide" />
    </>
  );
}
