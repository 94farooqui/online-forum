const Answer = require("../models/Answer");

exports.voteAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;
    const { voteType } = req.body;

    if (!["upvote", "downvote"].includes(voteType)) {
      return res.status(400).json({ error: "Invalid vote type" });
    }

    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ error: "Answer not found" });

    // Check if user already voted
    const existingVote = answer.votes.find(
      (vote) => vote.user.toString() === req.user.id
    );

    if (existingVote) {
      // Update existing vote
      existingVote.voteType = voteType;
    } else {
      // Add new vote
      answer.votes.push({ user: req.user.id, voteType });
    }

    await answer.save();
    res.json({ message: "Vote recorded", votes: answer.votes });
  } catch (error) {
    res.status(500).json({ error: "Failed to vote" });
  }
};

exports.getAnswersForQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;

    const answers = await Answer.find({ questionId })
      .populate("author", "name")
      .sort({ score: -1 }); // Sort by computed score

    res.json(answers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch answers" });
  }
};
