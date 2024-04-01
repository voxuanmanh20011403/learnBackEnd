const express = require("express"); // common.js
const path = require("path");
const app = express();
// require("dotenv").config();

const port = 8081;
const hostname = "localhost";
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("sample.ejs");
});
app.get("/abc", (req, res) => {
  res.send("Hello World 2!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
