import Post from "../Models/posts.js";
import mongoose from "mongoose";

// ✅ Create a new post
export const createPost = async (req, res) => {
  try {
    const { postId, content, createdBy } = req.body;

    if (!postId || !content || !createdBy) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPost = new Post({
      postId,
      content,
      createdBy,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy", "username email"); // Populate user details
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a post by ID
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    const post = await Post.findById(id).populate("createdBy", "username email");
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a post
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    const updatedPost = await Post.findByIdAndUpdate(id, { content }, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a post
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
