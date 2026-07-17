"use client";
import React from "react";

const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? (
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
      ) : (
        <div className="cs_height_140 cs_height_lg_70"></div>
      )}
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_70">
            <div className="cs_partner_logo_wrap">
              <div className="cs_partner_logo">
                <img src="" alt="image-here" />
              </div>
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_70">
            <div className="cs_partner_logo_wrap">
              <div className="cs_partner_logo">
                <img
                  src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1737545202/FHGROUPOC/FABRICATION/snjnm3ym3krqmu6cdkm5.jpg"
                  alt="Brand Fabrication One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_45 cs_height_lg_45"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_60">
            <div className="cs_partner_logo_wrap">
              <div className="cs_partner_logo">
                <img src="" alt="Brand logo placeholder" />
              </div>
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_60">
            <div className="cs_partner_logo_wrap">
              <div className="cs_partner_logo">
                <img src="" alt="image-here" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;
