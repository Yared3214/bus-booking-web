const express = require('express');
const router = express.Router();
const Seat = require('../models/seat.model');
const Booking = require('../models/booking.model');
// const moment = require('moment');

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

router.get('/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate('routeId');
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// router.get('/adminDashboard', async (req, res) => {
//   try {
//     const today = moment().startOf('day');
//     const tomorrow = moment().add(1, 'days').startOf('day');
//     const dayAfterTomorrow = moment().add(2, 'days').startOf('day');
//     const twoDaysAgo = moment().subtract(2, 'days').startOf('day');
//     const yesterday = moment().subtract(1, 'days').startOf('day');

//     const currentBookings = await Booking.find({
//       date: today.format('YYYY-MM-DD')
//     }).populate('user routeId');

//     const upcomingBookings = await Booking.find({
//       date: {
//         $gte: tomorrow.format('YYYY-MM-DD'),
//         $lte: dayAfterTomorrow.format('YYYY-MM-DD')
//       }
//     }).populate('user routeId');

//     const pastBookings = await Booking.find({
//       date: {
//         $gte: twoDaysAgo.format('YYYY-MM-DD'),
//         $lte: yesterday.format('YYYY-MM-DD')
//       }
//     }).populate('user routeId');

//     res.json({
//       current: currentBookings,
//       upcoming: upcomingBookings,
//       past: pastBookings
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error });
//   }
// });


module.exports = router;
