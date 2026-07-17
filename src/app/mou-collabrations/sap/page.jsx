import AboutHomeFour from "@/components/about/AboutHomeFour";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import { ToastContainer } from "react-toastify";
import SAPMOUCollabration from "../../../components/details/SAP-MOU-Collabration";

const page = () => {
  return (
    <>
      <Wrapper>
        <HeaderOne />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <SAPMOUCollabration />
              <AboutHomeFour />
            </main>
            <FooterOne />
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default page;
