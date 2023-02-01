const express = require("express");
const router = express.Router();
const {authorization} = require("../middleware/authorization");

const {
  getAllDiet,
  getDietById,
  addDiet,
  deleteDiet,
  updateDiet,
} = require("../controllers/dataDiet.controller");

router.get("/", getAllDiet);
router.get("/:id", authorization, getDietById);
router.post("/", addDiet);
router.delete("/:id", deleteDiet);
router.put("/:id", updateDiet);

module.exports = router;
