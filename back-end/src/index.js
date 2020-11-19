const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts");

//initialize express to use its methods

const app = express();

// app.use(app.router);
// postRoutes.initialize(app);

//bodyParser populates send requests
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//starting point for every route
app.use("/posts", postRoutes);

//connects us to cluster on mongodb cloud database
const CONNECTION_URL =
  "mongodb+srv://ObakengMatshoge:Zani2nyc-23@cluster0.gevqc.mongodb.net/ObakengMatshoge?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

//connect to database
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  ) //if connection is succesful
  .catch(error => console.log(error.message)); //if connection is unsuccesful

mongoose.set("useFindAndModify", false);
