"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Service_data from "@/data/service_data";

const NewServicePoint = ({ thisService }) => {
  const [mainService, setMainService] = useState(thisService);
  const [selectedService, setSelectedService] = useState(thisService);

  useEffect(() => {
    // ✅ If `thisService` changes (new page), update states
    setMainService(thisService);
    setSelectedService(thisService);
  }, [thisService]);
  return (
    <>
      <div className="services-points-section">
        <div className="service-details-intro">
          <div className="content">
            {thisService?.sub_category?.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide"
              >
                <h5 className="w-100 mb-2">{item.title}</h5>

                {Array.isArray(item.desc) ? (
                  item.desc.length === 1 ? (
                    <div className="cs_work_subtitle mt-1 mb-5">
                      {item.desc[0]}
                    </div>
                  ) : (
                    item.desc.map((line, index) => (
                      <div
                        key={index}
                        className={`cs_work_subtitle mt-1 ${
                          index === item.desc.length - 1 ? "mb-5" : "mb-2"
                        }`}
                      >
                        {line}
                      </div>
                    ))
                  )
                ) : (
                  <div className="cs_work_subtitle mt-1 mb-5">{item.desc}</div>
                )}
              </div>
            ))}
          </div>
          <div className="more-service-option">
            <div className="side-text">
              <h6>FULL LIST OF SERVICES</h6>
            </div>

            <div className="other-services">
              {mainService &&
                Service_data.filter((item) =>
                  mainService.attached_services.includes(item.id.toString())
                ).map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setSelectedService(item);
                    }}
                    className="block mb-2 text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedService && (
                <motion.div
                  key={selectedService?.title}
                  className="small-detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold">
                    {selectedService?.title}
                  </h3>
                  <div className="text-gray-700 mt-2 mb-3 ">
                    {selectedService?.desc.length > 127
                      ? selectedService?.desc.substring(0, 127) + "..."
                      : selectedService?.desc}
                  </div>
                  <a href="/contactus" className="contact-btn">
                    Let's Talk
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="content">
          {thisService?.sub_category?.slice(2).map((item, i) => (
            <div
              key={i + 2}
              className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide"
            >
              <h5 className="w-100 mb-2">{item.title}</h5>
              {Array.isArray(item.desc) ? (
                item.desc.length === 1 ? (
                  <div className="cs_work_subtitle mt-1 mb-5">
                    {item.desc[0]}
                  </div>
                ) : (
                  item.desc.map((line, index) => (
                    <div
                      key={index}
                      className={`cs_work_subtitle mt-1 ${
                        index === item.desc.length - 1 ? "mb-5" : "mb-2"
                      }`}
                    >
                      {line}
                    </div>
                  ))
                )
              ) : (
                <div className="cs_work_subtitle mt-1 mb-5">{item.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewServicePoint;
