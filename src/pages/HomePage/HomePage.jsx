import React from "react";
import homeImg from "../../assets/home-img.jpg";
import Destination from "../../components/Destination";
import Hero from "../../components/Hero/Hero";
import SuperTrip from "../../components/Trip/SuperTrip";
export default function HomePage() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnText="Travel Plane"
        url="/"
        btnClass="show"
      />
      <Destination />
      <SuperTrip />
    </>
  );
}
