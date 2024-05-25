import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import Video from "./Video";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = ({ localStream, remoteStreams, screenSharingStream }) => {
  // console.log("the remote stream: ", remoteStreams)
  return (
    <MainContainer>
      <Video stream={screenSharingStream ? screenSharingStream : localStream} isLocalStream />
      {remoteStreams.map((stream) => {
        <Video stream={stream} key={stream.id} />;
      })}
    </MainContainer>
  );
};

const mapStoreStateProps = ({room})=>{
  return {
    ...room
  }
}

export default connect(mapStoreStateProps)(VideosContainer);
