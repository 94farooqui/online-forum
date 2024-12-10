const express = require("express");
const { voteAnswer } = require("../controllers/answerController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/:answerId/vote", authenticate, voteAnswer);

module.exports = router;
