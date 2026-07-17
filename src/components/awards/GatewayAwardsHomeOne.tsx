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
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}
[];

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: `Dribbbble`,
    title: `Data Collection`,
    des: `We collect only essential user and transactional data necessary for processing payments and complying with legal requirements.`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Envato`,
    title: `Data Usage`,
    des: `Your information is used solely to process payments, provide service analytics, and enhance user experience. We do not sell or misuse your data.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Data Sharing`,
    des: `Information is shared only with trusted banking partners and authorities when required by law.`,
  },
  {
    id: 4,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Security Standards`,
    des: `All payment data is encrypted using the latest standards and securely stored. We comply with PCI-DSS and SSL encryption protocols.`,
  },
  {
    id: 5,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `User Rights`,
    des: `You may request access, correction, or deletion of your stored personal data at any time.`,
  },
];
const terms_data: DataType[] = [
  {
    id: 6,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: `Dribbbble`,
    title: `Service Usage`,
    des: `The payment gateway is strictly for legal commercial use. Any misuse, including illegal transactions, will result in immediate termination of service.`,
  },
  {
    id: 7,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Envato`,
    title: `Transaction Charges`,
    des: ` A flat fee of 3.5% per transaction is applicable on all successful payments processed through our gateway.`,
  },
  {
    id: 8,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Settlement Time`,
    des: `Eve The total amount (after deduction of the 3.5% fee) will be transferred to the client’s registered bank account after 10 business days from the transaction date.`,
  },
  {
    id: 9,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Uptime Guarantee`,
    des: `We provide 99.9% service uptime. Any planned maintenance will be communicated 24 hours prior.`,
  },
  {
    id: 10,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Termination Clause`,
    des: `Either party may terminate the agreement with a 30-day prior written notice. Any pending dues will be settled accordingly.`,
  },
  {
    id: 11,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Dispute Resolution`,
    des: `Any disputes regarding transactions must be reported within 7 days of settlement for review and resolution.`,
  },
];

const GatewayAwardsHomeOne = ({ style_2 }: any) => {
  const [activeTab, setActiveTab] = useState(99);
  const [activeTab2, setActiveTab2] = useState(99);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };
  const handleMouseEnter2 = (index: any) => {
    setActiveTab2(index);
  };

  return (
    <>
      {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_heading_title">
                Why Choose FH Group Payment Gateway?
              </h2>
            </div>
          </div>
          <div className="h1 mt-5">Privacy Policy</div>
          <div className="cs_height_30 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`mb-0 pb-4 cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${
                  activeTab === i ? "active" : ""
                }`}
              >
                <div className="cs_card_left">
                  {/* <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div> */}
                  <div>
                    <h2 className="cs_card_title">- {item.title}</h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>

                <div className="cs_card_hover_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
              </div>
            ))}
          </div>

          <div className="h1 mt-5">Terms & Conditions</div>
          <div className="cs_height_30 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {terms_data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter2(i)}
                className={`mb-0 pb-4 cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${
                  activeTab2 === i ? "active" : ""
                  }`}
                
              >
                <div className="cs_card_left">
                  {/* <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div> */}
                  <div>
                    <h2 className="cs_card_title">- {item.title}</h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>

                <div className="cs_card_hover_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default GatewayAwardsHomeOne;
