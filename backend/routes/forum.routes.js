const express = require("express");
const forumController = require("../controllers/forum.controller");
const commentController = require("../controllers/comment.controller");
const reqAuth = require("../middleware/reqAuth");

const router = express.Router();

// require auth for all workout routes
router.use(reqAuth);

router.get("/allposts", forumController.getPosts);

router.get("/userposts", forumController.getUserPosts);

router.post("/post", forumController.createPost);

router.get("/posts/:id", forumController.getSinglePost);

router.post("/posts/:id/comment", commentController.createComment);

router.get("/posts/comments/:id", commentController.showComments);
module.exports = router;
