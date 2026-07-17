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
  title_1: `Why Choose FH Group Gateway?`,
  des_1: `Our gateway offers fast, safe, and country-compliant transactions with full transparency. With real-time tracking, 24/7 support, and global accessibility, FH Group ensures a seamless experience for every client — no hidden charges, just trusted service.`,
  title_2: `Gateway That Works for You`,
  des_2: `Experience secure, fast, and globally compliant payments. FH Group ensures smooth transactions with real-time tracking, full transparency, and 24/7 support — built for client trust and ease.`,
  features: [
    {
      id: 1,
      title: `Security`,
      des: `End-to-end encrypted transactions for global safety.`,
    },
    {
      id: 2,
      title: `Speed`,
      des: `Guaranteed payouts within 10 business days.`,
    },
    {
      id: 3,
      title: `Compliance`,
      des: `Supports country-specific financial regulations.`,
    },
  ],
};

const { title_1, des_1, title_2, des_2, features } = innovative_data;

const GatewayHomeTwo = () => {
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
              <div className="cs_img_section">
                <Image src={image} alt="modern_digital_need" />
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

export default GatewayHomeTwo;
