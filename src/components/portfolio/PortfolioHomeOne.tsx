'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";





const PortfolioHomeOne = () => {

  const [data,setdata] = useState([]);

  useEffect(()=>{

    const myfun =async()=>{
      const data = await (await fetch(`/api/clients`)).json();
      const filterdata = await data?.filter((items:any)=>items.status==='Approved')?.reverse();
  setdata(filterdata)
    }
myfun()
  },[])


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
            {data?.map((item:any, i:any) => (
              <>
             <Link href={`/client/${item?.slug}`}>  <Image
                  className="working_on_it_img"
                  width={320}
                  height={418}
                  src={item.mainimg}
                  alt={item.title}
                />
                </Link> 
                {/* <div className="">
                <h2 className="">{item.title}</h2>
                <div className="cs_portfolio_subtitle">{item.category}</div>
              </div> */}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="cs_height_0 cs_height_lg_0"></div>
    </>
  );
};

export default PortfolioHomeOne;
