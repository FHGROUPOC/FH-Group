"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import portfolio_data from "@/data/portfolio_data";

const EngineeringPortfolioHomeFive = () => {
  return (
    <>
      <div className="cs_height_40 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Case Study
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Projects We Have Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_0 cs_height_lg_60"></div>
        </div>
        <Swiper
          modules={[Autoplay]} // Registering modules
          loop={true}
          speed={1000}
          autoplay={{ delay: 1000 }}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          pagination={{ el: ".cs_pagination", clickable: true }}
          className="cs_slider cs_slider_5 anim_div_ShowDowns"
        >
          {portfolio_data.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Link
                key={i}
                href={"/portfolio-details/" + item?.title.split(" ")[0]}
                className="cs_portfolio cs_style_2"
              >
                <div className="cs_portfolio_img port_img">
                  <Image
                    width={620}
                    height={810}
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="cs_portfolio_info">
                  <div className="cs_text cs_style_1">
                    <h6 className="cs_portfolio_title">{item.title}</h6>
                    <div className="cs_portfolio_subtitle">{item.des}</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cs_height_30 cs_height_lg_60"></div>
        <div className="cs_section_heading_right cs_btn_anim text-lg-center container">
          <Link href="/portfolio" className="cs_btn cs_style_1">
            <span>View All Portfolios</span>
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104
                12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
      <div className="cs_height_60 cs_height_lg_60"></div>
    </>
  );
};

export default EngineeringPortfolioHomeFive;
