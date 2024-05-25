import io from 'socket.io-client';

let socket = null;

export const disconnectWithSocketServer = () => {
  socket = io("http://localhost:5002", {
    auth: {
      token: null,
    },
  });

  socket.on("disconnect", () => {
    console.log("Client successfully disconnected");
    console.log(socket.id);
  });
};