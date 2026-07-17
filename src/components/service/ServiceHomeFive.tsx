"use client";

import React from "react";
import Link from "next/link";
import app_data from "@/data/app_data";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceHomeFive = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                What’s Included
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Basic App Package.
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <Swiper
            loop={true}
            speed={1000}
            autoplay={false}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{ el: ".cs_pagination", clickable: true }}
            className="cs_slider cs_slider_3 cs_row_slider anim_blog"
          >
            {app_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cs_post cs_style_2">
                  <div className="cs_post_info">
                    <div>
                      <h6 className="cs_post_title">
                        <Link href="/development-services">{item.title}</Link>
                      </h6>
                      <p className="cs_m0 cs_color_1">{item.desc}</p>
                    </div>
                
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ServiceHomeFive;
