const { Schema, model } = require("mongoose");

//forumPost model
const forumPostSchema = new Schema(
  {
    shortId: { type: String, uniqued: true },
    title: { type: String, required: true, maxLenght: 20 },
    text: { type: String },
    ///peab edasi veel tegema..
    status: { type: String, enum: ["pending", "active"], default: "pending" },
  },
  { timestamps: true }
);

const Post = model("Post", forumPostSchema);

module.exports = Post;
