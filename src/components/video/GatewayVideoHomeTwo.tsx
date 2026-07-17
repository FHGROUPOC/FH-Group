"use client";

import VideoPopup from "@/components/modals/VideoPopup";
import React, {useState} from "react";
const GatewayVideoHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="   cs_height_lg_60"></div>
      <div className="cs_parallax">
        <a
          onClick={() => setIsVideoOpen(true)}
          className="cs_digital_agency cs_video_block cs_style1  cs_bg "
          style={{
            backgroundImage: `url(/assets/img/Banner-Image.webp)`,
            cursor: "pointer",
          }}
        >
          {/* <span className="cs_player_btn cs_accent_color">
            <span></span>
          </span> */}
        </a>
      </div>
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      /> */}
      ;
    </>
  );
};

export default GatewayVideoHomeTwo;
