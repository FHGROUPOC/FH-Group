"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Rating from "@mui/material/Rating";
import { useSession } from "next-auth/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

const Testimonial = ({ style_service, service_name }) => {
  const [value, setValue] = useState(5);
  const { data: session } = useSession();
  const [data, setdata] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        setIsExpanded(false);
      }, 10000);
    }
  };

  useEffect(() => {
    const myfun = async () => {
      const reviews = await fetch("/api/reviews");
      const jsondata = await reviews.json();
      const filter = jsondata?.filter(
        (items) => items.status === "Approved" && items.service === service_name
      );
      setdata(filter);
    };
    myfun();
  }, []);
  return (
    <>
      <section
        className={`${
          style_service ? "cs_shape_wrap_3" : "cs_primary_bg cs_shape_wrap_2"
        }`}
      >
        {style_service ? null : (
          <>
            <div className="cs_shape_1">
              <svg
                width="1041"
                height="1005"
                viewBox="0 0 1041 1005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.3"
                  cx="538.5"
                  cy="502.5"
                  r="501.5"
                  stroke="#7aae7f"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="501.5"
                  cy="526.5"
                  r="458.5"
                  stroke="#7aae7f"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="453"
                  cy="570"
                  r="424"
                  stroke="#7aae7f"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="396"
                  cy="591"
                  r="377"
                  stroke="#7aae7f"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="330"
                  cy="630"
                  r="329"
                  stroke="#7aae7f"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="cs_shape_2">
              <svg
                width="149"
                height="149"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#7aae7f"
                  />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#7aae7f"
                  />
                </g>
              </svg>
            </div>
          </>
        )}

        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row align-items-center center all_center">
            <div className="col-lg-9 offset-lg-1">
              <div
                className={`cs_testimonial ${
                  style_service ? "cs_style_2" : "cs_style_1 cs_color_1"
                }`}
              >
                <h2 className="cs_testimonial_title">
                  Some Of Our Respected Happy Clients Says
                </h2>
                <Swiper
                  loop={true}
                  speed={1000}
                  autoplay={true}
                  modules={[Autoplay]}
                  pagination={{
                    el: ".cs_pagination",
                    clickable: true,
                  }}
                  className="cs_slider cs_slider_4"
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="cs_testimonial_box">
                        <div className="cs_testimonial_quote_icon">
                          <svg
                            width="61"
                            height="44"
                            viewBox="0 0 61 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                              fill="#7aae7f"
                            />
                            <path
                              d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                              fill="#7aae7f"
                            />
                          </svg>
                        </div>
                        <div>
                          <div
                            className="cs_testimonial_text"
                            style={{
                              height: isExpanded ? "auto" : "80px", // Adjust the height for 2-3 lines
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                          >
                            {item.message}
                          </div>
                          <button
                            onClick={toggleExpand}
                            className="reviews_see_more_btn"
                          >
                            {isExpanded ? "See Less" : "See More "}
                          </button>
                        </div>
                        <div className="mt-4 cs_testimonial_meta center all_left">
                          <div className="cs_testimonial_avatar">
                            <img
                              style={{ width: "95px" }}
                              className="cs_radius_15 "
                              src={item?.image}
                              alt={item.name}
                            />
                          </div>
                          <div className="cs_testimonial_meta_right">
                            <div className="cs_testimonial_avatar_designation">
                              <h6 className="color_white disable_m pb-1">
                                {item.name}
                              </h6>
                            </div>
                            <Rating
                              name="read-only"
                              value={item?.rating}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="cs_pagination cs_style1"></div>
                </Swiper>
              </div>
            </div>
            {!session && (
              <div className="give-review-login">
                <button
                  onClick={() => {
                    const currentpath = encodeURIComponent(
                      window.location.pathname + window.location.search
                    );
                    window.location.replace(
                      `/login?redirect=${currentpath}#AddReview`
                    );
                  }}
                >
                  Give Your Review
                </button>
              </div>
            )}
          </div>
        </div>
        {style_service ? null : (
          <div className="cs_height_150 cs_height_lg_60"></div>
        )}
      </section>
      {style_service ? null : <div className=" cs_height_lg_60"></div>}
      <div className="cs_height_lg_60"></div>
    </>
  );
};

export default Testimonial;
