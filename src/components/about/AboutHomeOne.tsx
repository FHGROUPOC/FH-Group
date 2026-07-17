"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface DataType {
  img: string;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_img.jpg",
    title: `Why Choose FH Group?`,
    option1: `We harness the power of AI to deliver accurate insights and tailored strategies for your brand.`,
    option2: `Blending advanced technology with innovative thinking, we craft experiences that resonate.`,
    option3: `Your success drives us. We align our efforts with your unique goals.`,
    option4: `With a passion for technology and creativity, our team delivers excellence every step of the way.`,
  },
];

const AboutHomeOne = () => {
  return (
    <>
      {/* <div className="cs_height_130 cs_height_lg_60"></div> */}
      <div className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <div key={index} className="cs_about cs_style_1">
            <div
            title="Why Choose FH Group?"
              className="cs_about_bg cs_bg"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="container">
              <div className="cs_about_text">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    {/* <div className="cs_section_subtitle">
                        {item.sub_title}
                      </div> */}
                    <h2 className="cs_section_title">{item.title}</h2>
                  </div>
                </div>
                <div className="cs_height_40 cs_height_lg_30"></div>
                <p className="cs_m0">
                  <b className="cs_semi_bold">AI-Powered Analysis : </b>
                  {item.option1}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">Creative Excellence : </b>
                  {item.option2}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">Client-Centric Approach : </b>
                  {item.option3}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">Expert Team : </b>
                  {item.option4}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeOne;
