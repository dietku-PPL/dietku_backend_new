const express = require("express");
const router = express.Router();

const {
    getAllHitung,
    getHitungById,
    addHitung,
    deleteHitungById,
    updateUserById,
} = require("../controllers/dataHitung.controller");

router.get("/", getAllHitung);
router.get("/:id", getHitungById);
router.post("/:id", addHitung);
router.delete("/:id", deleteHitungById);
router.put("/:id", updateUserById);

module.exports = router;