
import EngineeringHeroService from "@/components/hero/engineeringHeroService";
import EngineeringService from "@/components/service/FabricationService";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import React from "react";

export const metadata = {
  title: 'FH GROUP Engineering - Services',
  description: 'From design to installation, FH Engineering offers exceptional services for all your Engineering requirements.',
  openGraph: {
    title: 'FH GROUP Engineering - Services',
    description: 'From design to installation, FH Engineering offers exceptional services for all your Engineering requirements.',
    images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
    url: 'https://www.fhgroupoc.com/Engineering/service',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FH GROUP Engineering - Services',
    description: 'From design to installation, FH Engineering offers exceptional services for all your Engineering requirements.',
    images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
  },
};

const index = () => {
  return (
    <Wrapper>
      <FabHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <EngineeringHeroService />
            {/* <EngineeringService /> */}
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
