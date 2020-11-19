"use strict";

var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  surname: String,
  firstNames: String,
  contactNumber: String,
  date: Date,
  Age: Number,
  food: {
    type: String,
    possibleValues: ["Pizza", "Pasta", "Pap and Wors", "Chicken stir fry", "Beef stir fry", "Other"]
  }
});

var PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;