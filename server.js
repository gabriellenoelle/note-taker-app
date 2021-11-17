const { notes } = require("./miniature-eureka-main/Develop/db/db");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.get("/api/Develop/db", (req, res) => {
  res.json(notes);
});

// sendFile function to send html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/notes.html"));
});

app.listen(3001, () => {
  console.log("API server now on port 3001!");
});
