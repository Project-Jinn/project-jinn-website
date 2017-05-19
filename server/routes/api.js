var express = require("express");
var apiRoute = express.Router();

//import models
var Case = require("../models/medical-case.js");
var Dev = require("../models/dev-pro.js");
var Story = require("../models/story.js");


apiRoute.get("/medical-cases", function(req, res) {
  Case.find({}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send({"message": "Success", data: data});
  });
});

apiRoute.get("/medical-cases/:id", function(req, res) {
  Case.findOne({"_id": req.params.id}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    } else if(data) {
      res.status(200).send({"message": "Success", data: data});
    } else {
      res.status(400).send({"message": "No data with id given present"});
    }
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

apiRoute.get("/developer-profiles/:id", function(req, res) {
  Dev.findOne({"_id": req.params.id}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    } else if(data) {
      res.status(200).send({"message": "Success", data: data});
    } else {
      res.status(400).send({"message": "No data with id given present"});
    }
  });
});

apiRoute.get("/stories", function(req, res) {
  Story.find({}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send({"message": "Success", data: data});
  });
});


module.exports = apiRoute;
