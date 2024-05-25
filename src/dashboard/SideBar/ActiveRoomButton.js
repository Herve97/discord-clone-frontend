import React from "react";
import Button from "@mui/material/Button";
import Avatar from '../../shared/components/Avatar';
import Tooltip from "@mui/material/Tooltip";
import * as roomHandler from "../../realtimeCommunication/roomHandler";

const ActiveRoomButton = ({
  roomId,
  creatorUsername,
  amountOfParticipants,
  isUserinRoom,
}) => {
  const handleJoinActiveRoom = () =>{
    if(amountOfParticipants < 4){
      // Join Room
      roomHandler.joinRoom(roomId);
    }
  }

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginTop: "10px",
            color: "white",
            backgroundColor: "#5865F2",
          }}
          disabled={activeRoomButtonDisabled || isUserinRoom}
          onClick={handleJoinActiveRoom}
        >
          <Avatar username={creatorUsername} />
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
