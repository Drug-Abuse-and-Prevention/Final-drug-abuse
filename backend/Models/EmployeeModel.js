// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   employeeId:{type: String,required: true},
//   todayLocation: { type: String, required: true },
//   post: { type: String, required: true },
//   mobile: { type: String, required: true },
//   email: {
//     type: String,
//     required: true,
//   },
//   post:{
//     type: String,
//     required: true,
//     enum: ["warden", "securityGuard", "rakshak"],
//   },
// });

// const Employee = mongoose.model("EmployeeData", employeeSchema);

// module.exports = Employee;

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true },
  todayLocation: { type: String, required: true },
  post: {
    type: String,
    required: true,
    enum: ["warden", "securityGuard", "rakshak"],
  },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  verified: { type: Boolean, default: false }, 
});

const Employee = mongoose.model("EmployeeData", employeeSchema);

module.exports = Employee;
