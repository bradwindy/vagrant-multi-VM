const express = require("express");
const app = express();
const port = 3000;
const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const bodyParser = require("body-parser");

let db;

MongoClient.connect("mongodb://localhost:27017/db", function(err, client) {
  error = err;
  if (err) return console.log(err);
  db = client.db("db");

  db.collection("notes")
    .find()
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser());

app.get("/", (req, res) => res.send("Hello World!\n"));

app.get("/reply", (req, res) => res.send("This is the server reply text\n"));

app.post("/note", (req, res) => {
  db.collection("notes").insertOne(req.body.note, (err, result) => {
    if (err) return console.log(err);

    console.log("saved to database");
    res.send({ reply: "Note was saved.", contents: req.body.note });
  });
});

app.get("/notes", (req, res) => {
  db.collection("notes")
    .find()
    .toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      console.log(result);
    });
});

app.delete("/deleteallnotes", (req, res) => {
  db.collection("notes").deleteMany({}, (err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;

  db.collection("notes").deleteOne(
    { _id: new mongo.ObjectId(id) },
    (err, result) => {
      if (err) return console.log(err);
      res.send(result);
    }
  );
});

app.listen(port, () => console.log(`App listening on port ${port}`));
