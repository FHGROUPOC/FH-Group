"use client";

import React, { useState } from "react";
import About from "@/components/about/About";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import BannerAbout from "@/components/brand/BannerAbout";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import Gellary from "@/components/gellary/Gellary";
import TeamHomeTwo from "@/components/team/TeamHomeTwo";
import Testimonial from "@/components/testimonial/Testimonial";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import VideoPopup from "@/components/modals/VideoPopup";
import HomeVideo from "@/components/Home_Video/home_video";


const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    
    <Wrapper>
      <FabHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            {/* <FunFactHomeOne style_3={true} /> */}
            <About />
            {/* <TeamHomeTwo style_2={true} style_3={true} /> */}
            {/* <AwardsHomeOne style_2={true} /> */}
            <Testimonial />
            <HomeVideo />

            <Gellary style_2={true} />
            <BrandHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"e2r-HOc5w6M"}
        videoChannel={"youtube"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
