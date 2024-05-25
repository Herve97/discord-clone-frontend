import React, {useEffect} from 'react';
import {styled} from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { connect } from "react-redux";
import { logout } from '../shared/utils/auth';
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';
import {disconnectWithSocketServer} from '../realtimeCommunication/socketDisconnection';
import Room from './Room/Room';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})

const Dashboard = ({ setUserDetails, isUserInRoom }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      // window.location.pathname = 'login';
      logout();
      disconnectWithSocketServer();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [setUserDetails]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

const mapStoreStateToProps = ({room})=>{
  return {
    ...room
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard); 