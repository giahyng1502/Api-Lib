const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .finally(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error("Connection error:", e));
