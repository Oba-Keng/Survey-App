"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

var postRoutes = require("./routes/posts");

//initialize express to use its methods

var app = express();

//starting point for every route
app.use("/posts", postRoutes);
// app.use(app.router);
// postRoutes.initialize(app);

//bodyParser populates send requests
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//connects us to cluster on mongodb cloud database
var CONNECTION_URL = "mongodb+srv://ObakengMatshoge:Zani2nyc-23@cluster0.gevqc.mongodb.net/ObakengMatshoge?retryWrites=true&w=majority";

var PORT = process.env.PORT || 5000;

//connect to database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  return app.listen(PORT, function () {
    return console.log("server running on port: " + PORT);
  });
}) //if connection is succesful
.catch(function (error) {
  return console.log(error.message);
}); //if connection is unsuccesful

mongoose.set("useFindAndModify", false);