import ModalVideo from "react-modal-video";

type DataType = {
  isVideoOpen: any;
  setIsVideoOpen: any;
  videoId: any;
  videoChannel: any;
};

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId,
  videoChannel,
}: DataType) => {
  return (
    <>
      <ModalVideo
        channel={videoChannel}
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
