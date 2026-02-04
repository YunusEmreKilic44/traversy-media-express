const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
