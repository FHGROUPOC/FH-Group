/* =================== Engineering =================== */
import EngineeringHome from "@/components/hero/engineeringHome";
import EngineeringAnimations from "@/components/engineeringanimations/Engineeringanimations";
import EngineeringHomeForm from "@/components/engineeringhomeform/Engineeringhomeform";
import EngineeringHomeSection from "@/components/engineeringhomesection/Engineeringhomesection";
import EngineeringAboutHome from "@/components/about/FabricationAboutHome";
import EngineeringServiceHomeOne from "@/components/service/FabricationServiceHomeOne";
/* =================== Engineering =================== */

/* =================== Main =================== */
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import React from "react";
/* =================== Main =================== */

export const metadata = {
  title: "FH GROUP Engineering - Home",
  description:
    "Discover top-quality Engineering solutions with FH Engineering, where precision and craftsmanship meet.",
  openGraph: {
    title: "FH GROUP Engineering - Home",
    description:
      "Discover top-quality Engineering solutions with FH Engineering, where precision and craftsmanship meet.",
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/Engineering/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP Engineering - Home",
    description:
      "Discover top-quality Engineering solutions with FH Engineering, where precision and craftsmanship meet.",
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
  },
};

const index = () => {
  return (
    <Wrapper>
      <FabHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <EngineeringHome />
            {/* <EngineeringDiscountbar /> */}
            <EngineeringAnimations />
            <EngineeringHomeForm />
            <EngineeringHomeSection />
            <EngineeringAboutHome />
            <EngineeringServiceHomeOne />
            {/* <EngineeringPortfolioHomeOne />
            <EngineeringPortfolioHomeFive /> */}
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
