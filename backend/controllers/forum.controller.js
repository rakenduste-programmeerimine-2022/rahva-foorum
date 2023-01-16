const Post = require("../models/forumPost.model");
const mongoose = require("mongoose");

// create new post
exports.createPost = async (req, res) => {
  const { topic, title, text } = req.body;

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
    const user_id = req.user._id;
    const post = await Post.create({ topic, title, text, user_id });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.protected = async (req, res) => {};
