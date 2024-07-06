const express = require('express');
const router = express.Router();
const Seat = require('../models/seat.model');
const Booking = require('../models/booking.model');

// Book a seat
router.post('/', async (req, res) => {
  const { seatNumber, routeId, date, user } = req.body;
  try {
    // Find and update the seat atomically
    const seat = await Seat.findOneAndUpdate(
      { seatNumber, routeId, date, isBooked: false },
      { isBooked: true },
      { new: true }
    );

    if (!seat) {
      return res.status(404).send({ error: 'Seat not found or already booked' });
    }

    const booking = new Booking({ user, routeId, seatNumber, date });
    await booking.save();

    res.status(200).send({ message: 'Seat booked successfully', booking });
  } catch (error) {
    res.status(500).send({ error: 'Error booking seat' });
  }
});

module.exports = router;
