const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');
const { Route } = require('../models/route.model');
const { Bus } = require('../models/bus.model');
const { User } = require('../models/user.model');
const Deposit = require('../models/deposit.model');
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

  router.get('/ticket-count', async (req, res) => {
    try {
      const ticketCount = await Booking.countDocuments();
      res.status(200).json({ count: ticketCount });
    } catch (error) {
      res.status(500).json({ message: 'Error counting tickets', error: error.message});
    }
  });

  router.get('/bus-count', async (req, res) => {
    try {
      const busCount = await Bus.countDocuments();
      res.status(200).json({ count: busCount });
    } catch (error) {
      res.status(500).json({ message: 'Error counting buses', error: error.message});
    }
  });

  router.get('/pending-count', async (req, res) => {
    try {
      const pendingCount = await Booking.find({ paymentStatus: "pending" }).countDocuments();
      res.status(200).json({ count: pendingCount });
    } catch (error) {
      res.status(500).json({ message: 'Error counting buses', error: error.message});
    }
  });

  router.get('/search-bookings', async (req, res) => {
    try {
        const { userName, date, source, destination } = req.query;
        let query = {};

        if (userName) {
            const user = await User.findOne({ userName });
            if (user) {
                query.user = user._id;
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        }

        if (date) {
          const booking = await Booking.find({date});
          if(booking.length == 0) {
            return res.status(404).json({ message: 'Booking not found'})
          } else {
            query.date = date;
          }
        }

        if (source || destination) {
            const routes = await Route.find({
                ...(source && { source }),
                ...(destination && { destination }),
            });

            if (routes.length > 0) {
                query.routeId = { $in: routes.map(route => route._id) };
            } else {
                return res.status(404).json({ message: 'Routes not found' });
            }
        }

        const bookings = await Booking.find(query).populate('user').populate({
          path: 'routeId',
          populate: [
            {path: 'bus', model: 'Bus'} 
          ]
        });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/canceled', async (req, res) => {
  try {
    const canceledBookings = await Booking.find({ isCancelRequested: true }).populate('user').populate('routeId');
    res.status(200).json(canceledBookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/deposits', async (req, res) => {
  try {
    const deposits = await Deposit.find().populate('user', 'userName email');

    const depositsWithBase64Receipt = deposits.map(deposit => ({
      ...deposit._doc,
      receipt: deposit.receipt.toString('base64'),
    }));

    res.json(depositsWithBase64Receipt);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

  
  
  module.exports = router;
  