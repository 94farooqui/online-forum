const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  try {
    const { content, answerId } = req.body;

    const newComment = new Comment({
      content,
      answerId,
      author: req.user.id,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { answerId } = req.params;

    const comments = await Comment.find({ answerId }).populate(
      "author",
      "name"
    );
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};
