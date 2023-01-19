const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
//creating user schema for database
const userSchema = new Schema(
  {
    name: { type: String, required: true, ref: "name" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["pending", "active"], default: "pending" },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
