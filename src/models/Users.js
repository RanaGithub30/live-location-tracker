const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isLoggedIn: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Users", userSchema);