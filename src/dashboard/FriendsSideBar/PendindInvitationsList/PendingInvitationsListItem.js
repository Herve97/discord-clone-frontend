import React, {useState} from 'react';
import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from '../../../shared/components/Avatar';
import InvitationsDecisionButtons from './InvitationsDecisionButtons';
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const PendingInvitationsListItem = ({
  id, 
  username, 
  mail, 
  acceptFriendInvitation = ()=>{},
  rejectFriendInvitation = ()=>{}
}) => {

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptFriendInvitation = ()=>{
    acceptFriendInvitation({id});
    setButtonsDisabled(true)
  }

  const handleRejectFriendInvitation = ()=>{
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  }

  return (
    <Tooltip title={mail}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationsDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptFriendInvitation}
            rejectInvitationHandler={handleRejectFriendInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
  
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);