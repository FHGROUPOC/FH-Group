import Image from "next/image";
import React from "react";

import journey_img_1 from "@/assets/img/Journey_story_1.png";
import journey_img_2 from "@/assets/img/Journey_story_2.png";
import journey_img_3 from "@/assets/img/Journey_story_3.png";
import journey_img_4 from "@/assets/img/Journey_story_4.png";

const JourneyHomeThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_journey_stary">
            <div className="cs_height_50"></div>
            <h6 className="anim_text">
              At FH Group, we transform imagination into motion. Our specialized
              character animation services use cutting-edge tools like Blender,
              Cinema 4D, and 3D Maya to create stunning, lifelike characters
              tailored to your vision. Whether it's for films, games,
              advertisements, or digital projects, our team ensures top-notch
              quality and captivating animations that resonate with your
              audience.
            </h6>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default JourneyHomeThree;
