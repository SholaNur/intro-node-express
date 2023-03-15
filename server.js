const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello");
});
app.get("/contact", function (req, res) {
  res.send("Contact Me at - shola.gmail.com");
});
app.get("/about", function (req, res) {
  res.send("Hey there, welcome to my website!");
});

app.get("/myhobbies", function (req, res) {
  res.send("<ul><li>Dancing</li> <li>Travelling</li> </ul>  ");
});

app.listen(3000, function () {
  console.log("server is listening");
});
