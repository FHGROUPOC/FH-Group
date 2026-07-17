"use client";
import team_data from "@/data/team_data";
import Link from "next/link";
import React from "react";

type DataType = {
  sub_title: string;
  title: string;
  title_2: string;
};
const team_content: DataType = {
  sub_title: "Our Team",
  title: "What Sets Our Team Apart",
  title_2: "Meet the Team Behind the Craftsmanship",
};
const { sub_title, title, title_2 } = team_content;

const TeamHomeTwo = ({ style_2, style_3 }: any) => {
  return (
    <>
      {style_2 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
      {style_3 ? <div className="cs_height_150 cs_height_lg_30"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {sub_title}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                {style_2 ? title_2 : title}
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/contact" className="cs_btn cs_style_1">
                <span>Contact Us</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038
                                          11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>

          <div className="cs_team_section anim_blog">
            <div className="cs_team_img">
              <Link href="/">
                <img src="/assets/img/team/teamsimg4.png" alt="Thumb" />
                <div className="cs_portfolio_overlay"></div>
              </Link>
              <div className="cs_team_text">
                <Link href="/">
                  <h6 className="cs_team_text_title">Skilled Fabricators</h6>
                </Link>
                {/* <p className="cs_team_subtitle">Creative Designer</p> */}
              </div>
            </div>
            <div className="cs_team_img">
              <Link href="/">
                <img src="assets/img/team/teamsimg2.png" alt="Thumb" />
                <div className="cs_portfolio_overlay"></div>
              </Link>
              <div className="cs_team_text">
                <Link href="/">
                  <h6 className="cs_team_text_title">Innovative Engineers</h6>
                </Link>
                {/* <p className="cs_team_subtitle">Creative Designer</p> */}
              </div>
            </div>
            <div className="cs_team_img">
              <Link href="/">
                <img src="/assets/img/team/teamsimg3.png"alt="Thumb" />
                <div className="cs_portfolio_overlay"></div>
              </Link>
              <div className="cs_team_text">
                <Link href="/">
                  <h6 className="cs_team_text_title">Quality Inspectors</h6>
                </Link>
                {/* <p className="cs_team_subtitle">Creative Designer</p> */}
              </div>
            </div>
            <div className="cs_team_img">
              <Link href="/">
                <img src="/assets/img/team/teamsimg1.png"alt="Thumb" />
                <div className="cs_portfolio_overlay"></div>
              </Link>
              <div className="cs_team_text">
                <Link href="/">
                  <h6 className="cs_team_text_title">Customer Support</h6>
                </Link>
                {/* <p className="cs_team_subtitle">Creative Designer</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {style_2 ? <div className="cs_height_150 cs_height_lg_60"></div> : null}
    </>
  );
};

export default TeamHomeTwo;
