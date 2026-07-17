"use client";

import AboutUs from "@/components/about/AboutUs";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import MarqueeAreaHomeThree from "@/components/brand/MarqueeAreaHomeThree";
import HeroHomeThree from "@/components/hero/HeroHomeThree";
import JourneyHomeThree from "@/components/journey/JourneyHomeThree";
import PortfolioHomeThree from "@/components/portfolio/PortfolioHomeThree";
import ServiceHomeThree from "@/components/service/ServiceHomeThree";
import TeamHomeTwo from "@/components/team/TeamHomeTwo";
import Testimonial from "@/components/testimonial/Testimonial";
import CharacterAnimationBanner from "@/components/hero/Character_Animation_Banner";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";

// export const metadata = {
//   title: "Design Studio - Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <CharacterAnimationBanner />
            {/* <HeroHomeThree /> */}
            <JourneyHomeThree />
            <MarqueeAreaHomeThree />
            <ServiceHomeThree />
            <PortfolioHomeThree />
            <AwardsHomeOne />
            {/* <Testimonial />
            <TeamHomeTwo  style_2={true} />
            <AboutUs /> */}
            <BrandHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
