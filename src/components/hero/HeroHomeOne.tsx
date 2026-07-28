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
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: "FHGROUPOC",
    title: "Expert Digital Services for Your Own Business",
    des: `FH Group provides innovative digital services using AI tools and strategies, including online maintenance, digital marketing, social media maintenance, branding, graphics design, motion graphics, 3D animations, and real-time services. They ensure secure, up-to-date systems, data-backed strategies, and high-quality content`,
  },
  // {
  //   img: `https://res.cloudinary.com/dgtk4rthy/image/upload/v1733489514/FHGROUPOC/HOME/Banner/o1po6duttgauk9tp3pmq.jpg`,
  //   sub_title: "FHGROUPOC",
  //   title: "Teamwork Is The Ultimate Key To Greater Success",
  //   des: `FH Group is where creativity meets strategy, blending innovative ideas with strategic precision to deliver everything from groundbreaking advertising campaigns and captivating storytelling to cutting-edge digital solutions, crafting memorable experiences that seamlessly connect brands with their audiences on a deeper level."`,
  // },
  // {
  //   img: `https://res.cloudinary.com/dgtk4rthy/image/upload/v1733489730/FHGROUPOC/HOME/Banner/x3dyhbs4mf4xs4x6jksw.jpg`,
  //   sub_title: "FHGROUPOC",
  //   title: "Understand the Market Fill Customer needs",
  //   des: `Transforming creative ideas into impactful stories in the digital realm involves transforming creative ideas into captivating visuals. Our innovative advertising strategies and commitment to digital excellence elevate your brand's voice, enhancing its presence and driving meaningful connections in today's fast-paced digital landscape.`,
  // },
];

const HeroHomeOne = () => {
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
                  <h1 className="cs_hero_title">{item.title}</h1>
                  <div className="cs_height_70 cs_height_lg_10"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle">{item.des}</div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/portfolio"
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

export default HeroHomeOne;