const express = require("express");

const { getPosts, createPost, updatePost } = require("../controllers/post.js");
// const createPost = require("../controllers/post.js");

//allows us to create routes
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

// export default router;
module.exports = router;
