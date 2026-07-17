import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const BuyingDetails = () => {
  return (
    <>
      <div className="price-details">
        <div className="d-flex gap-2 align-items-center price-hide ">
          <h4>$90</h4>
          <h4>
            <del>$199</del>
          </h4>
        </div>
        <div className="buy-btn">
          <FaWhatsapp /> Buy via Whatsapp
        </div>
      </div>
    </>
  );
};

export default BuyingDetails;
