const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ["https://smart-mess-862u.vercel.app"];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Optional fallback headers if CORS still fails
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://smart-mess-862u.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to SmartMess API");
});

app.use("/api/user", require("./routes/auth"));
app.use("/api/menu", require("./routes/menu"));
app.use("/api/attendance", require("./routes/attendance"));
app.use("/api/payments", require("./routes/payment"));
app.use("/api/complaint", require("./routes/complaint"));
app.use("/api/notice", require("./routes/notice"));
app.use("/api/rebate", require("./routes/rebate"));

// 🔥 EXPORT app for Vercel — DO NOT call app.listen
module.exports = app;
