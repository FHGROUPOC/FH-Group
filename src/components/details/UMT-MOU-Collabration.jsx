"use client";

import React from "react";
import Image from "next/image";

const UMTMOUCollabration = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="">
            <h3 className="anim_word_writting disable_m heading-text">
              FH Group x UMT – A Strategic Collaboration
            </h3>
          </div>

          <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
            <div className="cs_height_20 cs_height_lg_10"></div>
            {/* <div className="cs_height_20 cs_height_lg_10"></div> */}
            <p className="cs_text_style_body client-para pt-2 pb-2">
              FH Group proudly announces its collaboration with the University
              of Management and Technology (UMT) through a signed Memorandum of
              Understanding (MoU) on March 12, 2025. This partnership marks a
              significant step towards bridging the gap between academia and
              industry, fostering innovation, and empowering the next generation
              of professionals.
            </p>
          </div>
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
                style={{ maxHeight: "550px" }}
                width={1230}
                height={600}
                src={
                  "https://res.cloudinary.com/dgtk4rthy/image/upload/v1741932380/FHGROUPOC/MOU-Signed-Partnership-Collaboration/UMT/scpcbatsxtlucwtmyual.jpg"
                }
                alt="fh group umt university"
              />
            </div>
            <div className="center gap-2 mt-2 mb-2 mob-flex-col">
              <div className="reveal">
                <Image
                  width={615}
                  height={300}
                  src={
                    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1741932380/FHGROUPOC/MOU-Signed-Partnership-Collaboration/UMT/zoaslfmvvcnkaq0qx8pc.jpg"
                  }
                  alt="fh group umt university"
                />
              </div>
              <div className="reveal">
                <Image
                  width={615}
                  height={300}
                  src={
                    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1741932380/FHGROUPOC/MOU-Signed-Partnership-Collaboration/UMT/n3uvpso2gt0edc832rax.jpg"
                  }
                  alt="fh group umt university"
                />
              </div>
            </div>

            <div className="center gap-2 mt-2 mb-2 mob-flex-col">
              <div className="reveal">
                <Image
                  width={615}
                  height={300}
                  src={
                    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1741932380/FHGROUPOC/MOU-Signed-Partnership-Collaboration/UMT/syo6zxz5fbomq8cgwihr.jpg"
                  }
                  alt="fh group umt university"
                />
              </div>
              <div className="reveal">
                <Image
                  width={615}
                  height={300}
                  src={
                    "https://res.cloudinary.com/dgtk4rthy/image/upload/v1741935873/FHGROUPOC/MOU-Signed-Partnership-Collaboration/UMT/vmngzxns4qozsny8gtu5.jpg"
                  }
                  alt="fh group umt university"
                />
              </div>
            </div>
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <div className="anim_div_ShowDowns">
                <div className="client-points">
                  <h6 className="mt-5 mb-2">
                    FH Group Collaboration: UMT Students' Internships and
                    Projects
                  </h6>
                  <p>
                    Through this collaboration, FH Group will provide UMT
                    students with hands-on internship opportunities and
                    final-year project facilitation, ensuring they gain
                    real-world experience and industry exposure. Additionally,
                    FH Group experts will offer guidance to UMT faculty on
                    industry-relevant tools, methodologies, and best practices,
                    enhancing the academic learning process.
                  </p>
                  <h6 className="mt-5 mb-2">
                    Sharing practical insights and expertise.
                  </h6>
                  <p>
                    As part of this partnership, our team will serve as visiting
                    lecturers, sharing practical insights and expertise to equip
                    students with essential skills for their careers.
                    Furthermore, FH Group will actively participate in
                    university seminars, contributing to knowledge exchange and
                    fostering professional growth.
                  </p>
                  <h6 className="mt-5 mb-2">
                    Creating impactful learning experiences
                  </h6>
                  <p>
                    This MoU reflects our commitment to nurturing future talent,
                    strengthening industry-academic ties, and creating impactful
                    learning experiences. Together, we are shaping a brighter
                    future!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UMTMOUCollabration;
