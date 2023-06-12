const express = require("express")
const router = express.Router()

const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getallEnquiry,
} = require("../../controllers/enquiry-controller/equiryController");
const { authMiddleWare, isAdmin } = require("../../middleware/authMiddleware")

router.post("/", createEnquiry);
router.put("/:id", authMiddleWare, isAdmin, updateEnquiry)
router.delete("/:id", authMiddleWare, isAdmin, deleteEnquiry)
router.get("/:id", getEnquiry)
router.get("/", getallEnquiry)

module.exports = router