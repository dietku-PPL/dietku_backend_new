const express = require("express");
const router = express.Router();

const {login, register, resetPassword, getUser} = require("../controllers/auth.controller")

router.post("/login", login);
router.post("/register", register)
router.post("/reset-password", resetPassword)
router.get("/users/:id", getUser)
module.exports = router;