const notes = require("./miniature-eureka-main/Develop/db/db");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const fs = require("fs");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// API route that reads db.json file to return all saved notes as json
app.get("/api/Develop/db", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./miniature-eureka-main/Develop/db/db.json")
  );
});

//this function receives the newly created note to save on the req body,
//adds to json file, and returns new now to the client
app.post("api/notes", (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync("./miniature-eureka-main/Develop/db/db.json")
  );
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync(
    "./miniature-eureka-main/Develop/db/db.json",
    JSON.stringify(notes)
  );
  res.json(notes);
});

// this function creates a new note and stores it in db.json
function createNewNote(body, notesArray) {
  const note = body;
  if (!Array.isArray(notesArray)) notesArray = [];
  if (notesArray.length === 0) notesArray.push(0);
  body.id = notesArray[0];
  notesArray[0]++;

  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

// html calls
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./miniature-eureka-main/Develop/public/index.html")
  );
});

// this html route returns the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./miniature-eureka-main/Develop/public/notes.html")
  );
});

// this html route returns the index.html file
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./miniature-eureka-main/Develop/public/index.html")
  );
});

module.exports = {
  createNewNote,
};

//checks that the server is running properly by sending a message in the console
app.listen(3001, () => {
  console.log("API server now on port 3001!");
});
