"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    sub_title: "FHGROUPOC",
    title: "Expert Digital Services for Your Own Business",
    des: `FH Group provides innovative digital services using AI tools and strategies, including online maintenance, digital marketing, social media maintenance, branding, graphics design, motion graphics, 3D animations, and real-time services. They ensure secure, up-to-date systems, data-backed strategies, and high-quality content`,
  },
];

const CharacterAnimationBanner = () => {
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
          <SwiperSlide
            title={item.title}
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dgtk4rthy/image/upload/v1738329050/FHGROUPOC/CARTOON_ANIMATION/cotikotwyrxv2vgdru2i.jpg)`,
            }}
            key={index}
            className="swiper-slide bg-full"
          >
            <div className="cs_hero cs_style1 cs_center cs_parallax">
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_mini_title color_white">
                    {item.sub_title}
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h2 className="cs_hero_title color_white">
                    Bring Characters to Life with FH Group's Expert Animation
                    Services
                  </h2>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                  <div className="">
                    <div className="cs_hero_subtitle color_white">
                      At FH Group, we transform imagination into motion. Our
                      specialized character animation services use cutting-edge
                      tools like Blender, Cinema 4D, and 3D Maya to create
                      stunning, lifelike characters tailored to your vision.
                      Whether it's for films, games, advertisements, or digital
                      projects, our team ensures top-notch quality and
                      captivating animations that resonate with your audience.
                    </div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                    {/* <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/portfolio"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Our Projects
                        </Link>
                      </div>
                    </div> */}
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

export default CharacterAnimationBanner;
