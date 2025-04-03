require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Allows JSON body parsing

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000 // Timeout to avoid long waits
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Simple Route
app.get("/", (req, res) => {
    res.send("Flashcard API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
