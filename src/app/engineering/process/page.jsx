import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import EngineeringService from "@/components/service/FabricationService";

export const metadata = {
  title: "FH GROUP Engineering - Process",
  description:
    "Learn how FH Engineering ensures efficiency, excellence, and timely delivery through our streamlined process.",
  openGraph: {
    title: "FH GROUP Engineering - Process",
    description:
      "Learn how FH Engineering ensures efficiency, excellence, and timely delivery through our streamlined process.",
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/Engineering/process",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP Engineering - Process",
    description:
      "Learn how FH Engineering ensures efficiency, excellence, and timely delivery through our streamlined process.",
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
  },
};

const process = () => {
  return (
    <>
      <Wrapper>
        <FabHeader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <EngineeringService />
            </main>
            <FooterOne />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default process;
