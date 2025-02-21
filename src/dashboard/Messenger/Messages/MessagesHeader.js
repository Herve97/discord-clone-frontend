import React from 'react';
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import { Typography } from "@mui/material";

const MainContainer = styled('div')({
  width: '98%',
  display: 'column',
  marginTop: '10px'
})

const MessagesHeader = ({name=""}) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        style={{
          marginLeft: "5px",
          marginRight: "5px",
          fontWeight: 'bold',
          color: "#ffffff",
        }}
        variant="h4"
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;