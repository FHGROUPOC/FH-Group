"use client";

import Service_data from "@/data/service_data";
import Link from "next/link";
import React, { useState } from "react";

interface DataType {
  faq_data: {
    id: string;
    question: string;
    answer: string;
  }[];
  title: string;
  description: string;
}

const service_faq_content: DataType = {
  faq_data: [
    {
      id: "One",
      question: `What makes FH Group stand out in the creative industry?`,
      answer: `At FH Group, we pride ourselves on delivering innovative and tailored solutions to meet every clients unique needs. Our team of experts ensures the highest quality in design, development, advertising, and broadcasting services. With a focus on creativity and strategy, we aim to exceed expectations at every step.`,
    },
    {
      id: "Two",
      question: `How does FH Group ensure the quality of its services?`,
      answer: `Quality is at the heart of everything we do. Our process involves rigorous planning, regular quality checks, and feedback integration. Whether it,s animation, advertisement, or content creation, we maintain a standard of excellence that guarantees customer satisfaction`,
    },
    {
      id: "Three",
      question: `How long does it take for FH Group to deliver a project?`,
      answer: `We understand the importance of deadlines. Our team ensures timely delivery by carefully managing resources and maintaining constant communication with clients. While the duration depends on the project's complexity, we always strive to deliver within the agreed timeframe without compromising quality.`,
    },
    {
      id: "Four",
      question: `Does FH Group offer post-project support?`,
      answer: `Absolutely! Our relationship with clients doesn’t end after project delivery. We provide ongoing support to ensure that our solutions remain effective and impactful, helping your business grow and thrive.`,
    },
    {
      id: "Five",
      question: `Can FH Group handle urgent or short-deadline projects?`,
      answer: `Yes, we specialize in managing urgent projects without sacrificing quality. Our efficient workflows and experienced team allow us to adapt to tight schedules, ensuring your project is completed on time with the same attention to detail.`,
    },
  ],
  title: `Others Services List`,
  description: `we specialize in providing premium Engineering solutions tailored to meet the unique needs of our clients. From intricate designs to large-scale projects, we combine state-of-the-art technology with unmatched expertise to deliver excellence.`,
};
const { faq_data, title, description } = service_faq_content;

const ServiceDetailsFaq = ({ thisService }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="cs_service_details cs_type_2">
          <div className="cs_service_details_img">
            <div className="cs_accordeon">
              {faq_data.map((item, i) => (
                <div
                  key={i}
                  onClick={() => toggleAccordion(i)}
                  className={`cs_accordion_item ${
                    i === activeIndex ? "active cs_icon" : ""
                  }`}
                >
                  <div className="cs_accordion_header">
                    <p
                      className="cs_accordion_title cs_m0"
                      id={`heading${item.id}`}
                    >
                      {item.question}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      width="30"
                      style={{
                        transform:
                          i === activeIndex ? "rotate(-90deg)" : "none",
                      }}
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>

                  <div
                    className={`cs_accordion_body ${
                      i === activeIndex ? "" : "d-none"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_service_details_text">
            <div className="cs_specialization cs_section_heading cs_style_1">
              <div className="cs_section_heading_text">
                <h4 className="cs_section_title_4">{title}</h4>
              </div>
              <p className="mt-2">{description} </p>
              <div>
                <ul>
                  {Service_data.map((item: any, i: any) => (
                    <Link href={"/service/" + item?.linktitle}>
                      {" "}
                      <li key={i}>{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_back_to_services_btn">
              <a href="/service" className="cs_style_1">
                <span>Back To Services Page</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsFaq;
