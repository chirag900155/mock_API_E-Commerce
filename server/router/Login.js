const express = require('express');
const AccountSchema = require('../Models/AccountSchema.js');

const Router = express.Router();

Router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).send({ message: 'Please enter email and password' });
    }

    const user = await AccountSchema.findOne({ email });

    if (!user) {
      return res.status(403).send({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(403).send({ message: 'Please enter correct password' });
    }

    return res.status(200).send({ message: 'Successfully logged in to your account' });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = Router;
