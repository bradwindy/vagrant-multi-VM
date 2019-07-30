const express = require("express");
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => res.send("Hello World!\n"));
app.get("/reply", (req, res) => res.send("This is the server reply text\n"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
