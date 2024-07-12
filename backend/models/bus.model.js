const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
      plateNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      driverName: {
        type: String,
        require: true,
        trim: true
      }
    },
    { timestamps: true }
  );

  const Bus = mongoose.model("Bus", busSchema);

module.exports = { Bus };