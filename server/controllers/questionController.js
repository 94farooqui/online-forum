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

exports.updateAnswerCount = async (questionId) => {
  try {
    const count = await Answer.countDocuments({ questionId });
    await Question.findByIdAndUpdate(questionId, { answerCount: count });
  } catch (error) {
    console.error("Failed to update answer count:", error);
  }
};
