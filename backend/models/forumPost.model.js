const { Schema, model } = require("mongoose");

//forumPost model
const forumPostSchema = new Schema(
  {
    topic: { type: String, required: true, ref: "Topic" },
    title: { type: String, required: true, maxLenght: 5 },
    text: { type: String },
    user_id: { type: String, required: true, ref: "User" },
    status: { type: String, enum: ["pending", "active"], default: "pending" },
  },
  { timestamps: true }
);

const Post = model("Post", forumPostSchema);

module.exports = Post;
