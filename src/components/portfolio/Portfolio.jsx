"use client";

import React, { useState } from "react";
// import portfolio_data from '@/data/portfolio_data';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import portfolio_data from "@/data/portfolio_data";

const categories = [
  "All",
  ...new Set(portfolio_data?.map((item) => item.category)),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="cs_isotop_item_menu col-md-1">
              <ul className="anim_div_ShowZoom style_active">
                {categories.map((cate, i) => (
                  <React.Fragment key={i}>
                    <li
                      onClick={() => filterItems(cate)}
                      className={`${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate}
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>

            <div className="cs_isotop_items_details row">
              {items?.map((item, i) => (
                <div
                  key={i}
                  className="col-md-4 cs_item cs_ui_design cs_development full_width_m"
                >
                  <Link
                    href={"/portfolio-details/" + item.title.split(" ")[0]}
                    className="cs_portfolio cs_style_1"
                  >
                    <div className="cs_portfolio_img">
                      <img
                        src={item.img}
                        className="img-fluid"
                        alt={item.title}
                      />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2
                        style={{ color: "black" }}
                        className="cs_portfolio_title"
                      >
                        {item.title}
                      </h2>
                      <div className="cs_portfolio_subtitle">{item.des}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item"><span></span> Load More</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
