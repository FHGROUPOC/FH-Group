"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { CiSearch } from "react-icons/ci";

// interface DataType {
//   id: number;
//   img: any;
//   link:any;
//   title: string;
//   des: string;
// }

// const blog_data: DataType[] = [
//   {
//     id: 1,
//     link: "/digital-marketing-blog",
//     img: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735136484/FHGROUPOC/BLOG/dpismsqnebamxm0qh66p.jpg',
//     title: `The Ultimate Guide to Digital Marketing: Its History and Scope in 2025`,
//     des: `Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage various digital channels such as search engines, social media, email, websites, and mobile apps to connect with their current and prospective customers.`,
//   },
//   {
//     id: 2,
//     link: "/motion-graphics-blog",
//     img: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735394646/FHGROUPOC/BLOG/a5n0ygqbfqwisfqmyxy3.jpg',
//     title: `Ultimate Guide to Motion Graphics: History, Tools, and Scope in 2025`,
//     des: `Motion graphics are animated visuals that convey information or stories through text, shapes, and illustrations. They prioritize engaging designs over character-driven storytelling.`,
//   },
//   {
//     id: 3,
//     link: "/brand-strategy-blog",
//     img: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1736520712/FHGROUPOC/BLOG/cvt9izungrsgibxcc6md.jpg',
//     title: `Mastering Brand Strategy: Essential Insights, Tools, and Future Trends for 2025"`,
//     des: `Brand strategy is a comprehensive plan that outlines a brand’s purpose, positioning, messaging, and visual identity. It ensures consistency across all touchpoints, building trust and loyalty with the target audience.`,
//   },

//   // {
//   //   id: 2,
//   //   img: blog_img_2,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 3,
//   //   img: blog_img_3,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 4,
//   //   img: blog_img_4,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 5,
//   //   img: blog_img_5,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 6,
//   //   img: blog_img_6,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 7,
//   //   img: blog_img_7,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 8,
//   //   img: blog_img_8,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
//   // {
//   //   id: 9,
//   //   img: blog_img_9,
//   //   title: `Reasons Business Needs a Agency`,
//   //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   // },
// ]

const BlogArea = ({ data }) => {
  const [mydata, setmydata] = useState(data);
  const searchblog = (val) => {
    const myval = val.toLowerCase();

    if (myval.length > 1) {
      const filterdata = data?.filter((items) =>
        items.title?.toLowerCase().includes(myval)
      );
      setmydata(filterdata);
    } else {
      setmydata(data);
    }
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1 col-rev">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  New Day <br /> New Inspiration
                </h2>
              </div>
              <div className="cs_section_heading_text blog_search w-100-m">
                <CiSearch />
                <input
                  type="text"
                  onChange={(e) => searchblog(e.target.value)}
                  placeholder="Search Blog"
                  className="min-w-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60  "></div>
      <section>
        <div className="container">
          <div className="row">
            {mydata?.map((item, i) => (
              <div
                key={i + 1}
                className={`col-md-4 ${i + 1 === 2 ? "mt-0 mt-md-5" : ""} ${
                  i + 1 === 5 ? "mt-0 mt-md-5" : ""
                } ${i + 1 === 8 ? "mt-0 mt-md-5" : ""}`}
              >
                <div className="anim_div_ShowDowns">
                  <Link
                    href={"/blog/" + item?.slug}
                    className="cs_blog cs_style_1"
                  >
                    <div>
                      <Image
                        width={1260}
                        height={600}
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">{item.title}</h6>
                      <p className="cs_blog_subtitle">
                        {item?.blog_detail[0]?.description?.substring(0, 135)}{" "}
                        <span style={{ color: "green" }}>...</span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              {/* <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item"><span></span> Load More</a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
