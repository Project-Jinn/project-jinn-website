var express = require("express");
var baseRoute = express.Router();

baseRoute.get("/", function(req, res) {
  res.render("index.html");
});

baseRoute.get("/manage", function(req, res) {
  res.render("admin.html");
});

module.exports = baseRoute;
