import AboutHomeFour from "@/components/about/AboutHomeFour";
import Portfolio from "@/components/portfolio/Portfolio";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Metadata } from "next";
import React from "react";

// export const metadata = {
//   title: "Portfolio Vixan - Digital  Creative Agency Next js Template",
// };
export const metadata: Metadata = {
  title: "FH GROUP - Portfolio",
  description: `Explore FH Group's diverse portfolio of creative projects. From groundbreaking campaigns to stunning designs, see how we bring ideas to life with innovation and excellence.`,
  openGraph: {
    title: "FH GROUP - Portfolio",
    description: `Explore FH Group's diverse portfolio of creative projects. From groundbreaking campaigns to stunning designs, see how we bring ideas to life with innovation and excellence.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP - Portfolio",
    description: `Explore FH Group's diverse portfolio of creative projects. From groundbreaking campaigns to stunning designs, see how we bring ideas to life with innovation and excellence.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
  },
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Portfolio />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
