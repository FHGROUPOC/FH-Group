import React from "react";
import Wrapper from "@/layouts/Wrapper";
import EngineeringTeamArea from "@/components/team/FabricationTeamArea";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import EngineeringAboutHomeFour from "@/components/about/FabricationAboutHomeFour";
import EngineeringTeamNew from "@/components/engineeringteamnew/Engineeringteamnew";

export const metadata = {
  title: 'FH GROUP Engineering - Team',
  description: 'Get to know the skilled professionals behind FH Engineering, dedicated to delivering exceptional results.',
  openGraph: {
    title: 'FH GROUP Engineering - Team',
    description: 'Get to know the skilled professionals behind FH Engineering, dedicated to delivering exceptional results.',
    images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
    url: 'https://www.fhgroupoc.com/Engineering/team',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FH GROUP Engineering - Team',
    description: 'Get to know the skilled professionals behind FH Engineering, dedicated to delivering exceptional results.',
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
            <EngineeringTeamArea />
            <EngineeringTeamNew />
            <EngineeringAboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
