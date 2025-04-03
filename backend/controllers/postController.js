import Posts from "../Models/posts.js";
import userController from "./userController.js";


const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const createPost = async (req, res) => {
  try {
    const { title, content, createdBy, createdAt, user } = req.body;
    const newPost = new Posts({ title: title, content: content, createdBy: createdBy, createdAt: createdAt, user: user});

    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updatePost = async (req, res) => {
    try {
      const { id } = {id: req.body.postId}; // Get post ID from URL
      const { content } = {content: req.body.content}; // Get updated content
  
      console.log("Updating Post ID:", id);
      console.log("New Content:", content);
  
      if (!id) return res.status(400).json({ message: "Post ID is required" });
      if (!content) return res.status(400).json({ message: "Content cannot be empty" });
  
      const updatedPost = await Posts.findByIdAndUpdate(
        id, 
        { content },
        { new: true } // Return updated post
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  

const deletePost = async(req,res) => {
    try{
      console.log("delete post api started working");
      
      const { id } = req.params.id;  // Get from URL parameters
        
      console.log("Deleting post with id:", id);  // Debug log
      
      if (!id) {
          return res.status(400).json({ 
              success: false,
              message: 'No ID provided' 
          });
      }

      const deletedPost = await Posts.findByIdAndDelete(id);
      
      if (!deletedPost) {
          return res.status(404).json({
              success: false,
              message: "Post not found"
          });
      }

      return res.status(200).json({
          success: true,
          message: 'Post deleted successfully'
      });
    }catch(err){
        return res.status(500).json({msg: "Some error occurred while trying to delete. Try again"});
    }
}

export default {getPosts, createPost, updatePost, deletePost}
