const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  surname: String,
  firstNames: String,
  contactNumber: Number,
  date: Date,
  age: Number,
  food: [
    "pizza",
    "pasta",
    "Pap and Wors",
    "Chicken stir fry",
    "Beef stir fry",
    "Other"
  ],

  eat: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"],
  movies: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"],
  tv: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"],
  radio: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"]
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
