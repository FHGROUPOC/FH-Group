
import EngineeringContactArea from "@/components/contact/FabricationContactArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: 'FH GROUP Engineering - Contact',
  description: 'Have questions or need assistance? Contact FH Engineering today for all your Engineering needs.',
  openGraph: {
    title: 'FH GROUP Engineering - Contact',
    description: 'Have questions or need assistance? Contact FH Engineering today for all your Engineering needs.',
    images: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
    url: 'https://www.fhgroupoc.com/Engineering/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FH GROUP Engineering - Contact',
    description: 'Have questions or need assistance? Contact FH Engineering today for all your Engineering needs.',
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
            <EngineeringContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default index;
