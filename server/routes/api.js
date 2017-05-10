var express = require("express");
var apiRoute = express.Router();

apiRoute.get("/", function(req, res) {
  res.status(200).send({"message": "Temp Data", data: obj});
});

apiRoute.post("/", function(req, res) {
  res.status(200).send({"message": "Success"});
});

module.exports = apiRoute;
