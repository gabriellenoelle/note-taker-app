const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
  let newNotesArray = [];
  let filteredResults = notesArray;
  if (query.newNotes) {
    if (typeof query.newNotes === "string") {
      newNotesArray = [query.newNotes];
    } else {
      newNotesArray = query.newNotes;
    }
    console.log(newNotesArray);
    newNotesArray.forEach((note) => {
      filteredResults = filteredResults.filter(
        (note) => note.newNotes.indexOf(note) !== -1
      );
    });
  }
}
