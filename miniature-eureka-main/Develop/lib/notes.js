// const fs = require("fs");
// const path = require("path");

// function filterByQuery(query, notesArray) {
//   let newNotesArray = [];
//   let filteredResults = notesArray;
//   if (query.newNotes) {
//     if (typeof query.newNotes === "string") {
//       newNotesArray = [query.newNotes];
//     } else {
//       newNotesArray = query.newNotes;
//     }
//     console.log(newNotesArray);
//     newNotesArray.forEach((note) => {
//       filteredResults = filteredResults.filter(
//         (note) => note.newNotes.indexOf(note) !== -1
//       );
//     });
//   }
//   return filteredResults;
// }

// // this function creates a new note and stores it in db.json

// function createNewNote(body, notesArray) {
//   const note = body;
//   if (!Array.isArray(notesArray)) notesArray = [];
//   if (notesArray.length === 0) notesArray.push(0);
//   body.id = notesArray[0];
//   notesArray[0]++;

//   notesArray.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify({ notesArray }, null, 2)
//   );
//   return note;
// }

// module.exports = {
//   filterByQuery,
//   createNewNote,
// };
