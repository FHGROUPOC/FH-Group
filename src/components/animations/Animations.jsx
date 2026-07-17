import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Animations = () => {
  return (
    <>
      <div className="animation_sec">
        <div className="img_sec">
          <img
            className="first"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1735113113/FHGROUPOC/HOME/ANIMATIONS/uo6kfxoyy7kpozg2ugvf.png"
            alt="fh group cartoon animations"
          />
          <img
            className="second"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1735113753/FHGROUPOC/HOME/ANIMATIONS/vah6ep2tj23vc0l2xaml.png"
            alt="fh group cartoon animations"
          />
          <img
            className="third"
            src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1735131664/FHGROUPOC/HOME/ANIMATIONS/xhndcocowpbawsxdqrec.png"
            alt="fh group cartoon animations"
          />
        </div>
        <div className="content_sec">
          <h2 style={{ fontSize: "45px" }}>Why Choose FH Group for Character Animation?</h2>
          <p>
            team of experienced animation professionals utilizes advanced tools
            like Blender, Cinema 4D, and 3D Maya to create custom animations for
            various applications, including films, advertisements, and virtual
            reality.
          </p>
          <button className="center gap-1">
            <Link href="/character-animation">
              Character Animation Process <GoArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Animations;
