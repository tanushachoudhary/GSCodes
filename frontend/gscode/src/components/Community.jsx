import React, { useState, useEffect } from "react";
import tesimage from "../assets/Test_image.png";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const loggedInUserId = 1001; // Simulate logged-in user ID
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
console.log(API_BASE_URL);

const CommentInput = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && commentText.trim()) {
      onAddComment(commentText);
      setCommentText("");
    }
  };

  return (
    <div className="mt-2 flex gap-2">
      <input
        type="text"
        className="border p-2 rounded w-full bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        placeholder="Add a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          if (commentText.trim()) {
            onAddComment(commentText);
            setCommentText("");
          }
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
      >
        Comment
      </button>
    </div>
  );
};

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ content: "", image: null });

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/posts`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setPosts([]);
        }
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        setPosts([]);
      });
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB.");
      return;
    }
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }
    setNewPost({ ...newPost, image: file });
  };

  const handlePostUpload = () => {
    if (!newPost.content.trim()) return;

    const formData = new FormData();
    formData.append("content", newPost.content);
    if (newPost.image) {
      formData.append("image", newPost.image);
    }

    axios.post(`${API_BASE_URL}/api/posts`, formData)
      .then(response => setPosts([response.data, ...posts]))
      .catch(error => console.error("Error uploading post:", error));

    setNewPost({ content: "", image: null });
  };

  const handleAddComment = (postId, commentText) => {
    axios.post(`${API_BASE_URL}/api/posts/${postId}/comments`, { content: commentText })
      .then(response => {
        setPosts(posts.map(post => 
          post.id === postId ? { ...post, comments: [...post.comments, response.data] } : post
        ));
      })
      .catch(error => console.error("Error adding comment:", error));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-4 space-y-4 mt-20">
        {/* Post Upload Section */}
        <div id="community" className="p-4 shadow-lg border border-gray-700 rounded-lg bg-gray-800">
          <textarea
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
          <div className="flex items-center gap-2 mt-2">
            <input
              type="file"
              className="border p-2 rounded bg-gray-700 text-white"
              onChange={handleImageUpload}
            />
            <button
              onClick={handlePostUpload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Post
            </button>
          </div>
        </div>

        {/* Post Feed */}
        {Array.isArray(posts) && posts.map((post) => (
          <div key={post.id} className="p-4 shadow-md border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="font-semibold text-blue-400">
              {post.userId === loggedInUserId ? "You" : post.user}
            </h3>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="post" className="mt-2 rounded" />}
            <div className="mt-2 text-sm text-gray-300">Comments:</div>
            {Array.isArray(post.comments) && post.comments.map((comment) => (
              <div key={comment.id} className="ml-4 mt-2">
                <strong className="text-blue-300">{comment.userId === loggedInUserId ? "You" : comment.user}</strong>: {comment.content}
              </div>
            ))}
            <CommentInput onAddComment={(text) => handleAddComment(post.id, text)} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
