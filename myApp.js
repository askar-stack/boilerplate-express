let express = require("express");
let app = express();
console.log("Hello World");
require("dotenv").config();

/*
app.get("/", function (request, response) {
  response.send("Hello Express");
});
*/

/*
//placed logger first because express runs in order
function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);

  next();
}

app.use("/", logger);
*/

/*
let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

const absPath = __dirname + "/public";

app.use("/", express.static(absPath));

let jsObject = { message: "Hello json" };

app.get("/json", (req, res) => {
  let mySecret = process.env["MESSAGE_STYLE"];

  mySecret == "uppercase"
    ? (jsObject.message = jsObject.message.toUpperCase())
    : (jsObject.message = "Hello json");

  res.json(jsObject);
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);
*/

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word }); //serving up json
});

module.exports = app;
