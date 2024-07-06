const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      routeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route',
        required: true
      },
      seatNumber: {
        type: Number,
        required: true,
        trim: true,
      },
      paymentStatus: {
        type: String,
        default: 'pending'
      },
      date: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        default: '10:00 AM'
      }
    },
    { timestamps: true }
  );

  const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;