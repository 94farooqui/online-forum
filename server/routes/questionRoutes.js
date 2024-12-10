const express = require("express");
const {
  createQuestion,
  getQuestions,
} = require("../controllers/questionController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/", authenticate, createQuestion);
router.get("/", getQuestions);

module.exports = router;
