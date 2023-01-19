const asyncHandler = require("express-async-handler");
const Comment = require("../models/comment.model");

exports.createComment = asyncHandler(async (req, res) => {
  const { id, commentBody } = req.body;

  if (!id || !commentBody) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const comment = await Comment.create({
    user: req.user.id,
    post: id,
    comment: commentBody,
  });

  res.status(200).json(comment);
});

exports.showComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ post: req.params.id }).populate(
    "user",
    "name"
  );

  res.status(200).json(comments);
});

exports.protected = async (req, res) => {};
