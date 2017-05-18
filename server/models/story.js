var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var storySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Story", storySchema);
