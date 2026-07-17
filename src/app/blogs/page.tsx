import AboutHomeFour from "@/components/about/AboutHomeFour";
import BlogArea from "@/components/blog/BlogArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Metadata } from "next";
import React, { useEffect } from "react";

export const metadata: Metadata = {
  title: "FH GROUP - Blogs",
  description: `Stay updated with the latest trends, tips, and creative insights from the experts at FH Group. Explore our blog for valuable content to elevate your brand and business.`,
  openGraph: {
    title: "FH GROUP - Blogs",
    description: `Stay updated with the latest trends, tips, and creative insights from the experts at FH Group. Explore our blog for valuable content to elevate your brand and business.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP - Blogs",
    description: `Stay updated with the latest trends, tips, and creative insights from the experts at FH Group. Explore our blog for valuable content to elevate your brand and business.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
  },
};

const index = async () => {
  const data = await (
    await fetch(`${process.env.NEXTAUTH_URL}/api/blogs`, {
      next: { revalidate: 30 },
    })
  ).json();
  const filterdata = await data
    ?.filter(
      (items: any) =>
        items.status === "Approved" && items.category === "FH Group"
    )
    ?.reverse();

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogArea data={filterdata} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
