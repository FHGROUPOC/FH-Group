import React, { useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import GatewayHeroHome from "@/components/hero/GatewayHeroHome";
import GatewayVideoHomeTwo from "@/components/video/GatewayVideoHomeTwo";
import GatewayHomeTwo from "@/components/innovative/GatewayHomeTwo";
import GatewayMarqueeAreaHome from "@/components/brand/GatewayMarqueeAreaHome";
import GatewayFeatureHome from "@/components/feature/GatewayFeatureHome";
import GatewayServices from "@/components/service/GatewayServices";
import GatewayPortfolio from "@/components/portfolio/GatewayPortfolio";
import GatewayAwardsHomeOne from "@/components/awards/GatewayAwardsHomeOne";
import GatewayTestimonial from "@/components/testimonial/GatewayTestimonial";
import GatewayTeamHomeTwo from "@/components/team/GatewayTeamHomeTwo";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import AboutUs from "@/components/about/AboutUs";
import GatewayBlogHomeTwo from "@/components/blog/GatewayBlogHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import VideoPopup from "@/components/modals/VideoPopup";

import { Blog } from "@/utils/Blog";
import HomeBlog from "@/components/Blogpage/HomeBlog";
import Banner from "../../components/gateway/Banner";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000"; // Fallback for local dev

const index = async () => {
  let blogs: Blog[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/blogs`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data: Blog[] = await res.json();
    blogs = data
      .filter(
        (item) => item.status === "Approved" && item.category === "FH Group"
      )
      .reverse();
  } catch (error) {
    console.error("Blog fetch error:", error);
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <GatewayHeroHome />
            <Banner />
            {/* <GatewayVideoHomeTwo /> */}
            <GatewayHomeTwo />
            <GatewayMarqueeAreaHome />
            <GatewayFeatureHome />
            {/* <GatewayServices /> */}
            {/* <GatewayPortfolio /> */}
            <GatewayAwardsHomeOne />
            {/* <GatewayTestimonial /> */}

            {/* <GatewayTeamHomeTwo style_2={true} /> */}

            <BrandHomeOne />
            <AboutUs style_2={true} />
            <div className="mt-5">
              <HomeBlog blogs={blogs} />
            </div>
            {/* <GatewayBlogHomeTwo / */}
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
