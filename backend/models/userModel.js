const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please include a username"],
    },
    email: {
      type: String,
      require: [true, "Please include an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please include a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
