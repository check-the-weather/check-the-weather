const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const pool = require("./db");
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Have Node serve the files for the built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get('/api', async (req, res) => {
  try {
    const testQuery = await pool.query('SELECT * FROM users')
    res.json(testQuery.rows)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.post('/register', (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email, encrypted_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstName, lastName, email, password]
    );
    res.json(newUser)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
