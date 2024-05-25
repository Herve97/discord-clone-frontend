import React from 'react';
import { styled } from "@mui/system";
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import ActiveRoomButton from './ActiveRoomButton';
import { connect } from "react-redux";

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: "#202225"
})

const SideBar = ({ activeRooms, isUserinRoom }) => {
  console.log("The active rooms: ", activeRooms)
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton isUserinRoom={isUserinRoom} />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserinRoom={isUserinRoom}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(SideBar);