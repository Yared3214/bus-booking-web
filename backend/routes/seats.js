const express = require('express');
const router = express.Router();
const Seat = require('../models/seat.model');

// Initialize seats
router.post('/', async (req, res) => {
  try {
    for (let i = 1; i <= 50; i++) {
      const seat = new Seat({ seatNumber: i, route: req.body.route, date: req.body.date });
      await seat.save();
    }
    res.status(201).send('Seats initialized');
  } catch (error) {
    res.status(500).send({ error: 'Error initializing seats' });
  }
});

router.get('/', async (req, res) => {
  const { route, date } = req.query;
  try {
    let seats = await Seat.find({
      route,
      date,
    });
    
    // If seats are not initialized, initialize them
    if (seats.length === 0) {
      for (let i = 1; i <= 50; i++) {
        const seat = new Seat({ seatNumber: i, route, date });
        await seat.save();
      }
      seats = await Seat.find({
        route,
        date,
      });
      return res.status(201).json({ message: 'Seats initialized', seats });
    }

    res.status(200).json(seats);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching seats' });
  }
});

module.exports = router;
