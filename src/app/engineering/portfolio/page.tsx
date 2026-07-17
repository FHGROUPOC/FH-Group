import EngineeringAboutHomeFour from "@/components/about/FabricationAboutHomeFour";
import EngineeringPortfolio from "@/components/portfolio/FabricationPortfolio";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import React from "react";

export const metadata = {
  title: "FH GROUP Engineering - Portfolio",
  description:
    "View our impressive portfolio showcasing the craftsmanship and quality of FH Engineering’s work.",
  openGraph: {
    title: "FH GROUP Engineering - Portfolio",
    description:
      "View our impressive portfolio showcasing the craftsmanship and quality of FH Engineering’s work.",
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/Engineering/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP Engineering - Portfolio",
    description:
      "View our impressive portfolio showcasing the craftsmanship and quality of FH Engineering’s work.",
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
            <EngineeringPortfolio />
            <EngineeringAboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
