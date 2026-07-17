import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ProductImages from "../../components/products/ProductImages";
import ProductBasicDetails from "../../components/products/ProductBasicDetails";
import ProductReviews from "../../components/products/ProductReviews";

const page = () => {
  return (
    <Wrapper>
      {/* <HeaderOne /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="product-detail-main product-detail-container">
            <ProductImages />
            <ProductBasicDetails />
            <ProductReviews />
          </div>
          {/* <FooterOne /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
