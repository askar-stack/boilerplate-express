let express = require("express");
let app = express();
console.log("Hello World");
app.get("/", function (request, response) {
  response.send("Hello Express");
});
module.exports = app;
