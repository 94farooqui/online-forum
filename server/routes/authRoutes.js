const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
// router.post("/register", (req,res) => console.log("body ",req.body));
router.post("/login", loginUser);

module.exports = router;
