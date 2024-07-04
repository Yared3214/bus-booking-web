const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema(
    {
      amount: {
        type: Number,
        required: true,
        trim: true,
        min: 50,
        max: 5000
      },
      receipt: {
        type: Buffer,
        required: true,
      },
      isVerified: {
        type: Boolean,
        required: true,
      }
    },
    { timestamps: true }
  );

  const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = { Deposit };