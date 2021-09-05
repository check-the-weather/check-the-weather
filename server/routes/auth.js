const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');

router.post('/register', validInfo, async (req, res) => {
  try {
    console.log('test 1 \n\n\n')
    const {
      firstName, lastName, email, password,
    } = req.body;
    console.log(req.body)
    console.log('test 2 \n\n\n')

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    console.log('test 3 \n\n\n')

    if (user.rows.length > 0) {
      return res.status(401).json('User already exist!');
    }
    console.log('test 4 \n\n\n')

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log('test 5 \n\n\n')

    const newUser = await pool.query(
      'INSERT INTO users (first_name, last_name, email, encrypted_password) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstName, lastName, email, encryptedPassword],
    );
    console.log('test 6')

    const token = jwtGenerator(newUser.rows[0].user_id);
    console.log('test 7')
    res.json({ token });
  } catch (error) {
    console.log('\n\n\n\n\n\n\n' + error.message)
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

router.post('/login', validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(401).json('Account with this email does not exist');
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].encrypted_password);

    if (!validPassword) {
      return res.status(401).json('Password is not correct');
    }

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

router.get('/verify', authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
