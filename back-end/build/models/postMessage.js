"use strict";

var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  surname: String,
  firstNames: String,
  contactNumber: String,
  date: Date,
  Age: Number,
  food: [
    "Pizza",
    "Pasta",
    "Pap and Wors",
    "Chicken stir fry",
    "Beef stir fry",
    "Other"
  ],
  eat: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"],
  movies: ["wow", "Agree", "Neutral", "Disagree", "stronglyDisagree"]
});

var PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
