// src/pages/HomePage.jsx
import React from "react";
import Header from "../Header"
import HeroTextSection from "../HeroTextSection";
import HeroVideoSection from "../HeroVideoSection";
import FeaturedWork from "../featuredWork/FeaturedWork";
import UniqueCrafted from "../featuredWork/UniqueCraftedSection";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header
        brandName="STUDIO X"
        headlineText="Crafting interactive experiences through design and technology"
        ctaText="START A PROJECT"
menuItems={["HOME", "ABOUT", "PROJECTS", "CONTACT", "LABS"]}
      />
      <HeroVideoSection />
      <HeroTextSection />
      <FeaturedWork />
      <UniqueCrafted/>
      <Footer/>
    </>
  );
};

export default HomePage;
