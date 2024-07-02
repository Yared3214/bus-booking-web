const express = require('express');
const { User } = require('../models/user.model');
const router = express.Router();

router.post('/', async (req, res) => {
  const { fullName, userName, password, email, PhoneNumber } = req.body;

  try {
    const newUser = new User({
      fullName,
      userName,
      password,
      email,
      PhoneNumber,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;
