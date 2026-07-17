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
                FH Group Academic
              </h2>
              <div className="cs_height_20 cs_height_lg_20"></div>
              <p>
              An academic problem solution typically involves a structured approach to identifying, analyzing, and addressing a specific issue or challenge within a particular field of study. The process begins with a clear definition of the problem, followed by a thorough review of existing literature or prior research to understand the context and underlying factors. Next, potential solutions are proposed, evaluated for feasibility, and supported by evidence or data. The solution is then implemented or suggested for future exploration, with a focus on measurable outcomes and long-term impact. This approach ensures that the solution is not only practical but also aligned with theoretical frameworks and academic standards.
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
                  <Image src={logo} alt="logo" />
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
