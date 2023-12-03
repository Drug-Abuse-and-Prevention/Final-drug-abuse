const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  placeOfIncident: { type: String, required: true },
  image: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  resolved: { type: Boolean, default: false },
  userIp: { type: String, required: false },
  seriousness: {
    type: String,
    required: true,
    enum: ["high", "medium", "low"],
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;

