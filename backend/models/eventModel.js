const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please include a title value"],
    },
    date: {
      type: String,
      required: [true, "Please include a date value"],
    },
    time: {
      type: String,
      required: [true, "Please include a time value"],
    },
    url: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: "User",
    },
    users: [
      {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
