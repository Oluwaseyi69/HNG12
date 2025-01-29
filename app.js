require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

console.log(PORT)

app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: process.env.EMAIL,
    current_datetime: new Date().toISOString(),
    github_url: process.env.GITHUB_URL,
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
