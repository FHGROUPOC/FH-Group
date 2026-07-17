import React from "react";
import Image from "next/image";
import image from "@/assets/img/modern_digital_need.jpg";

interface DataType {
  title_1: string;
  des_1: string;
  title_2: string;
  des_2: string;
  features: {
    id: number;
    title: string;
    des: string;
  }[];
}

const innovative_data: DataType = {
  title_1: `Studio Pixel Training Institute`,
  des_1: `Our goal is to be the top digital training institute in Pakistan, offering practical, industry-driven programs like the Blender character animation course, Next.js web development course, and Meta ads training course. With expert trainers and hands-on projects, you won’t just learn—you’ll build a career.`,
  title_2: `We proudly offer:`,
  des_2: `Recognized as the best Blender course for beginners, our training offers step-by-step guidance that simplifies complex animation techniques, helping you master every stage of character animation and rigging with confidence and creativity`,
  features: [
    {
      id: 1,
      title: `Blender Character Animation Course`,
      des: ``,
    },
    {
      id: 2,
      title: `Web Development with Next.js`,
      des: ``,
    },
    {
      id: 3,
      title: `Social media meta advertisement `,
      des: ``,
    },
  ],
};

const { title_1, des_1, title_2, des_2, features } = innovative_data;

const InnovativeHomeTwo = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_modern_needs cs_style">
            <div className="cs_col_md_778">
              <div className="cs_text">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title anim_heading_title">
                      {title_1}
                    </h2>
                  </div>
                </div>
                <div className="cs_height_65"></div>
                <p className="anim_text">{des_1}</p>
              </div>
              <div className="cs_height_85"></div>
              <div className="row anim_div_ShowLeftSide">
                {features.map((item, i) => (
                  <div className="col-md-4 col-12" key={i}>
                    <div className="cs_stroke_text">
                      <span>{item.id}</span>
                    </div>
                    <div className="text-section">
                      <h6>{item.title}</h6>
                      <p>{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs_col_md_672">
              <div className="cs_img_section second-section-cont">
                <Image
                  className="second-section-img"
                  width={602}
                  height={627}
                  src="https://i.pinimg.com/1200x/ff/77/a5/ff77a51c1611c8e9b0816f15b9aa4205.jpg"
                  alt="modern_digital_need"
                />
                <div className="cs_img_card_text anim_div_ShowZoom">
                  <h6 className="cs_color_style">{title_2}</h6>
                  <p>{des_2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovativeHomeTwo;
