const { notes } = require("./miniature-eureka-main/Develop/db/db");
const express = require("express");
const app = express();

app.get("/api/Develop/db", (req, res) => {
  res.send("Hello!");
});

app.listen(3001, () => {
  console.log("API server now on port 3001!");
});
