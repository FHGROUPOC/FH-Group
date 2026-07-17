"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import VideoPopup from "@/components/modals/VideoPopup";
// First, make sure you've imported Swiper and the Navigation module
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PortfolioDetailsArea = ({ portfolio_single }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activePortfolio, setActivePortfolio] = useState(null); // Track active modal

  const handleViewMore = (id) => {
    setActivePortfolio(id); // Set active modal ID
  };

  const handleCloseModal = () => {
    setActivePortfolio(null); // Close modal
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                {portfolio_single.portfolio_detail.page_title}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-3">
                  <div className="cs_text_style_1">
                    <h6 className="port_details_hd">Client</h6>
                    <p className="port_details_para">
                      {portfolio_single.title}
                    </p>
                  </div>
                </div>
                {portfolio_single.portfolio_detail.date !== "" && (
                  <div className="col-md-3">
                    <div className="cs_text_style_1">
                      <h6 className="port_details_hd">Date</h6>
                      <p className="port_details_para">
                        {portfolio_single.portfolio_detail.date}
                      </p>
                    </div>
                  </div>
                )}
                <div className="col-md-3">
                  <div className="cs_text_style_1">
                    <h6 className="port_details_hd">Categories</h6>
                    <p className="port_details_para">
                      {portfolio_single.category}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cs_text_style_1">
                    <h6 className="port_details_hd">Tags</h6>
                    <p className="port_details_para">
                      {portfolio_single.portfolio_detail.tags}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_75 cs_height_lg_45"></div>
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image
                width={1800}
                height={1000}
                src={portfolio_single.portfolio_detail.banner_img}
                alt={portfolio_single.portfolio_detail.page_title}
              />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">Overview</h4>
                <p className="cs_text_style_body">
                  {portfolio_single.portfolio_detail.banner_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <section>
        <div className="container">
          {portfolio_single.portfolio_detail.inner_portfolios.map((item) => (
            <div key={item?.id} className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                {(item?.allimages && item.allimages.length > 0 && (
                  <Swiper
                    className="port_img_sec"
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation={true} // enables arrows
                    modules={[Navigation, Autoplay]} // load required modules
                    autoplay={{
                      delay: 3000, // 3 seconds per slide
                      disableOnInteraction: false, // continue autoplay after user interaction
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1, // 👈 mobile devices
                      },
                      768: {
                        slidesPerView: 2, // 👈 tablets and above
                      },
                    }}
                  >
                    {item.allimages.map((imgUrl, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgUrl}
                          alt={`${item.portfolio_title}, ${
                            item.portfolio_ele
                          } - Image ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )) || (
                  <>
                    <VideoHomeOne
                      backgroundimg={
                        portfolio_single.portfolio_detail.banner_img
                      }
                      setIsVideoOpen={setIsVideoOpen}
                    />
                    <VideoPopup
                      isVideoOpen={isVideoOpen}
                      setIsVideoOpen={setIsVideoOpen}
                      videoChannel={item.video_channel}
                      videoId={item.video_id}
                    />
                    <div className="cs_height_30 cs_height_lg_20"></div>
                  </>
                )}
                <div>
                  <h4 className="cs_heading_text anim_heading_title disable_m head">
                    {item.portfolio_title}
                  </h4>
                  <p className="cs_text_style_body">{item.portfolio_desc}</p>
                  <div className="cs_height_30 cs_height_lg_20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {activePortfolio && (
        <div className="fullscreen-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            {portfolio_single.portfolio_detail.inner_portfolios
              .filter((item) => item.id === activePortfolio)
              .map((item) => (
                <div key={item.id}>
                  <h3 className="port_inner_head">{item.portfolio_title}</h3>
                  <p className="port_inner_para">{item.portfolio_desc}</p>
                  <div className="modal-images">
                    {item?.allimages?.map((img, index) => (
                      <img key={index} src={img} alt={item.portfolio_title} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioDetailsArea;
