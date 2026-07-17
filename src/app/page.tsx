import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
// Import the CSS for react-toastify`
import "react-toastify/dist/ReactToastify.css";

import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";

import HeroHomeOne from "@/components/hero/HeroHomeOne";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import ServiceHomeOne from "@/components/service/ServiceHomeOne";
import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
import PortfolioHomeFive from "@/components/portfolio/PortfolioHomeFive";
import CollabrationsMou from "@/components/portfolio/Mou-Collabration";

import Testimonial from "@/components/testimonial/Testimonial";
import BannerTopSection from "@/components/bannertopsec/BannerTopSec";
import GoogleReviews from "@/components/googleReviews/GoogleReviews";
import Discountbar from "@/components/off-bar/off-bar";
import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import HomeBlog from "@/components/Blogpage/HomeBlog";
import Animation from "@/components/animations/Animations";
import Engineering from "@/components/engineering/engineering";
import Medical from "@/components/medical/medical";
import HomeForm from "@/components/home_form/home_form";
import HomeVideo from "@/components/Home_Video/home_video";

import { Blog } from "@/utils/Blog";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000"; // Fallback for local dev

const HomePage = async () => {
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
    <>
      <Head>
        <title>FH GROUP - Home</title>
        <meta
          name="description"
          content="FH Group: Your One-Step Solution Provider - Where Ideas Ignite, Solutions Excel!"
        />

        {/* Open Graph */}
        <meta property="og:title" content="FH GROUP - Home" />
        <meta
          property="og:description"
          content="FH Group: Your One-Step Solution Provider - Where Ideas Ignite, Solutions Excel!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734621782/FHGROUPOC/LOGOS/wylfbd45nxwjcnsh0uhc.jpg"
        />
        <meta property="og:url" content="https://www.fhgroupoc.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FH GROUP - Home" />
        <meta
          name="twitter:description"
          content="FH Group: Your One-Step Solution Provider - Where Ideas Ignite, Solutions Excel!"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734621782/FHGROUPOC/LOGOS/wylfbd45nxwjcnsh0uhc.jpg"
        />
      </Head>
      <Wrapper>
        <HeaderOne />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <BannerTopSection />
              <HeroHomeOne />
              <Discountbar />
              <Animation />
              <HomeForm />
              <Medical />
              <Engineering />
              <AboutHomeOne />
              <ServiceHomeOne />
              <PortfolioHomeOne />
              <CollabrationsMou />
              <PortfolioHomeFive />
              <Testimonial />
              <HomeVideo />
              <GoogleReviews />
              <SubscribeHomeOne />
              {/* <BrandHomeOne /> */}
              <HomeBlog blogs={blogs} />
            </main>
            <FooterOne />
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default HomePage;
