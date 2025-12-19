// src/pages/HomePage.jsx
import React from "react";
import Header from "../Header"
import HeroTextSection from "../HeroTextSection";
import HeroVideoSection from "../HeroVideoSection";
import FeaturedWork from "../featuredWork/FeaturedWork";

const HomePage = () => {
  return (
    <>
      <Header
        brandName="STUDIO X"
        headlineText="Crafting interactive experiences through design and technology"
        ctaText="START A PROJECT"
        menuItems={["Home", "About Us", "Projects", "Contact", "Labs"]}
      />
      <HeroVideoSection />
      <HeroTextSection />
      <FeaturedWork />
    </>
  );
};

export default HomePage;
