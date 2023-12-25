const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  createdBy: {
    type: "String",
  },
  taskName: {
    type: "String",
    required: [true, "Task Name is required"],
  },
  taskDescription: {
    type: "String",
    required: [true, "Task Description is required"],
  },
  date: {
    type: "String",
    required: [true, "Date is required"],
  },
  startTime: {
    type: String,
    required: [true, "Start Time is required"],
  },
  endTime: {
    type: String,
    required: [true, "End Time is required"],
  },
  isWork: {
    type: String,
  },
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
