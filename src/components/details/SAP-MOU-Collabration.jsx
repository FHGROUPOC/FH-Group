"use client";

import React from "react";
import Image from "next/image";

const SAPMOUCollabration = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="">
            <h3 className="anim_word_writting disable_m heading-text">
              SAP Collaborations
            </h3>
          </div>

          <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
            <div className="cs_height_20 cs_height_lg_10"></div>

            {/* <p className="cs_text_style_body client-para pt-2 pb-2">
              FH Group proudly announces its collaboration with the University
              of Management and Technology (UMT) through a signed Memorandum of
              Understanding (MoU) on March 12, 2025. This partnership marks a
              significant step towards bridging the gap between academia and
              industry, fostering innovation, and empowering the next generation
              of professionals.
            </p> */}
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image
                style={{ maxHeight: "550px" }}
                width={1230}
                height={600}
                src={
                  "https://res.cloudinary.com/dgtk4rthy/image/upload/v1750745157/Sap_gehfjk.webp"
                }
                alt="fh group umt university"
              />
            </div>
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <div className="anim_div_ShowDowns">
                <div className="client-points">
                  <h6 className="mt-5 mb-2">
                    In Creative Partnership with FH Group Globally
                  </h6>
                  <p>
                    FH Group joined hands with SAP Collaborations to build a
                    distinctive, fashion-forward brand identity and elevate its
                    digital performance. Through our global creative lens, we
                    delivered a cohesive strategy that resonates with
                    style-conscious audiences.
                  </p>
                  <h6 className="mt-5 mb-2">
                    Globally Registered Collaboration with FH Group
                  </h6>
                  <p>
                    SAP Collaborations is a dynamic and evolving fashion brand
                    that partnered with FH Group – a globally registered
                    creative agency with SAP – to reshape its brand image and
                    elevate its digital presence across international markets.
                  </p>
                  <p>
                    As part of this prestigious global alignment, FH Group
                    provided end-to-end creative and digital services tailored
                    for the fashion retail industry. The collaboration focused
                    on building a consistent and compelling brand narrative
                    while ensuring a high-performing digital ecosystem.
                  </p>
                  <p>
                    Our global registration with SAP allowed us to bring
                    world-class creative standards, strategic insights, and
                    scalable solutions to the SAP Collaborations brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SAPMOUCollabration;
