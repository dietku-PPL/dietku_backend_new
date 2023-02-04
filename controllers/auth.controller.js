const models = require("../models");
const { User } = models;
const jwt = require("jsonwebtoken");
var Hashes = require("jshashes");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const passwordHash = new Hashes.MD5().hex(password);
      const KEY = "asdf12";
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.status(400).json({
          message: "username not found",
        });
      } else if (passwordHash !== user.password) {
        res.status(400).json({
          message: "password incorrect",
        });
      } else {
        const userId = user.id;
        const token = jwt.sign({ userId }, KEY);
        res.status(200).json({ userId, token });
      }
    } catch (err) {
      next(err);
    }
  },

  register: async (req, res, next) => {
    try {
      const { username, password, email } = req.body;
      const passwordHash = new Hashes.MD5().hex(password);
      const userCheck = await User.findOne({ where: { email } });

      if (userCheck) {
        res.status(401).json({
          message: "email already exists",
        });
      } else {
        await User.create({
          username,
          password: passwordHash,
          email,
        });

        res.status(201).json({
          message: "success create user",
        });
      }
    } catch (err) {
      next(err);
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const passwordHash = new Hashes.MD5().hex(password);
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.status(400).json({
          message: "email not found",
        });
      } else {
        await User.update(
          {
            password: passwordHash,
          },
          {
            where: { email },
          }
        );
        res.status(200).json({
          message: "success",
        });
      }
    } catch (err) {
      next(err);
    }
  },

  getUser: async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (!user) {
      res.status(400).json({
        message: "user not found",
      });
    } else {
      res.status(200).json({
        message: "success get data",
        user,
      });
    }
  },
};
