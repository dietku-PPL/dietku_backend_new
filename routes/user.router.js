const express = require("express");
const router = express.Router();
const {authorization} = require("../middleware/authorization");

const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUserByID,
  updateUserByID,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", authorization, getUserByID);
router.post("/:id", authorization, addUser);
router.delete("/:id", authorization, deleteUserByID);
router.put("/:id", authorization, updateUserByID);

module.exports = router;
