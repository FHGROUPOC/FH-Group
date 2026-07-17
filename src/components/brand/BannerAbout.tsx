import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";

const BannerAbout = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                FH Group Your Partner for <br /> Digital Success.
              </h2>
              <div className="cs_height_20 cs_height_lg_20"></div>
              <p>
                Welcome to FH Group, your trusted ,where creativity meets
                innovation. We specialize in crafting exceptional **brand
                experiences** that resonate with audiences worldwide. From **SEO
                services** and **web development** to **social media
                management**, **3D animations**, and **graphic design**, we
                offer a comprehensive suite of solutions tailored to bring your
                vision to life.
              </p>
            </div>
            <div className="cs_section_heading_right">
              <div className="cs_animated_badge">
                <div className="rounded_text rotating">
                  <svg viewBox="0 0 200 200">
                    <path
                      id="textPath"
                      d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                      transform="translate(100,100)"
                      fill="none"
                      strokeWidth="0"
                    ></path>
                    <g fontSize="22.1px">
                      <text textAnchor="start">
                        <textPath
                          className="coloring"
                          href="#textPath"
                          startOffset="0%"
                        >
                          FH GROUPOC . FH GROUPOC . FH GROUPOC . &nbsp;
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="position-absolute cs_ceneter_text">
                  <Image src={logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="cs_height_150 cs_height_lg_120"></div>

      </section>
    </>
  );
};

export default BannerAbout;
