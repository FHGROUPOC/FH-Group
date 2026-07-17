import React from "react";
import Image from "next/image";

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Digital Product Design",
  description: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digita`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
};
const { title, description, features } = hero_contact;

const HeroServiceDetails = ({ thisService }: any) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            {/* <div className="cs_section_heading_text"> */}
            <div>
              <h2 className="cs_section_title anim_text_writting">
                {thisService?.title}
              </h2>
              <div className="cs_service_details_text mt-3">
                <div className="cs_service_details_p">
                  <p className="anim_text">{thisService?.desc}</p>
                  {/* <ul className="anim_div_ShowDowns">
                  {thisService?.sub_category.map((item: any, i: any) => (
                    <li key={i}>{item.title}</li>
                  ))}
                </ul> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="cs_height_100 cs_height_lg_60"></div> */}
          {/* <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image
                  width={675}
                  height={390}
                  src={thisService?.img}
                  alt={thisService?.title}
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HeroServiceDetails;
