"use client";

import React, { useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeFive from "@/components/hero/HeroHomeFive";
import VideoHomeFive from "@/components/video/VideoHomeFive";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import FeatureHomeApp from "@/components/feature/FeatureHomeApp";
import ServiceHomeFive from "@/components/service/ServiceHomeFive";
import PortfolioHomeFive from "@/components/portfolio/PortfolioHomeFive";
import AwardsHomeApp from "@/components/awards/AwardsHomeApp";
import AboutHomeApp from "@/components/about/AboutHomeApp";
import FooterOne from "@/layouts/footers/FooterOne";

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeFive />
            <VideoHomeFive setIsVideoOpen={setIsVideoOpen} />
            <ServiceHomeFive />
            <FeatureHomeApp style_2={true} />
            {/* 475 */}
            {/* <PortfolioHomeFive /> */}
            {/* <FunFactHomeOne style_2={true} /> */}
            <AwardsHomeApp style_2={true} />
            <AboutHomeApp />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}

      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
