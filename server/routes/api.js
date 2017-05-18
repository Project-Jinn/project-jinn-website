var express = require("express");
var apiRoute = express.Router();

//import models
var Case = require("../models/medical-case.js");
var Dev = require("../models/dev-pro.js");

apiRoute.get("/medical-cases", function(req, res) {
  Case.find({}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send({"message": "Success", data: data});
  });
});

apiRoute.get("/developer-profiles", function(req, res) {
  Dev.find({}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send({"message": "Success", data: data});
  });
});


module.exports = apiRoute;
