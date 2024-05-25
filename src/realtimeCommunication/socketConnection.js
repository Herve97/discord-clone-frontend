import io from 'socket.io-client';
import store from '../store/store';
import {setPendingFriendInvitations, setFriends, setOnlineUsers} from "../store/actions/friendsActions"
import {updateDirectChatHistoryIfActive} from "../shared/utils/chat"
// import { newRoomCreated, updateActiveRooms } from "./roomHandler";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";

let socket = null;

export const connectWithSocketServer = (userDetails)=>{
  const jwtToken = userDetails.token;
  socket = io("http://localhost:5002", {
    auth:{
      token: jwtToken
    }
  });

  socket.on('connect', ()=>{
    console.log("Client successfully connected")
    // console.log(socket.id)
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendInvitations(pendingInvitations));
  });

  socket.on("friends-list", (data) => {
    console.log("Friends data: ", data);
    const { friends } = data;
    // console.log("friends lists event came");
    // console.log(friends)
    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const {onlineUsers } = data;
    // console.log("online users event came");
    // console.log(onlineUsers);
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data)=>{
    console.log("direct-chat-history: ", data)
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create', (data)=>{
    console.log("created room details came from the server");
    console.log("data room-create: ", data)
    roomHandler.newRoomCreated(data);
  });

  socket.on("active-rooms", (data)=>{
    console.log("The update active room: ", data)
    roomHandler.updateActiveRooms(data);
  });

  socket.on("conn-prepare", (data)=>{
    console.log("prepare for connection: ")
    console.log(data);
    const {connUserSocketId} = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit("conn-init", { connUserSocketId: connUserSocketId });
  });

  socket.on("conn-init", (data)=>{
    console.log("Connection initialized: ")
    console.log(data);
    const {connUserSocketId} = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });
  
  socket.on("conn-signal", (data)=>{
    webRTCHandler.handleSignalingData(data)
  });
  
  socket.on("room-participant-left", (data) => {
    console.log("User left room")
    webRTCHandler.handleParticipantLeftRoom(data)
  });

}

export const sendDirectMessage = (data)=>{
  console.log("Direct Message data");
  console.log(data);
  socket.emit('direct-message', data);
}

export const getDirectChatHistory = (data)=>{
  socket.emit("direct-chat-history", data);
}

export const createNewRoom = (data)=>{
  socket.emit("room-create", data);
}

export const joinRoom = (data)=>{
  socket.emit("room-join", data)
}

export const leaveRoom = (data)=>{
  socket.emit("room-leave", data)
}

export const signalPeerData = (data)=>{
  socket.emit("conn-signal", data);
}