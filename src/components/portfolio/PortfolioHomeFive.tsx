"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import portfolio_img_1 from "@/assets/img/case_study_2.jpg";
import portfolio_img_2 from "@/assets/img/case_study_3.jpg";
import portfolio_img_3 from "@/assets/img/case_study_4.jpg";
import portfolio_data from "@/data/portfolio_data";

interface DataType {
  img: string;
}
// interface DataType {
//   img: StaticImageData;
//   title: string;
//   subtitle: string;
// }

// const portfolio_data: DataType[] = [
//   {
//     img: portfolio_img_1,
//     title: "Project Task Management",
//     subtitle: "Google Marketing",
//   },
//   {
//     img: portfolio_img_2,
//     title: "Project Task Management",
//     subtitle: "Google Marketing",
//   },
//   {
//     img: portfolio_img_3,
//     title: "Project Task Management",
//     subtitle: "Google Marketing",
//   },
//   {
//     img: portfolio_img_1,
//     title: "Project Task Management",
//     subtitle: "Google Marketing",
//   },
//   {
//     img: portfolio_img_2,
//     title: "Project Task Management",
//     subtitle: "Google Marketing",
//   },
//   {
//     img: portfolio_img_3,
//     title: "Project Task Management",
//     subtitle: "Google Marketing",
//   },
// ]

const PortfolioHomeFive = () => {
  const clients_data: DataType[] = [
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719477419/FHGROUPOC/HOME/GREY-LOGOS/x2ugam4ebx0egne1l2bd.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476717/FHGROUPOC/HOME/GREY-LOGOS/c9q9hjxzcfy6hytcziqg.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476443/FHGROUPOC/HOME/GREY-LOGOS/fiy2ic8tcbt5yhanox5s.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476443/FHGROUPOC/HOME/GREY-LOGOS/ulivpsx2yg75nlpewmmx.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476443/FHGROUPOC/HOME/GREY-LOGOS/kedkr50hekoj0baiqjke.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/eztcrthjew1scyfk0qfi.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/weugy1m2iml81s2z1wk6.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/gsopxzewmcdibzdjli3a.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/lhc15koa328xhmarz6dw.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/d2vouoxzzniyzjq8stsv.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/adosadzrlqliffgkx2fr.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/xpa2ybolhxs5vudyckjv.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/oxugwmbosvz13sopbtax.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/dyvgl5amyzsdmrewm1jk.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/kfswhruk1ex1xjqvgf9k.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/jylzmwk867dj5yodwccz.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/vs5xown5xucgco9hbt16.png",
    },
    {
      img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476382/FHGROUPOC/HOME/GREY-LOGOS/jai0ck88u9ag66gvmbw7.png",
    },
  ];
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
        {/* <Swiper
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
        </Swiper> */}
        <div className="  ">
          <div className="cs_moving_section_in_new w-98">
            {clients_data.map((item) => (
              <div className=" ">
                <div className="cs_partner_logo_wrap">
                  <div className="cs_partner_logo">
                    <img src={item.img} alt="FH GROUP-One Step Solution" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

export default PortfolioHomeFive;
