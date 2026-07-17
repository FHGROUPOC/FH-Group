'use client';
import React, { useState, Dispatch, SetStateAction } from 'react';
import VideoPopup from '../modals/VideoPopup';

// 1. Added explicit imports for Dispatch and SetStateAction above
interface VideoHomeFiveProps {
  setIsVideoOpen: Dispatch<SetStateAction<boolean>>;
}

// 2. Renamed the incoming prop to 'parentSetIsVideoOpen' to avoid naming conflicts
const VideoHomeFive = ({ setIsVideoOpen: parentSetIsVideoOpen }: VideoHomeFiveProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  // 3. Helper function to trigger both local and parent state updates
  const handleOpenVideo = () => {
    setIsVideoOpen(true);          // Opens local popup
    parentSetIsVideoOpen(true);    // Notifies parent page
  };

  return (
    <>
      <div className="container">
        <div className="cs_parallax">
          <a onClick={handleOpenVideo}
            className="cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
            style={{ backgroundImage: 'url(/assets/img/Thumbnail.jpg)', cursor: "pointer" }}>
            <span className="cs_player_btn cs_accent_color">
              <span></span>
            </span>
          </a>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
        videoChannel={"youtube"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoHomeFive;