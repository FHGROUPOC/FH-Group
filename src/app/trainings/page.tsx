"use client";

import React, { useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeTwo from "@/components/hero/HeroHomeTwo";
import VideoHomeTwo from "@/components/video/VideoHomeTwo";
import InnovativeHomeTwo from "@/components/innovative/InnovativeHomeTwo";
import MarqueeAreaHomeTwo from "@/components/brand/MarqueeAreaHomeTwo";
import FeatureHomeTwo from "@/components/feature/FeatureHomeTwo";
import ServiceHomeTwo from "@/components/service/ServiceHomeTwo";
import TrainingsPortfolio from "@/components/portfolio/TrainingsPortfolio";
import TrainingsAwards from "@/components/awards/TrainingsAwards";
import Testimonial from "@/components/testimonial/Testimonial";
import TeamHomeTwo from "@/components/team/TeamHomeTwo";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import AboutUs from "@/components/about/AboutUs";
import BlogHomeTwo from "@/components/blog/BlogHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";
// import VideoPopup from "@/components/modals/VideoPopup";

// export const metadata = {
//   title: "Startup Agency - Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeTwo />
            <VideoHomeTwo setIsVideoOpen={setIsVideoOpen} />
            <InnovativeHomeTwo />
            <MarqueeAreaHomeTwo />
            <FeatureHomeTwo />
            <ServiceHomeTwo />
            <TrainingsPortfolio />
            {/* <TrainingsAwards /> */}
            {/* <Testimonial /> */}
            {/* <TeamHomeTwo /> */}
            {/* <BrandHomeOne /> */}
            <AboutUs />
            {/* <BlogHomeTwo /> */}
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      /> */}
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
