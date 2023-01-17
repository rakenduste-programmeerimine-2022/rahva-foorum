const Post = require("../models/forumPost.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

// get all workouts
exports.getPosts = async (req, res) => {
  const user_id = req.user._id;

  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// create new post
exports.createPost = async (req, res) => {
  const { topic, title, text, postedBy } = req.body;
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
    const user_id = req.user.id;
    //const postedBy = req.user;

    const post = await Post.create({
      topic,
      title,
      text,
      user_id,
      postedBy,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.protected = async (req, res) => {};
