const mongoose = require("mongoose");

const collegeSupportSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  rollNumber: String,
  message: String,
});

const CollegeSupport = mongoose.model("CollegeSupport", collegeSupportSchema);

module.exports = CollegeSupport;
