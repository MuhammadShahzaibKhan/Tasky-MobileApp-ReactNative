const express = require("express");
const AuthController = require("../controllers/AuthController");
const route = express.Router();

route.post("/signup", AuthController.signup);
route.post("/login", AuthController.login);
route.get("/checkAuth", AuthController.checkAuth);
route.get("/getUsers", AuthController.protected, AuthController.getUsers);

module.exports = route;
