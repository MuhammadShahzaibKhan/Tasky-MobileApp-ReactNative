const userModel = require("../DBModel/UserModel");
const { SendResponse } = require("../helper/helper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthController = {
  signup: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        contact,
        userName,
        email,
        password,
        gender,
        address,
        bio,
      } = req.body;
      const obj = {
        firstName,
        lastName,
        contact,
        userName,
        email,
        password,
        gender,
        address,
        bio,
      };
      const errArr = [];

      if (!obj.firstName) {
        errArr.push("First Name is required");
      }
      if (!obj.lastName) {
        errArr.push("Last Name is required");
      }
      if (!obj.userName) {
        errArr.push("User Name is required");
      }
      if (!obj.email) {
        errArr.push("Email is required");
      }
      if (!obj.password) {
        errArr.push("Password is required");
      }

      if (errArr.length > 0) {
        res.status(400).send(SendResponse(false, "Validation Failed", errArr));
        return;
      }

      const userExist = await userModel.findOne({
        // userName: obj.userName,
        email: obj.email,
      });

      if (userExist) {
        res
          .status(400)
          .send(
            SendResponse(false, "User With Email or User Name already exists")
          );
        return;
      }

      obj.password = await bcrypt.hash(obj.password, 10);

      const User = new userModel(obj);
      const result = await User.save();

      if (result) {
        res
          .status(200)
          .send(SendResponse(true, "User Created Successfully", result));
      }
    } catch (err) {
      res.status(500).send(SendResponse(false, "Internal Server Error", err));
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const obj = { email, password };
      const existingUser = await userModel.findOne({ email: obj.email });

      if (existingUser) {
        const correctPassword = await bcrypt.compare(
          obj.password,
          existingUser.password
        );

        if (correctPassword) {
          const token = jwt.sign({ ...existingUser }, process.env.SECRET_KEY);

          res.status(200).send(
            SendResponse(true, "Login Successfully", {
              token: token,
              user: existingUser,
            })
          );
        } else {
          res.status(400).send(SendResponse(false, "Incorrect Password"));
        }
      } else {
        res
          .status(400)
          .send(SendResponse(false, "User is not Found with this Email"));
      }
    } catch (err) {
      res.status(500).send(SendResponse(false, "Internal Server Error", err));
    }
  },

  checkAuth: async (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).send(SendResponse(false, "UNAUTHORIZED"));
      } else {
        res.status(200).send(SendResponse(true, "", decoded._doc));
      }
    });
  },

  getUsers: async (req, res) => {
    try {
      const result = await userModel.find();
      if (!result) {
        res.status(404).send(SendResponse(false, "Data not found"));
      } else {
        res.status(200).send(SendResponse(true, "", result));
      }
    } catch (error) {
      res.status(400).send(SendResponse(false, "Internal Server Error", error));
    }
  },

  protected: async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).send(SendResponse(false, "UNAUTHORIZED"));
    } else {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          res.status(401).send(SendResponse(false, "UNAUTHORIZED"));
        } else {
          next();
        }
      });
    }
  },

  adminProtected: async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).send(SendResponse(false, "UNAUTHORIZED"));
    } else {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          res.status(401).send(SendResponse(false, "UNAUTHORIZED"));
        } else {
          if ((decoded._doc.role = "admin")) {
            next();
          }
        }
      });
    }
  },
};

module.exports = AuthController;
