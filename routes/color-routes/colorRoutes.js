const express = require("express");
const router = express.Router();

const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} = require("../../controllers/color-controller/colorController");
const { authMiddleWare, isAdmin } = require("../../middleware/authMiddleware");


router.post("/", authMiddleWare, isAdmin, createColor);
router.put("/:id", authMiddleWare, isAdmin, updateColor);
router.delete("/:id", authMiddleWare, isAdmin, deleteColor);
router.get("/:id", getColor);
router.get("/", getallColor);

module.exports = router;