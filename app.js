const http = require("http");
const express = require("express");
const app = express();
const route = express.Router();

app.route("/").get((req, res) => {
  res.end("<h1>Hello world!</h1>");
});

app.route("/home").get((req, res) => {
  res.end("<h1>Home page ... </h1>");
});

app.use("/", route);
const server = http.createServer(app);
server.listen(3000, () => {
  console.log("run server on http://localhost:3000");
});
