const { notes } = require("./miniature-eureka-main/Develop/db/db");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

// API route that reads db.json file to return all saved notes as json
app.get("/api/Develop/db", (req, res) => {
  res.json(notes);
});

// sendFile function
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// this html route returns the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// this html route returns the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//this function receives the newly created note to save on the req body,
//adds to json file, and returns new now to the client
app.post("/notes"), (req, res) => {};

//checks that the server is running properly by sending a message in the console
app.listen(3001, () => {
  console.log("API server now on port 3001!");
});
