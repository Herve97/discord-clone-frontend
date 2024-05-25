import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import ScreenShareOffIcon from "@mui/icons-material/StopScreenShare";
import * as webRTCHandler from "../../../realtimeCommunication/webRTCHandler";

const constraints = {
  audio: false,
  video: true
}

const ScreenSharedButton = ({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive,
}) => {
  // const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "Error occured when trying to get an access to screen share stream"
        );
      }

      if (stream) {
        setScreenSharingStream(stream);
        // webRTCHandler.switchOutgoingTracks video tracks
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      // webRTCHandler.switchOutgoingTracks video tracks
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((t) => {t.stop();});
      setScreenSharingStream(null);
    }
    // setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <ScreenShareOffIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenSharedButton;
