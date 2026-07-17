"use client";

import React from "react";

const VideoHomeOne = ({ style_2, setIsVideoOpen, backgroundimg }: any) => {
  return (
    <>
      {style_2 ? <div className="cs_height_100 cs_height_lg_60"></div> : null}

      <div className="cs_parallax">
        <a
          onClick={() => setIsVideoOpen(true)}
          className="cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            cursor: "pointer",
            filter: "brightness(85%)",
          }}
        >
          <span className="cs_player_btn cs_accent_color">
            <span></span>
          </span>
        </a>
      </div>
    </>
  );
};

export default VideoHomeOne;
