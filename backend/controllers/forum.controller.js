const Post = require("../models/forumPost.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");
const { populate } = require("../models/forumPost.model");
const asyncHandler = require("express-async-handler");

exports.getSinglePost = asyncHandler(async (req, res) => {
  const { _id, topic, title, text } = await Post.findById(req.params.id);
  const user_id = req.user._id;
  res.status(200).json({
    id: _id,
    topic,
    title,
    text,
    user_id,
  });
});

exports.getUserPosts = async (req, res) => {
  const user_id = req.user._id;

  const posts = await Post.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// get all posts
exports.getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate("user", "name");

  res.status(200).json(posts);
});
// create new post
exports.createPost = async (req, res) => {
  const { topic, title, text } = req.body;

  //req.body.user = req.user.id;

  let emptyFields = [];

  if (!topic) {
    emptyFields.push("topic");
  }
  if (!title) {
    emptyFields.push("title");
  }
  if (!text) {
    emptyFields.push("text");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    //const postedBy = User?.name;
    const user_id = req.user._id;
    const post = await Post.create({
      topic,
      title,
      text,
      user_id,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.protected = async (req, res) => {};
