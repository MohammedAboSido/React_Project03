import React from "react";
import homeImg from "../../assets/home-img.jpg";
import Hero from "../../components/Hero/Hero";
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
    </>
  );
}
