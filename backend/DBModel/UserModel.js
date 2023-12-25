const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  contact: {
    type: Number,
  },
  userName: {
    type: String,
    required: [true, "User Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  bio: {
    type: String,
    required: [true, "address is required"],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
