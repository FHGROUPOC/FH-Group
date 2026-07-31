'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioHomeOne = () => {
  const [data, setdata] = useState<any[]>([]);

  useEffect(() => {
    const myfun = async () => {
      try {
        const response = await fetch(`/api/clients`);
        const resData = await response.json();

        // Check if resData is actually an array before filtering
        if (Array.isArray(resData)) {
          const filterdata = resData
            .filter((item: any) => item.status === 'Approved')
            .reverse();
          setdata(filterdata);
        } else {
          console.error("API did not return an array:", resData);
          setdata([]);
        }
      } catch (error) {
        console.error("Failed to fetch clients:", error);
        setdata([]);
      }
    };

    myfun();
  }, []);

  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_60 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div
                id="onlyforthis"
                className="cs_section_subtitle anim_div_ShowZoom"
              >
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Projects We Are Working On
              </h2>
            </div>
          </div>
          <div className="cs_height_40 cs_height_lg_0"></div>
        </div>
        <div>
          <div className="center wrap w-98 m-auto">
            {data?.map((item: any, i: any) => (
              <React.Fragment key={item?._id || i}>
                <Link href={`/client/${item?.slug}`}>
                  <Image
                    className="working_on_it_img"
                    width={320}
                    height={418}
                    src={item.mainimg}
                    alt={item.title || "Client project"}
                  />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="cs_height_0 cs_height_lg_0"></div>
    </>
  );
};

export default PortfolioHomeOne;