const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  content: { type: String, required: true },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  votes: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      voteType: { type: String, enum: ["upvote", "downvote"], required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

answerSchema.virtual("score").get(function () {
  const upvotes = this.votes.filter(
    (vote) => vote.voteType === "upvote"
  ).length;
  const downvotes = this.votes.filter(
    (vote) => vote.voteType === "downvote"
  ).length;
  return upvotes - downvotes;
});


module.exports = mongoose.model("Answer", answerSchema);
