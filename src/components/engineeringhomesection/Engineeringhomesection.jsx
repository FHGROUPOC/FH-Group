import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const EngineeringHomeSection = () => {
  return (
    <>
      <div className="Engineering_sec">
        <div className="img_sec">
          <img
            className="img_01"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1737805942/FHGROUPOC/FABRICATION/New/bg5fflxqy5ald6vra5lr.gif"
            alt="fh Engineering"
          />
        </div>
        <div className="content_sec">
          <h3>Get Started Today</h3>
          <p>
            Ready to bring your project to life? Contact us today for a
            consultation and let’s discuss how we can exceed your expectations
            with our exceptional Engineering services.
          </p>
        </div>
      </div>
    </>
  );
};

export default EngineeringHomeSection;
