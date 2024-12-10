const express = require("express");
const { addComment, getComments } = require("../controllers/commentController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/", authenticate, addComment);
router.get("/:answerId", getComments);

module.exports = router;
