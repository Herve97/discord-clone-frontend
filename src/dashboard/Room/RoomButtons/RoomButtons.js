import React from "react";
import { styled } from "@mui/system";
import ScreenSharedButton from "./ScreenSharedButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/roomActions";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;
  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenSharedButton {...props} />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({room}) =>{
  return {
    ...room
  }
}

const mapActionstoProps = (dispatch)=>{
  return {
    ...getActions(dispatch),
  };
}

export default connect(mapStoreStateToProps, mapActionstoProps)(RoomButtons);
