const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      amount: {
        type: Number,
        required: true,
        trim: true,
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

module.exports = Deposit ;