import React from "react";
import Image from "next/image";
import Service_data from "@/data/service_data";

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Digital Product Design",
  description: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digita`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
};
const { title, description, features } = hero_contact;

const HeroServiceDetails = ({ thisService }: any) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Digital Marketing
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image
                  width={675}
                  height={390}
                  src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734003120/FHGROUPOC/SERVICES/NEW/t2zs9shmgpxblms4dsu5.png"
                  alt="digital marketing"
                />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">
                  Digital marketing is the use of websites, apps, mobile
                  devices, social media, search engines, and other digital means
                  to promote and sell products and services. FH Group integrates
                  these techniques to provide customized solutions for clients,
                  ensuring impactful campaigns that drive results.
                </p>
                <ul className="anim_div_ShowDowns">
                  <li>What Is Digital Marketing ?</li>
                  <li>How Digital Marketing Works ?</li>
                  <li>Types of Digital Marketing Channels</li>
                  <div className="ps-2 mt-1">
                    <li>Website Marketing</li>
                    <li>Pay-Per-Click Advertising</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>Social Media Marketing</li>
                    <li>Affiliate Marketing</li>
                    <li>Video Marketing</li>
                    <li>Text Messaging</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroServiceDetails;
