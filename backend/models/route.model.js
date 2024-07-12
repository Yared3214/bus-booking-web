const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema(
    {
      bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true
      },
      cost: {
        type: Number,
        required: true,
        trim: true,
      },
      source: {
        type: String,
        required: true,
      },
      destination: {
        type: String,
        require: true,
      },
    },
    { timestamps: true }
  );

  const Route = mongoose.model("Route", routeSchema);

module.exports = { Route };