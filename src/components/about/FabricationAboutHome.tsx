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
  option5: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056448/FHGROUPOC/FABRICATION/New/j4h4qdgvf9je22efzjlj.jpg",
    title: `Why Choose Us`,
    option1: `With years of industry knowledge, we bring unparalleled craftsmanship to every project.`,
    option2: `Our advanced tools and equipment ensure precision and quality in every piece.`,
    option3: `Your satisfaction is our priority. We collaborate closely to bring your vision to life.`,
    option4: `We value your time and ensure timely project completion without compromising on quality.`,
    option5: `We are committed to eco-friendly practices, using materials and processes that minimize environmental impact.`,
  },
];

const EngineeringAboutHome = () => {
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
                  <b className="cs_semi_bold">Expertise & Experience : </b>
                  {item.option1}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">Cutting-Edge Technology :</b>
                  {item.option2}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">Customer-Centric Approach : </b>
                  {item.option3}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">On-Time Delivery : </b>
                  {item.option4}
                </p>
                <p className="cs_m0">
                  <b className="cs_semi_bold">Sustainability : </b>
                  {item.option5}
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

export default EngineeringAboutHome;
