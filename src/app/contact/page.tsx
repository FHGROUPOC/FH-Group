import ContactArea from "@/components/contact/ContactArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Metadata } from "next";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "FH GROUP - Contact Us",
  description: `Have a question or need assistance? Our team is here to help! Contact FH Group today, and let’s start building something amazing together.`,
  openGraph: {
    title: "FH GROUP - Contact Us",
    description: `Have a question or need assistance? Our team is here to help! Contact FH Group today, and let’s start building something amazing together.`,
    images:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
    url: "https://www.fhgroupoc.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP - Contact Us",
    description: `Have a question or need assistance? Our team is here to help! Contact FH Group today, and let’s start building something amazing together.`,
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
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default index;
