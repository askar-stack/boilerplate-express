let express = require("express");
let app = express();
console.log("Hello World");
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

module.exports = app;
