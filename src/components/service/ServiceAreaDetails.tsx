import React from "react";

const ServiceAreaDetails = ({ thisService }: any) => {
  return (
    <>
      {/* <div className="cs_height_50 cs_height_lg_50"></div> */}
      <section>
        <div className="container ">
          <img
            className="mb-3 min-height-img"
            src={thisService.second_img}
            alt=""
          />
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title mb-5">Overview</h4>
            {/* <p className="cs_mp0 anim_text">{thisService?.desc}</p> */}
          </div>
          {/* <div className="cs_height_50 cs_height_lg_40"></div> */}
          <div>
            {thisService?.sub_category?.map((item: any, i: any) => (
              <div
                key={i}
                className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide"
              >
                <h5 className="w-100 mb-2">{item.title}</h5>

                {Array.isArray(item.desc) ? (
                  item.desc.length === 1 ? (
                    <p className="cs_work_subtitle mt-1 mb-5">{item.desc[0]}</p>
                  ) : (
                    item.desc.map((line: any, index: number) => (
                      <p
                        key={index}
                        className={`cs_work_subtitle mt-1 ${
                          index === item.desc.length - 1 ? "mb-5" : "mb-2"
                        }`}
                      >
                        {line}
                      </p>
                    ))
                  )
                ) : (
                  <p className="cs_work_subtitle mt-1 mb-5">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_60 cs_height_lg_50"></div>
    </>
  );
};

export default ServiceAreaDetails;
