const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  surname: String,
  firstNames: String,
  contactNumber: Number,
  date: Date,
  age: Number,
  food: []
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
