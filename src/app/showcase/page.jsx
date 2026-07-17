"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Mousewheel } from "swiper/modules"; // Swiper modules should be imported here
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ShowcasesFullScreenData from "../../data/showcases-full-screen-slider.json";
import { useRouter } from "next/navigation";

const ShowcasesFullScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobwid, setmobwid] = useState(false);
  const router = useRouter();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  useEffect(() => {
    const myfun = () => {
      const mobileview = window.innerWidth <= 768;
      if (mobileview) {
        router.push("/");
      }
    };
    myfun();
  }, [router]);

  const last_slide_imgs = [
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736430888/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/can8ka5yzjkhfoouzh6r.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736430888/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/nffimoka3est8d6nfu7j.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736430888/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/c6en6abwuqzymspaf2zc.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/awj4ficexh2fystppsz8.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736430888/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/elatqjwxbbtkrmfvawvl.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736430888/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/laxqhple78epa0gvlz6w.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/lxnvtlfsckpdkwgrrrgt.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736431231/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/mat3kw8z0ozd9a96d3bh.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/fi6mbvokognmrelyyq0i.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736431382/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/rjyj8mwqoxxuler26tyo.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550168/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/z15ulxd75an4gtsowzd9.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/as0xrwwwrrtzwtft0ciz.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550168/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/esjgl5aumm7llxcnblkt.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550168/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/x4lgplubwlfi30l1unmg.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550168/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/dmlka7bto9umvhg87ed2.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1736432034/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/bwlgwxotjdfntlxilxmk.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/hxcufj9g3w7htvgaiqat.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550169/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/kl1quwso7jamiektvejc.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550168/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/zdbusod3z9wnuwbzqgog.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550168/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/qr4yxsiggblyiazhuxo1.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735550170/FHGROUPOC/PORTFOLIOS/LOGOS/NEW/qjgiivcgtagcz4346bkv.jpg",
    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737016910/FHGROUPOC/Upcoming-Projects%20Logo/v8vryfog1s1gisgyeqyy.jpg",
  ];

  return (
    <header className="slider showcase-full">
      <Link href="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg"
          alt="logo"
        />
      </Link>
      <div className="swiper-container parallax-slider">
        {isLoaded && (
          <Swiper
            modules={[Navigation, Pagination, Parallax, Mousewheel]} // Registering modules here
            speed={1000}
            mousewheel={true}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              type: "fraction",
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {ShowcasesFullScreenData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="bg-img" data-overlay-dark="4">
                  <div className="center_div">
                    <div data-swiper-parallax="-5000" className="image_div">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="caption showcase_content">
                      <h1 className="disable_m">
                        <div className="" data-swiper-parallax="-2000">
                          {slide.title.first}
                        </div>
                      </h1>
                      <h1 className="disable_m stroke-text">
                        <div className="" data-swiper-parallax="-2000">
                          {slide.title.first}
                        </div>
                      </h1>

                      <h2 className="disable_m">
                        <div className="stroke" data-swiper-parallax="-5000">
                          {slide.title.second}
                        </div>
                      </h2>

                      <p className="mt-5">
                        <div data-swiper-parallax="-2000">{slide.desc}</div>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="swiper-slide">
              <div className="bg-img " data-overlay-dark="4">
                <div className="last_slide_flex">
                  <div className="w-100">
                    <div>
                      <h4 className="disable_m">WHAT WE DO ?</h4>
                      <p className="disable_m last_slide_para ">
                        FH provides what is needed to build a business from
                        scratch
                      </p>
                      <h5 className="disable_m pt-2">OUR CLIENTS</h5>
                    </div>
                    <img
                      className="last_img_main"
                      src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1736433607/FHGROUPOC/PRESENTATION/ICONS/bskl27j5pc6p93ldeljw.png"
                      alt="gorup"
                    />
                    <div className="last_slide_imgs_bg">
                      <div
                        data-swiper-parallax="-5000"
                        className="last_slide_imgs_sec"
                      >
                        {last_slide_imgs.map((imgs) => (
                          <img
                            className="last_slide_img"
                            src={imgs}
                            alt="ddd"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
      <div className="bottom_footer">
        <div className="w-100 center space_start gap-2">
          <p className="disable_m heading">CONTACT US :</p>
          <p className="disable_m heading">UAE</p>
          <a href="tel:+971521417285">
            <p className="disable_m">+97 152 141 7285</p>
          </a>
          <p className="disable_m heading">PAK</p>
          <a href="tel:+923314447077">
            <p className="disable_m">+92 331 444 7077</p>
          </a>
          <p className="disable_m heading">EMAIL</p>
          <a href="mailto:info@fhgroupoc.com">
            <p className="disable_m">info@fhgroupoc.com</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default ShowcasesFullScreen;
