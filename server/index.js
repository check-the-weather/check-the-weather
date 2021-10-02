const express = require('express');
// const socket = require("socket.io");
const app = express();
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allow Cross-Origin Resource Sharing
app.use(express.json()); // Convert request body to JSON

app.use(express.static(path.resolve(__dirname, '../client/build'))); // Serve the files for the built React app

app.use('/auth', require('./routes/auth'));

app.use('/dashboard', require('./routes/dashboard'));

app.get('*', (req, res) => { // Handle all other GET requests by returning the React app
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// io = socket(server);

// io.on("connection", (socket) => {
//   console.log(socket.id);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log("User Joined Room: " + data);
//   });

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("receive_message", data.content);
//   });

//   socket.on("disconnect", () => {
//     console.log("USER DISCONNECTED");
  // });
// });
