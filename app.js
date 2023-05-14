// 2: Session code

// // 3 Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing code
// app.post("/create-item", (req, res) => {
//   //TODO: code with db here
// });

// app.get("/", function (req, res) {
//   res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running successfully on port: ${PORT}`);
//});

// 10 ASYNCHRONOUS FUNCTIONLARNI QOLLASH/////

// console.log("Web Serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();
// const http = require("http");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// // 1 Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2: Session code

// // 3 Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing code
// app.post("/create-item", (req, res) => {
//   //TODO: code with db here
// });

// app.get("/", function (req, res) {
//   res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running successfully on port: ${PORT}`);
// });

//11 mongo_atlas

// console.log("Web Serverni boshlash");
// const express = require("express");
// const res = require("express/lib/response");
// const app = express();
// const http = require("http");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

//  MongoDB connect

console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/response");
const app = express();

// MongoDB choqirish
const db = require("./server").db();

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  //TODO: code with db here
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
