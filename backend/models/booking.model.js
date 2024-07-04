const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route',
        required: true
      },
      seatNumber: {
        type: Number,
        required: true,
        trim: true,
        min: 50,
        max: 5000
      },
      paymentStatus: {
        type: Buffer,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        require: true,
      }
    },
    { timestamps: true }
  );

  const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = { Deposit };