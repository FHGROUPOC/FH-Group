"use client";

import React, { useState } from "react";
// import portfolio_data from '@/data/portfolio_data';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import portfolio_data from "../../data/fabricationportfolio_data";



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
            {/* <div className="cs_isotop_item_menu col-md-1">
              <ul className="anim_div_ShowZoom style_active">
                {categories.map((cate, i) => (
                  <React.Fragment key={i}>
                    <li
                      onClick={() => filterItems(cate)}
                      className={`${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div> */}

            <section>
        <div>
          <div className="container">
            <div className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                <div>
                  <h4 className="cs_heading_text anim_heading_title">
                  Showcasing Excellence in Engineering
                  </h4>
                  <p className="cs_text_style_body">
                  At FH Engineering, we take immense pride in the diversity and quality of the projects we undertake. From commercial buildings to custom metal structures, our portfolio showcases a wide range of successful projects across various industries.
                  </p>
                </div>
              { portfolio_data?.map((items,index)=>(

<div className="cs_solutions_section_img_show">
            { items?.image.length>1 && 
            <>
            <div className="portfolio_solution_1 reveal">
                    <img src={items?.image[0]} alt={items?.alt} />
                  </div>
                     <div className="portfolio_solution_2 reveal">
                     <img src={items?.image[1]} alt={items?.alt} />
                   </div>
                   </>
                  ||
                        
               <div className="portfolio_solution_3 reveal my-5">
                    <img src={items?.image} alt={items?.alt}/>
                  </div>
                  }
         
                </div>
              )) 
              }
              </div>
            </div>
          </div>
        </div>
      </section> 
 
      
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
