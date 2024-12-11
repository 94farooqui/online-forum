const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const question = new Question({
      title,
      description,
      tags,
      author: req.user.id,
    });

    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: "Failed to post question" });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("author", "name"); //need to check what is name here
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};


//below function needs to be called when a question is accessed
exports.incrementView = async (req, res) => {
  try {
    const { questionId } = req.params;

    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ error: "Question not found" });

    question.views += 1;
    await question.save();

    res.json({ message: "View count updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to increment view count" });
  }
};


//below function will be called when adding an answer to a question
exports.updateAnswerCount = async (questionId) => {
  try {
    const count = await Answer.countDocuments({ questionId });
    await Question.findByIdAndUpdate(questionId, { answerCount: count });
  } catch (error) {
    console.error("Failed to update answer count:", error);
  }
};

exports.paginateQuestions = async (req, res) => {
  try {
    const { page = 1, limit = 10, tags, query } = req.query;

    let filter = {};
    if (tags) filter.tags = { $in: tags.split(',') };
    if (query) filter.$text = { $search: query };

    const questions = await Question.find(filter)
      .sort({ createdAt: -1 }) // Sort by latest
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('author', 'name');

    const totalCount = await Question.countDocuments(filter);

    res.json({
      questions,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

exports.searchFilterPaginateQuestions = async (req, res) => {
  try {
    const { page = 1, limit = 10, tags, query } = req.query;

    let filter = {};
    if (tags) filter.tags = { $in: tags.split(',') };
    if (query) filter.$text = { $search: query };

    const questions = await Question.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('author', 'name');

    const totalCount = await Question.countDocuments(filter);

    res.json({
      questions,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

