"use client";
import React, { useState } from "react";
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";

import Image, { StaticImageData } from "next/image";

interface DataType {
  id: number;
  ward_img: any;
  img: string;
  title: string;
  des: string;
}
[];

const award_data: DataType[] = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1754553521/Secure_nzzz72.png",
    ward_img:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1754485857/Secure-Architecture_olhvne.webp",
    title: `Secure Architecture`,
    des: `Your app is built with enterprise-grade security standards, ensuring user data protection and compliance from day one`,
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1754554874/API_ac6t4j.png",
    ward_img:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1754485857/Backend-Integration-_-APIs_ckbnfs.webp",
    title: `Backend Integration & APIs`,
    des: `Seamlessly connect your app with databases, cloud services, and third-party tools through custom API integrations.`,
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1754559061/Industry-Specific-Expertise_ekkucm.png",
    ward_img:
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1754485857/Industry-Specific-Expertise_xwpciu.webp",
    title: `Industry-Specific Expertise`,
    des: `Whether it’s e-commerce, healthcare, fintech, or social networking—we create app solutions tailored to your industry needs.`,
  },
];

const AwardsHomeApp = ({ style_2 }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Solutions
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Build Smarter Mobile Apps Android, iOS &
                Cross-Platform Solutions.{" "}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns align-items-center ${
                  activeTab === i ? "active" : ""
                }`}
              >
                <div className="cs_card_left ">
                  <div className="">
                    <img src={`${item.ward_img}`} alt="Award" width={150} />
                  </div>
                  <div>
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_hover_img">
                  <img src={`${item.img}`} alt="Thumb" style={{ width: "100%",  maxWidth:"200px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardsHomeApp;
