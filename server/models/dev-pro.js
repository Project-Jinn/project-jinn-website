var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var devSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  cv: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Dev", devSchema);
