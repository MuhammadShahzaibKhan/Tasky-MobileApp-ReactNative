const TaskModel = require("../DBModel/TaskModel");
const { SendResponse } = require("../helper/helper");

const TaskController = {
  add: async (req, res) => {
    try {
      const {
        taskName,
        taskDescription,
        date,
        startTime,
        endTime,
        createdBy,
        isWork,
      } = req.body;

      const obj = {
        taskName,
        taskDescription,
        date,
        startTime,
        endTime,
        createdBy,
        isWork,
      };

      const errArr = [];

      if (!taskName) {
        errArr.push("Task Name is required");
      }
      if (!taskDescription) {
        errArr.push("Task Description is required");
      }
      if (!date) {
        errArr.push("Date is required");
      }
      if (!startTime) {
        errArr.push("Start Time is required");
      }
      if (!endTime) {
        errArr.push("End Time is required");
      }
      if (errArr.length > 0) {
        res
          .status(400)
          .send(SendResponse(false, "something went wrong", errArr));
        return;
      }

      const task = new TaskModel(obj);
      const result = await task.save();

      if (result) {
        res
          .status(200)
          .send(SendResponse(true, "Task saved successfully", result));
      }
    } catch (err) {
      res.status(500).send(SendResponse(false, "Internal Server Error", err));
    }
  },
  get: async (req, res) => {
    try {
      let task = await TaskModel.find();
      res.status(200).send(SendResponse(true, "", task));
    } catch (err) {
      res.status(500).send(SendResponse(false, "Internal Server Error", err));
    }
  },
  del: async (req, res) => {
    try {
      let id = req.params.id;
      TaskModel.findByIdAndDelete(id).then(() => {
        res.status(200).send(SendResponse(true, "Task deleted successfully"));
      });
    } catch (err) {
      res.status(500).send(SendResponse(false, "Internal Server Error", err));
    }
  },
};

module.exports = TaskController;
