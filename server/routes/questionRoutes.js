const express = require("express");
const {
  createQuestion,
  getQuestions,
  paginateQuestions,
  searchFilterPaginateQuestions,
} = require("../controllers/questionController");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/", authenticate, createQuestion);
router.get("/", getQuestions);

// example: /api/questions/paginate?page=2&limit=5&tags=javascript,nodejs
router.get('/paginate', paginateQuestions);

router.get('/search-filter-paginate', searchFilterPaginateQuestions);



module.exports = router;
