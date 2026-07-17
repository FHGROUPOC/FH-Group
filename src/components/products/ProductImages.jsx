import React from "react";

const ProductImages = () => {
  return (
    <>
      <div className="product-images-grid">
        <div className="main-img">
          <img
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1753187121/03_hudfle.jpg"
            alt="Main product image"
          />
        </div>
        <div className="small-images-main">
          <div className="small-images">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1753187121/02_jf4rlq.jpg"
              alt="Product image 2"
            />
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1753187120/01_rotfam.jpg"
              alt="Product image 1"
            />
          </div>
          <div className="small-images">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1753187120/01_rotfam.jpg"
              alt="Product image 1"
            />
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1753187121/02_jf4rlq.jpg"
              alt="Product image 2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
