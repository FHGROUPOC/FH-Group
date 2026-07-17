"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdGlobe } from "react-icons/io";

const Eachclientdata = ({ client }) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="">
            <h3 className="anim_word_writting disable_m heading-text">
              {client.title}
            </h3>
          </div>
          {client?.blog_detail?.map((item) => (
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <div className="cs_height_20 cs_height_lg_10"></div>
              <h5 className="cs_heading_text anim_heading_title disable_m client-ser mt-2">
                {item?.subheading}
              </h5>
              {/* <div className="cs_height_20 cs_height_lg_10"></div> */}
              <p className="cs_text_style_body client-para pt-2">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="cs_height_65 cs_height_lg_60"></div> */}
      {/* <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="cs_text_style_1">
                      <p className="cs_headed_text">Date</p>
                      <h6 className="cs_title_text">
                        {" "}
                        {client?.createdAt?.split("T")[0]}{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image
                width={1230}
                height={600}
                src={client?.pageimg}
                alt="blog_detals_banner"
              />
            </div>
            {client?.blog_detail?.map((item) => (
              <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
                <div className="anim_div_ShowDowns">
                  {item?.bullets?.map(
                    (ite, i) =>
                      ite?.heading !== "" && (
                        <>
                          <div key={ite._id} className="client-points">
                            <li className="mt-5 mb-4  ">{ite.heading}</li>
                            <h6 className="mt-2 mb-2">{ite.subheading}</h6>
                            <p>{ite.desc}</p>
                          </div>
                        </>
                      )
                  )}
                </div>
              </div>
            ))}
            {client?.weblink && (
              <div className="d-flex justify-center gap-2 mt-5">
                <Link
                  href={client.weblink}
                  target="_blank"
                  className="text-blue-600 underline mx-auto d-flex justify-center gap-1 align-items-center"
                >
                  <IoMdGlobe size={25} />
                  {client.weblink}
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Eachclientdata;
