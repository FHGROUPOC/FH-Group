import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";



const Engineeringanimations = () => {
  return (
    <>
      <div className="animation_sec">
        <div className="img_sec">
          <img
            className="first"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056730/FHGROUPOC/FABRICATION/New/cp8j6s88isw2uvg5s7tn.png"
            alt="fh-group-Fabrication"
          />
          <img
            className="second"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056727/FHGROUPOC/FABRICATION/New/vunagicn39ltj3gdf2ot.png"
            alt="fh-group-Fabrication"
          />
          <img
            className="third"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1738056725/FHGROUPOC/FABRICATION/New/byyvrgwlrw9kwkvtmnke.png"
            alt="fh-group-Fabrication"
          />
        </div>
        <div className="content_sec">
          <h3>Who We Are </h3>
          <p>
            At FH Fabrication, we specialize in providing premium Fabrication
            solutions tailored to meet the unique needs of our clients. From
            intricate designs to large-scale projects, we combine
            state-of-the-art technology with unmatched expertise to deliver
            excellence.
          </p>
          <button className="center gap-1">
            <Link href="/engineering/contact">
              Contact Us <GoArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Engineeringanimations;
