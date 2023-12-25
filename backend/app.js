require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AuthRouter = require("./router/AuthRouter");
const TaskRouter = require("./router/TaskRouter");

const App = express();
App.use(express.json());
App.use(cors());

App.use("/auth", AuthRouter);
App.use("/task", TaskRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(`Server listening on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
