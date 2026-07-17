"use client";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const ProductReviews = () => {
  const [value, setValue] = "3";
  return (
    <>
      <div className="product-reviews-main">
        <h5>Product Reviews</h5>
        <div className="all-reviews">
          <div className="single-review">
            <div className="name-rating">
              <h6>Umar Afzal </h6>
              <Rating name="read-only" size="small" value={value} readOnly />
            </div>
            <div className="review">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                qui cupiditate dicta delectus harum, labore, nisi explicabo
                quisquam assumenda cum nulla vitae animi excepturi ab molestias
                quibusdam repudiandae quaerat? Similique!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReviews;
