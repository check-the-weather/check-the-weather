const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorization')

router.get('/', authorization, async (req, res) => {
  try {

    const user = await pool.query("SELECT first_name FROM users WHERE user_id = $1", [req.user]); 
    
    res.json({ firstName: user.rows[0].first_name })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

module.exports = router