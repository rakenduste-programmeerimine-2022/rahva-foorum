const express = require("express");
const forumController = require("../controllers/forum.controller");
const reqAuth = require("../middleware/reqAuth");

const router = express.Router();

// require auth for all workout routes
router.use(reqAuth);

router.post("/post", forumController.createPost);

module.exports = router;
