import HeroService from "@/components/hero/HeroService";
import Service from "@/components/service/Service";
import Testimonial from "@/components/testimonial/Testimonial";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FH GROUP - Services",
  description: `From creative development to advertising, animation, and broadcast solutions, FH Group offers everything you need to elevate your brand and make an impact.`,
  openGraph: {
    title: "FH GROUP - Services",
    description: `From creative development to advertising, animation, and broadcast solutions, FH Group offers everything you need to elevate your brand and make an impact.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP - Services",
    description: `From creative development to advertising, animation, and broadcast solutions, FH Group offers everything you need to elevate your brand and make an impact.`,
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
            <HeroService />
            <Service />
            <Testimonial style_service={true} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
