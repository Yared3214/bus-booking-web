const express = require('express');
const { Bus } = require('../models/bus.model');
const router = express.Router();

router.post('/', async (req, res) => {
  const { plateNumber, driverName } = req.body;

  try {
    const newBus = new Bus({ plateNumber, driverName });

    const savedBus = await newBus.save();
    res.status(201).json({ message: 'Bus added successfully', bus: savedBus });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error adding bus' });
  }
});

module.exports = router;
