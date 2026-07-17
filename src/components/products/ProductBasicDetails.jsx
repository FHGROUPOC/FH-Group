"use client";
import React, { useState } from "react";
import BuyingDetails from "./BuyingDetails";
import Rating from "@mui/material/Rating";
import { MdOutlineMessage } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

const ProductBasicDetails = () => {
  const [value, setValue] = "4";
  return (
    <>
      <div className="product-basic-details">
        <div className="content">
          <div className="d-flex gap-2 align-items-center price-hide-tab">
            <h4>$90</h4>
            <h4>
              <del>$199</del>
            </h4>
          </div>
          <h4>Handcrafted Industrial Wood & Metal Bar Stool</h4>
          <div className="d-flex gap-4 align-items-center">
            <Rating name="read-only" value={value} readOnly />
            <div className="d-flex gap-2 align-items-center">
              <div className="points">
                <MdOutlineMessage />
                34 Reviews
              </div>
              <div className="points">
                <IoBagCheckOutline />
                150+ Orders
              </div>
            </div>
          </div>
          <p>
            Elevate your space with this stylish and durable bar stool,
            featuring a rich, natural wood seat set atop a sturdy black metal
            frame. Its industrial-inspired design seamlessly blends with modern
            and rustic decors, making it a perfect addition to your kitchen
            island, home bar, or counter. Built for comfort and longevity.
          </p>
        </div>
        <div className="buying-details">
          <BuyingDetails />
        </div>
      </div>
    </>
  );
};

export default ProductBasicDetails;
