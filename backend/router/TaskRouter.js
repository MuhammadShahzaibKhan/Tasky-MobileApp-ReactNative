const express = require("express");
const TaskController = require("../controllers/TaskController");
const route = express.Router();

route.post("/addTask", TaskController.add);
route.get("/", TaskController.get);
route.put("/update/:id", TaskController.edit);
route.delete("/del/:id", TaskController.del);

module.exports = route;
