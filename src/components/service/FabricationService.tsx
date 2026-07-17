import React from "react";

interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: "One",
    title: "Consultation",
    description: `We start by thoroughly understanding your needs and goals. During this stage, our team engages in detailed discussions to learn about your vision, project specifications, and any unique requirements. By asking the right questions, we ensure a clear understanding of your objectives. This foundational step enables us to design solutions that align perfectly with your expectations. Additionally, we provide insights and suggestions to optimize your project’s outcome, ensuring feasibility and cost-efficiency.`,
  },
  {
    id: "Two",
    title: "Design & Approval",
    description: `Our design phase involves creating detailed blueprints and 3D models. Using advanced CAD software, we bring your ideas to life digitally. This visual representation allows you to review every detail before Engineering begins. Collaboration is key during this stage, as we incorporate your feedback and make necessary adjustments to ensure the design meets your approval. Our team is committed to precision and innovation, guaranteeing that the final design aligns with your vision and functional needs.`,
  },
  {
    id: "Three",
    title: "Production",
    description: `The production phase is where your vision becomes reality. We utilize state-of-the-art machinery and high-quality materials to fabricate your components with precision. Our skilled technicians and engineers work meticulously to execute the designs, maintaining strict adherence to quality standards. Every step is monitored to ensure accuracy, durability, and alignment with the approved designs. This phase is a testament to our commitment to delivering excellence in every project.`,
  },
  {
    id: "Four",
    title: "Quality Control",
    description: `Quality is at the heart of everything we do. Our quality control process involves rigorous inspections and testing to ensure every component meets our high standards. From material selection to the final product, every detail is scrutinized. Our dedicated quality assurance team uses advanced testing methods to verify strength, durability, and compliance with industry standards. This meticulous process guarantees that the final product not only meets but exceeds your expectations.`,
  },
  {
    id: "Fifth",
    title: "Delivery & Installation",
    description: `Timely delivery and professional installation are critical to the success of any project. Our team ensures that all fabricated components are transported securely to your location. During installation, we prioritize safety, efficiency, and precision to integrate the components seamlessly into your project. Whether it’s a small custom piece or a large structural component, our experienced installation team handles every detail to ensure a hassle-free experience.`,
  },
];
const EngineeringService = () => {
  return (
    <>
      <div className="cs_height_115 cs_height_lg_60"></div>
      <section>
        <div className="">
          <div className="cs_height_135 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_section_heading_hr cs_style_1 cs_color_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title color_black">
                    Our Process
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_70"></div>
            <div className="anim_div_ShowLeftSide">
              {service_data.map((item, i) => (
                <div className="cs_work cs_work_1">
                  <div className="cs_card_work cs_style_1 cs_color_1">
                    <div key={i}>
                      <div className="cs_card cs_style_1">
                        <div className="cs_posagation">
                          <div className="cs_work_style_1"></div>
                          <div className="cs_work_style_2"></div>
                        </div>
                        <div className="cs_stroke_number">
                          <span>{item.id}</span>
                        </div>
                      </div>
                      <h6 className="cs_work_title mt-2 color_grey">
                        {item.title}
                      </h6>
                      <p className="cs_work_subtitle color_grey">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_height_150 cs_height_lg_60"></div>
        </div>
      </section>
      <div className="cs_height_115 cs_height_lg_60"></div>
    </>
  );
};

export default EngineeringService;
