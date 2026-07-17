import React from "react";
import Wrapper from "@/layouts/Wrapper";
import TeamArea from "@/components/team/TeamArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import TeamNew from "@/components/Team_New/team_new";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FH GROUP - Team",
  description: `A dynamic team of innovators, creators, and strategists dedicated to delivering excellence. Together, FH Group turns ideas into reality and brands into success stories.`,
  openGraph: {
    title: "FH GROUP - Team",
    description: `A dynamic team of innovators, creators, and strategists dedicated to delivering excellence. Together, FH Group turns ideas into reality and brands into success stories.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/team",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP - Team",
    description: `A dynamic team of innovators, creators, and strategists dedicated to delivering excellence. Together, FH Group turns ideas into reality and brands into success stories.`,
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
            <TeamArea />
            <TeamNew />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
