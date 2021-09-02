  
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');
const jwtGenerator = require('../utils/jwtGenerator')
const validInfo = require('../middleware/validInfo')
const authorization = require('../middleware/authorization')

router.post('/register', validInfo, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }

      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);
   
    const newUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email, encrypted_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstName, lastName, email, encryptedPassword]
    );

    const token = jwtGenerator(newUser.rows[0].user_id)

    res.json({ token })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.post('/login', validInfo, async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])

    if (user.rows.length === 0) {
      return res.status(401).json("Account with this email does not exist")
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].encrypted_password)

    if (!validPassword) {
      return res.status(401).json("Password is not correct")
    }

    const token = jwtGenerator(user.rows[0].user_id)

    res.json({ token })
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

router.get('/is_verify', authorization, async (req, res) => {
  try {

    res.json(true)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

module.exports = router;
