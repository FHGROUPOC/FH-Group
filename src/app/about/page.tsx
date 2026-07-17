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
import HeaderOne from "@/layouts/headers/HeaderOne";
import VideoPopup from "@/components/modals/VideoPopup";
import HomeVideo from "@/components/Home_Video/home_video";
import { Metadata } from "next";
import Head from "next/head";


// export const metadata: Metadata = {
//   title: 'FH GROUP - About',
//   description: `From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling.`,
//   openGraph: {
//     title: 'FH GROUP - About',
//     description: `From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling.`,
//     images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
//     url: 'https://www.fhgroupoc.com/about',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'FH GROUP - About',
//     description: `From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling.`,
//     images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
//   },
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{"FH GROUP - About"}</title>
        <meta
          name="description"
          content={
            "From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling."
          }
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={"FH GROUP - About"} />
        <meta
          property="og:description"
          content={
            "From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling."
          }
        />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg"
          }
        />
        <meta property="og:url" content={"https://www.fhgroupoc.com/about"} />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"FH GROUP - About"} />
        <meta
          name="twitter:description"
          content={
            "From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling."
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg"
          }
        />
      </Head>
      <Wrapper>
        <HeaderOne />
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
    </>
  );
};

export default index;
