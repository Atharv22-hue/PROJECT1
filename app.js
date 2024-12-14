// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user2 = require("../backend/models/User");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "atharv";

// Connect to MongoDB

mongoose.connect('mongodb+srv://pant:tTEBIp7nEP7de3PE@atharv.09g0rli.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));


// Sign up route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    const newUser = await user2.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: "User creation failed" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await user2.findOne({ username });
  if (!user) return res.status(400).json({ error: "Invalid email or password" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ error: "Invalid email or password" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
