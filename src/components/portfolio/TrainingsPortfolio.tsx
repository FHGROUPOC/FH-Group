"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
  img: string;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: "https://i.pinimg.com/1200x/ff/77/a5/ff77a51c1611c8e9b0816f15b9aa4205.jpg",
    title: `Project Task Management`,
    category: `Digital Services / App Design`,
  },
  {
    img: "https://i.pinimg.com/736x/03/38/48/033848354bce9054da69485547f3e2da.jpg",
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737556776/FHGROUPOC/HOME/SELECTION/ahgpbijv2d78cdggxwu8.jpg",
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
  },
];

const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Studio Pixel
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Your Gateway to Digital Creativity
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView={3}
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns "
        >
          {portfolio_slider.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide ">
              <div className="cs_horizontal_scroll">
                <Link
                  href="/portfolio-details"
                  className="cs_portfolio cs_style_1"
                >
                  <div className="cs_portfolio_img">
                    <Image
                      className="services-imgs"
                      src={item.img}
                      width={620}
                      height={810}
                      alt="Thumb"
                    />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">{item.title}</h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="cs_height_145 cs_height_lg_60"></div> */}
    </>
  );
};

export default PortfolioHomeOne;
