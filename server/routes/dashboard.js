const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorization')

router.get('/', authorization, async (req, res) => {
  try {

    const user = await pool.query("SELECT email FROM users WHERE user_id = $1", [req.user]); 
    
    res.json(user.rows[0])
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

module.exports = router