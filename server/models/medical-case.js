var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var caseSchema = new Schema({
  title: {
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
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Case", caseSchema);
