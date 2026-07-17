"use client";
import React from "react";

interface DataType {
  img: string;
}
const clients_data: DataType[] = [
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719477419/FHGROUPOC/HOME/GREY-LOGOS/x2ugam4ebx0egne1l2bd.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476717/FHGROUPOC/HOME/GREY-LOGOS/c9q9hjxzcfy6hytcziqg.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476443/FHGROUPOC/HOME/GREY-LOGOS/fiy2ic8tcbt5yhanox5s.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476443/FHGROUPOC/HOME/GREY-LOGOS/ulivpsx2yg75nlpewmmx.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476443/FHGROUPOC/HOME/GREY-LOGOS/kedkr50hekoj0baiqjke.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/eztcrthjew1scyfk0qfi.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/weugy1m2iml81s2z1wk6.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/gsopxzewmcdibzdjli3a.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/lhc15koa328xhmarz6dw.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/d2vouoxzzniyzjq8stsv.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/adosadzrlqliffgkx2fr.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476442/FHGROUPOC/HOME/GREY-LOGOS/xpa2ybolhxs5vudyckjv.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/oxugwmbosvz13sopbtax.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/dyvgl5amyzsdmrewm1jk.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/kfswhruk1ex1xjqvgf9k.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/jylzmwk867dj5yodwccz.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476383/FHGROUPOC/HOME/GREY-LOGOS/vs5xown5xucgco9hbt16.png",
  },
  {
    img: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1719476382/FHGROUPOC/HOME/GREY-LOGOS/jai0ck88u9ag66gvmbw7.png",
  },
];

const BrandHomeOne = () => {
  return (
    <>
      <div className="cs_height_70 cs_height_lg_30"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          {clients_data.map((item) => (
            <div className="cs_moving_section cs_animation_speed_70">
              <div className="cs_partner_logo_wrap">
                <div className="cs_partner_logo">
                  <img src={item.img} alt="FH GROUP-One Step Solution" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_70 cs_height_lg_30"></div>
    </>
  );
};

export default BrandHomeOne;
