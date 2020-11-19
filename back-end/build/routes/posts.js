"use strict";

var express = require("express");

var _require = require("../controllers/post.js"),
    getPosts = _require.getPosts,
    createPost = _require.createPost;
// const createPost = require("../controllers/post.js");

//allows us to create routes


var router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

// export default router;
module.exports = router;