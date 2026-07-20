'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import Image, { StaticImageData } from 'next/image';





const BlogHomeOne = ({ style_2, style_3 }: any) => {

  const [blog_data,setblog_data] = useState([]);

  useEffect(() => {
    const myfun = async () => {
      try {
        // 1. Check if we have an environment variable, fallback to Vercel's system variable, or default to a relative path
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL 
          ? process.env.NEXT_PUBLIC_SITE_URL 
          : process.env.VERCEL_URL 
            ? `https://${process.env.VERCEL_URL}` 
            : ''; // Falls back to standard relative path on the actual client side

        const data = await fetch(`${baseUrl}/api/blogs`);
        const jsondata = await data.json();
        const filtered = jsondata?.filter((items: any) => items.status === 'Approved');
        setblog_data(filtered);
      } catch (error) {
        console.log('something went wrong with db', error);
      }
    };
    myfun();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          {style_3 ?
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  Related News <br /> New Day New Inspiration
                </h2>
              </div>
            </div>
            :
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <div className="cs_section_subtitle anim_div_ShowZoom">
                  Our Blog
                </div>
                <h2 className="cs_section_title anim_heading_title">
                  New Day <br />New Inspiration
                </h2>
              </div>
              <div className="cs_section_heading_right cs_btn_anim">
                <Link href="/blog" className="cs_btn cs_style_1">
                  <span>View All Blogs</span>
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                      fill="currentColor"></path>
                  </svg>
                </Link>
              </div>
            </div>
          }
          <div className="cs_height_100 cs_height_lg_60"></div>
          <Swiper
            loop={true}
            speed={1000}
            spaceBetween={30}
            slidesPerView={"auto"}
            pagination={{
              el: ".cs_pagination",
              clickable: true
            }}
            className={`cs_slider cs_slider_3 anim_blog ${style_2 ? '' : 'style_slider'}`}>
            {blog_data?.reverse()?.slice(0,3)?.map((item:any, i:any) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cs_post cs_style_1">
                  <Link href={'/blog/'+item?.slug} className="cs_post_thumb">
                    <Image width={1260} height={600} src={item?.img} alt="image-here" />
                  </Link>
                  <div className="cs_post_info">
                    <h2 className="cs_post_title">
                      <Link href={'/blog/'+item?.slug}>{item?.title}</Link>
                    </h2>
                    <p className="cs_m0">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </section>
      {style_2 ? null : style_3 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}


    </>
  );
};

export default BlogHomeOne;