"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import avatar_img from "@/assets/img/avatar_1.jpg";
import testimonial_thumb from "@/assets/img/testimonial_thumb_1.jpg";
import Image, { StaticImageData } from "next/image";
import footer_logo from "@/assets/img/footer_logo.svg";
import logo from "@/assets/img/logo.svg";
interface DataType {
  img: string;
  name: string;

  person: string;
  des: string;
}
[];
const testimonial_data: DataType[] = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjmoUatVnbQsL-NNHSj2L9zjbbMg92x5pNA&s",
    name: `Fast Sports`,
    person: `Asif Ali Khara , LAHORE`,
    des: `“Throughout the branding process, your team was very
                      responsive, communicative and collaborative, providing
                      constant updates, feedback and suggestions that helped us
                      make important decisions easily and confidently.I want to
                      thank the FH Group team again for their dedication, hard
                      work and impeccable service. You helped us achieve our
                      goals and we look forward to working with you on future
                      projects.”`,
  },
  {
    img: "https://utfs.io/f/7ed396a6-1abe-42b1-8409-a11b0d82aac0-nrnesw.jpg",
    name: `Chaskola Grill`,
    person: `Muhammad Tanveer Ahmad , LAHORE`,
    des: `“The working experience with FH Group has been exceptional. I would highly recommend FH Group to anyone in their branding projects who is looking for high-quality products and exceptional customer service. Thank you once again for all that you do.”`,
  },
  {
    img: "https://utfs.io/f/df1d4dd5-b182-42af-8970-ccc2e28e0f6d-7gl8tm.jpg",
    name: `Cow & Bufallo`,
    person: `Muddasar Nazar , LAHORE`,
    des: `“I have found your team to be professional, knowledgeable, and accommodating. Whenever I have reached out to the FH Group with a question or request, they have been quick to respond and provide me with the best solutions.”`,
  },
  {
    img: "https://utfs.io/f/60bc783c-0f69-477b-a86d-53c121faaba7-myugz4.jpg",
    name: `Bite Me`,
    person: `Zia All Qalam , LAHORE`,
    des: `“As the owner of Bite Me fast food brand, I wanted to take
                      a moment to express my sincere gratitude for the
                      exceptional services provided by FH group. Over the years,
                      we have partnered with many companies for our packaging
                      and promotion needs, but I must say that working with FH
                      Group has been an absolute pleasure.”`,
  },
  {
    img: "https://utfs.io/f/e12c22bf-7ed3-43f3-8a16-84550f13945d-vic7uk.jpg",
    name: `Public News`,
    person: `Jawad Haneef , LAHORE`,
    des: `“From our initial meeting, your team demonstrated an
                      amazing level of professionalism, creativity and expertise
                      that I greatly admired. Not only did you take the time to
                      listen to our needs and requirements, but you also
                      leveraged your vast knowledge and experience to provide us
                      with innovative ideas, concepts and designs that perfectly
                      aligned with our vision and communicated our message to
                      the public.”`,
  },
  {
    img: "https://utfs.io/f/c8966fc1-da6b-40bd-8895-56d02f503c4c-krum9c.jpg",
    name: `Express News`,
    person: `Sultan Ali Lakhani , LAHORE`,
    des: `“It is my pleasure to write this review and express my
                      gratitude towards the branding services provided by your
                      talented team. As the chairman of Express News Channel, I
                      was looking for a reliable agency to help us rebrand and
                      renew our public image. That is when I was recommended to
                      the FH Group”`,
  },
  {
    img: "https://utfs.io/f/57feeee9-23e0-4181-82f8-b5e23a82c582-7u1x80.jpg",
    name: `PNN News`,
    person: `Malik Mudassar Khokar , LAHORE`,
    des: `“I am writing this review to express my sincerest
                      appreciation for the branding services that your team
                      provided to my company, PNN News Channel. We were looking
                      to revamp our branding and create a fresh new look for our
                      channel, and we couldn&apos;t have achieved it without
                      your team&apos;s help.”`,
  },
];

const Testimonial = ({ style_service }: any) => {
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
            {/* <div className="col-lg-4">
              <div>
                <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734089436/FHGROUPOC/p1zmlbmlxsufeblfydcz.png" alt="" className="w-100" />
              </div>
            </div> */}
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
                  {testimonial_data.map((item, index) => (
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
                        <blockquote className="cs_testimonial_text">
                          {item.des}
                        </blockquote>
                        <div className="cs_testimonial_meta center all_left">
                          <div className="cs_testimonial_avatar">
                            <img
                              style={{ width: "95px" }}
                              className="cs_radius_15 "
                              src={item.img}
                              alt={item.name}
                            />
                          </div>
                          <div className="cs_testimonial_meta_right">
                            <div style={{fontWeight:"700"}} className=" h6 cs_testimonial_avatar_name disable_m">
                              {item.name}
                            </div>
                            <div className="cs_testimonial_avatar_designation">
                              {item.person}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="cs_pagination cs_style1"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_60"></div>

        {style_service ? null : (
          <div className="cs_height_150 cs_height_lg_60"></div>
        )}
      </section>
      {style_service ? null : <div className=" cs_height_lg_0"></div>}
      <div className="cs_height_lg_0"></div>
    </>
  );
};

export default Testimonial;
