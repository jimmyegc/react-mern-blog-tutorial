/*
// Sequielize con MySQL
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
*/

import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
  },
  { collection: "blogs" }
);

export default mongoose.model("BlogModel", blogSchema);
