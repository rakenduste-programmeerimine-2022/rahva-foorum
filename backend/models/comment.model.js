const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = mongoose.Schema(
  {
    post: {
      type: ObjectId,
      required: true,
      ref: "Post",
    },
    user: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
