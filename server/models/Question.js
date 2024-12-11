const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  views: { type: Number, default: 0 },
  answerCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

//creating indexing based on text search for title and description
questionSchema.index({ title: 'text', description: 'text' });

questionSchema.index({ tags: 1, createdAt: -1 });

//indexing based on common queries
questionSchema.index({ createdAt: -1 });
questionSchema.index({ tags: 1 });
questionSchema.index({ author: 1 });


module.exports = mongoose.model("Question", questionSchema);
