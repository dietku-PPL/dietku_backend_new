const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const authRouter = require("./auth.router")
const foodRouter = require("./dataMakanan.router")
const dietRouter = require("./dataDiet.router")
const hitungRouter = require("./dataHitung.router")

router.use("/users", userRouter)
router.use("/auth", authRouter)
router.use("/foods", foodRouter)
router.use("/diets", dietRouter)
router.use("/hitungs", hitungRouter)

module.exports = router
