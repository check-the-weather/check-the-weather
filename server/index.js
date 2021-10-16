const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;

/* Express server */
app.use(cors()); // Middleware - Allow Cross-Origin Resource Sharing
app.use(express.json()); // Middleware - Convert request body to JSON

app.use(express.static(path.resolve(__dirname, '../client/build'))); // Serve the files for the built React app

app.use('/auth', require('./routes/auth'));

app.use('/dashboard', require('./routes/dashboard'));

app.get('*', (req, res) => { // Handle all other GET requests by returning the React app
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

/* Socket.io server*/
io.on('connection', (socket) => {
  socket.on('send-message', ({ name, message }) => {
    io.emit('receive-message', { name, message });
  })
});

/* Express and Socket.io listening */
http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
