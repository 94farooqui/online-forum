const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
//const connectDB = require("./config/db.js")
const authRoutes = require('./routes/authRoutes.js')
const questionRoutes = require("./routes/questionRoutes.js");
const commentsRoute = require("./routes/commentRoute.js");
const answerRoute = require("./routes/answerRoutes.js");



// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));
//connectDB()

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answer", answerRoute);
app.use("/api/comments", commentsRoute);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
