import React from "react";
import { Typography } from "@mui/material";
import { connect } from "react-redux";

const ChosenOptionLabel = ({ name }) => {
  console.log("the name: ", name)
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {`${name ? `Chosen conversation: ${name}`: ""}`}
    </Typography>
  );
};

const mapActionsToProps = (state) => {
  // console.log("The state: ", state)
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapActionsToProps)(ChosenOptionLabel);
