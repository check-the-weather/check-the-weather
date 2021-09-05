const express = require('express');

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
