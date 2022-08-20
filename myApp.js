let express = require("express");
let app = express();
console.log("Hello World");
require("dotenv").config();

/*
app.get("/", function (request, response) {
  response.send("Hello Express");
});
*/

let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

const absPath = __dirname + "/public";

app.use("/", express.static(absPath));

let jsObject = { message: "Hello json" };

const mySecret = process.env["MESSAGE_STYLE"];

app.get("/json", (req, res) => {
  if (mySecret == "uppercase") {
    jsObject.message = jsObject.message.toUpperCase();
  }

  res.json(jsObject);
});

module.exports = app;
