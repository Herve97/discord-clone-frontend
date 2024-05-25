import React from 'react';
import { styled } from "@mui/system";
import IconButton from '@mui/material/IconButton'
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const MainContainer = styled('div')({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
})

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return <MainContainer 
    onClick={handleRoomResize}>
      <IconButton style={{color: 'white'}}>
        {isRoomMinimized ? <OpenInFullIcon/> : <CloseFullScreenIcon/>}
      </IconButton>
  </MainContainer>;
};

export default ResizeRoomButton;