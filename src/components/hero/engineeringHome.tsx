"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: `https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056448/FHGROUPOC/FABRICATION/New/icw2ptmxssminyyczyx2.jpg`,
    sub_title: "FH Fabrication",
    title: "Precision in Every Cut, Strength in Every Build!",
    des: `At FH Fabrication, we bring ideas to life with precision and innovation. Our expertise lies in delivering customized Fabrication solutions that cater to a wide range of industries and projects. Whether it’s intricate designs or large-scale productions, we utilize cutting-edge technology and exceptional craftsmanship to ensure every project exceeds expectations.`,
  },
  {
    img: `https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056475/FHGROUPOC/FABRICATION/New/ivnvtdmtdqbhw8pc7jhn.jpg`,
    sub_title: "FH Fabrication",
    title: "Transforming Ideas into Reality with Expert Fabrication!",
    des: `At FH Fabrication, we transform concepts into reality with unmatched precision and creativity. Specializing in tailored Fabrication solutions, we serve various industries with a focus on quality, innovation, and durability. From detailed designs to complex production processes, we ensure every project is delivered with the highest standards of craftsmanship and efficiency.`,
  },
  {
    img: `https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056464/FHGROUPOC/FABRICATION/New/tanc2ypnnprxjpi68jrl.jpg`,
    sub_title: "FH Fabrication",
    title: "Elevate Your Space with Premium Fabrication Solutions!",
    des: `FH Fabrication specializes in delivering high-quality, customized Fabrication services that meet the needs of diverse industries. With a focus on innovation and superior craftsmanship, we take pride in executing everything from intricate designs to large-scale projects, ensuring each one is completed to perfection using the latest technology.`,
  },
];

const EngineeringHome = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]} // Registering modules
        loop={true}
        slidesPerView={1}
        speed={1100}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: false }}
        className="cs_slider cs_slider_1"
      >
        {hero_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_hero cs_style1 cs_center cs_parallax">
              <div
                title={item.title}
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_mini_title">
                    <svg
                      width="134"
                      height="12"
                      viewBox="0 0 134 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010"
                      />
                    </svg>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h3 className="cs_hero_title">{item.title}</h3>
                  <div className="cs_height_70 cs_height_lg_10"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle">{item.des}</div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/engineering/portfolio"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Our Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>
    </>
  );
};

export default EngineeringHome;
