
import React from "react";

import AcademicBanner from "@/components/brand/AcademicBanner";

import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";



export const metadata = {
  title: 'FH GROUP - Academic',
  description: `From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling.`,
  openGraph: {
    title: 'FH GROUP - Academic',
    description: `From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling.`,
    images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
    url: 'https://www.fhgroupoc.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FH GROUP - Academic',
    description: `From humble beginnings to a creative powerhouse, FH Group is committed to transforming brands with innovative strategies, exceptional design, and impactful storytelling.`,
    images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
  },
};

const index = () => {
  
  return (
    <>
 
<Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <AcademicBanner />

          </main>
          <FooterOne />
        </div>
        </div>


      {/* video modal end */}
    </Wrapper>
    </>

  );
};

export default index;
