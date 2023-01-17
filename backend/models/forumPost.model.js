const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
//forumPost model
const forumPostSchema = new Schema(
  {
    topic: { type: String, required: true, ref: "Topic" },
    title: { type: String, required: true, maxLenght: 5 },
    text: { type: String },
    user: { type: ObjectId, ref: "User" },
    user_id: { type: String, required: true },
    status: { type: String, enum: ["pending", "active"], default: "pending" },
  },
  { timestamps: true }
);

const Post = model("Post", forumPostSchema);

module.exports = Post;
