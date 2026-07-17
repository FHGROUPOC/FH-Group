"use client";
import React, { useState } from "react";
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";

import award_thumb_1 from "@/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/assets/img/award_thumb_3.jpg";
import Image, { StaticImageData } from "next/image";

interface DataType {
  id: number;
  title: string;
  des: string;
}
[];

const award_data: DataType[] = [
  {
    id: 1,
    title: `1. State-of-the-Art Tools`,
    des: `Mastery in Blender, Cinema 4D, and 3D Maya ensures the best possible outcomes.`,
  },
  {
    id: 2,
    title: `2. Tailored Solutions`,
    des: ` Custom animations designed to meet your specific objectives and branding.`,
  },
  {
    id: 3,
    title: `3. Experienced Team`,
    des: `A dedicated team of animation professionals with years of industry experience.`,
  },
  {
    id: 4,
    title: `4. On-Time Delivery`,
    des: `Timely and efficient project execution without compromising quality.`,
  },
  {
    id: 5,
    title: `5. Versatile Applications`,
    des: ` Perfect for films, advertisements, games, virtual reality, and more.`,
  },
];

const AwardsHomeOne = ({ style_2 }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Expertise
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Why Choose FH Group for Character Animation?
              </h2>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card mb-4 cs_hover_tab anim_div_ShowDowns ${
                  activeTab === i ? "active" : ""
                }`}
              >
                <div className="cs_card_left">
                  {/* <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div> */}
                  <div>
                    <h5 className="">{item.title}</h5>
                    <p className="disable_m">{item.des}</p>
                  </div>
                </div>
                {/* <div className="cs_card_right">
                  <h2 className="cs_card_brand">{item.brand}</h2>
                </div> */}
                {/* <div className="cs_card_hover_img">
                  <Image src={item.img} alt="Thumb" />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="cs_height_lg_60"></div> */}
    </>
  );
};

export default AwardsHomeOne;
