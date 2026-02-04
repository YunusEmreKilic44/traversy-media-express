import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

// create new post

router.post("/", createPost);

// Update Post

router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
