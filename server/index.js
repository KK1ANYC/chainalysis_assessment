const path = require("path");
const express = require("express");
const app = express();
module.exports = app;


app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});


app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});


