const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');
const { User } = require('../models/user.model')
const moment = require('moment');

router.get('/', async (req, res) => {
    try {
      const today = moment().startOf('day');
      const tomorrow = moment().add(1, 'days').startOf('day');
      const dayAfterTomorrow = moment().add(2, 'days').startOf('day');
      const twoDaysAgo = moment().subtract(2, 'days').startOf('day');
      const yesterday = moment().subtract(1, 'days').startOf('day');
  
      const currentBookings = await Booking.find({
        date: today.format('YYYY-MM-DD')
      }).populate('user routeId');
  
      const upcomingBookings = await Booking.find({
        date: {
          $gte: tomorrow.format('YYYY-MM-DD'),
          $lte: dayAfterTomorrow.format('YYYY-MM-DD')
        }
      }).populate('user routeId');
  
      const pastBookings = await Booking.find({
        date: {
          $gte: twoDaysAgo.format('YYYY-MM-DD'),
          $lte: yesterday.format('YYYY-MM-DD')
        }
      }).populate('user routeId');
  
      res.json({
        current: currentBookings,
        upcoming: upcomingBookings,
        past: pastBookings
      });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });

  router.get('/user-count', async (req, res) => {
    try {
      const userCount = await User.countDocuments();
      res.status(200).json({ count: userCount });
    } catch (error) {
      res.status(500).json({ message: 'Error counting users', error: error.message });
    }
  });
  
  
  module.exports = router;
  