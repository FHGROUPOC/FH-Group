"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface DataType {
  img: string;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1734006339/FHGROUPOC/Upcoming-Projects%20Logo/kexwoaykq0hytazdntne.png",
    title: `News One`,
    category: `Rebranding, Realtime, Programs Branding, Motion Graphics, 3D Animations`,
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1734006339/FHGROUPOC/Upcoming-Projects%20Logo/wzdpzvlomfdbxbrm8at1.png",
    title: `Tv One`,
    category: `Rebranding, Channel Thematic`,
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1734006339/FHGROUPOC/Upcoming-Projects%20Logo/dnfndrt48acyz8wisali.png",
    title: `Waseb`,
    category: `Rebranding, Channel Thematic, Realtime, Motion Graphics, 3D Animations`,
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737016910/FHGROUPOC/Upcoming-Projects%20Logo/v8vryfog1s1gisgyeqyy.jpg",
    title: `Qasim Ali Shah Foundation`,
    category: `Brand strategy, Social Media Management, Website Development`,
  },
];

const EngineeringPortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_60 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div
                id="onlyforthis"
                className="cs_section_subtitle anim_div_ShowZoom"
              >
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Projects We Are Working On
              </h2>
            </div>
          </div>
          <div className="cs_height_40 cs_height_lg_0"></div>
        </div>
        <div>
          <div className="center wrap w-98 m-auto">
            {portfolio_slider.map((item, i) => (
              <>
                <Image
                  className="working_on_it_img"
                  width={320}
                  height={418}
                  src={item.img}
                  alt={item.title}
                />
                {/* <div className="">
                <h2 className="">{item.title}</h2>
                <div className="cs_portfolio_subtitle">{item.category}</div>
              </div> */}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="cs_height_0 cs_height_lg_0"></div>
    </>
  );
};

export default EngineeringPortfolioHomeOne;
