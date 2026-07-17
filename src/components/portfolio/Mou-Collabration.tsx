"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const MouCollabration = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_60 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_heading_title">
                MOU Signed Partnership & Collaboration
              </h2>
            </div>
          </div>
          <div className="cs_height_40 cs_height_lg_0"></div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
          <div>
            <Link href="/mou-collabrations/umt">
              <Image
                className="working_on_it_img"
                width={320}
                height={418}
                src={
                  "https://res.cloudinary.com/dgtk4rthy/image/upload/v1741932368/FHGROUPOC/MOU-Signed-Partnership-Collaboration/UMT/e9ihqjsf2tkbyaidzkyn.png"
                }
                alt="(UMT) University of Management & Technology"
              />
            </Link>
            {/* <div className="">
                <h2 className="">{item.title}</h2>
                <div className="cs_portfolio_subtitle">{item.category}</div>
              </div> */}
          </div>
          <div>
            <Link href="/mou-collabrations/sap">
              <Image
                className="working_on_it_img"
                width={320}
                height={418}
                src={
                  "https://res.cloudinary.com/dgtk4rthy/image/upload/v1750745157/Sap_eff5ib.png"
                }
                alt="(UMT) University of Management & Technology"
              />
            </Link>
            {/* <div className="">
                <h2 className="">{item.title}</h2>
                <div className="cs_portfolio_subtitle">{item.category}</div>
              </div> */}
          </div>
        </div>
      </div>
      <div className="cs_height_0 cs_height_lg_0"></div>
    </>
  );
};

export default MouCollabration;
