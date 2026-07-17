import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Engineering = () => {
  return (
    <>
      <div className="Engineering_sec ">
        <div className="img_sec">
          <img
            className="img_01"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1737556776/FHGROUPOC/HOME/SELECTION/ahgpbijv2d78cdggxwu8.jpg"
            alt="fh group fabrication"
          />
        </div>
        <div className="content_sec">
          <h2 style={{ fontSize: "45px" }}>Custom Engineering Solutions</h2>
          <p>
            FH Engineering is your go-to partner for innovative and customized
            Engineering solutions. We blend cutting-edge technology with
            exceptional craftsmanship to bring your visions to life.
          </p>
          <button>
            <Link href="/engineering">
              Get Engineering Solution
              <GoArrowRight className="mx-2" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Engineering;
