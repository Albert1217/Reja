const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://albert:C2Q41ZXyZmtRExsf@cluster0.daagonw.mongodb.net/Reja?authSource=admin";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT} `
        );
      });
    }
  }
);

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(
//     `The server is running successfully on port: ${PORT}, http://localhost:${PORT} `
//   );
