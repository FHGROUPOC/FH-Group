import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Mediacl = () => {
  return (
    <>
      <div className="animation_sec flex-row-reverse">
        <div className="img_sec">
          <img
            className="first rounded-4"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1764246554/FH-Medical-Billing2_rtqgf3.jpg"
            alt="fh group cartoon animations"
          />
          <img
            className="second rounded-4"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1764246555/FH-Medical-Billing_qt8d0g.jpg"
            alt="fh group cartoon animations"
          />
          <img
            className="third rounded-4"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1764246555/FH-Medical-Billing3_w521qx.jpg"
            alt="fh group cartoon animations"
          />
        </div>
        <div className="content_sec">
          <h2 style={{ fontSize: "45px" }}>
            Medical Billing Services – Accurate, Fast & HIPAA-Compliant
          </h2>
          <p>
            We provide end-to-end medical billing services designed to help
            healthcare providers maximize revenue, reduce claim denials, and
            improve cash flow.
          </p>
          <button className="center gap-1">
            <Link href="/medical-billing">
              Character Animation Process <GoArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Mediacl;
