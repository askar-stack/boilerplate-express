let express = require("express");
let app = express();
console.log("Hello World");
/*
app.get("/", function (request, response) {
  response.send("Hello Express");
});
*/
let absolutePath = __dirname + relativePath / file.ext;

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
module.exports = app;
