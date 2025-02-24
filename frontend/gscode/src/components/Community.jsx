import React, { useState, useEffect } from "react";
import tesimage from "../assets/Test_image.png";
import Header from "./Header";
import Footer from "./Footer";

const loggedInUserId = 1001; // Simulate logged-in user ID

const demoPosts = [
  {
    id: 1,
    userId: 1000,
    user: "GS.Codes",
    content: "Welcome to GS.Codes",
    image: tesimage,
    comments: [
      { id: 1, userId: 1002, user: "Teesha", content: "Thank You!!!!", replies: [] },
      { id: 2, userId: 1003, user: "Tanusha", content: "Great work!", replies: [] },
    ],
  },
];

const CommentInput = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="mt-2 flex gap-2">
      <input
        type="text"
        className="border p-2 rounded w-full bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        placeholder="Add a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
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
  const [posts, setPosts] = useState(demoPosts);
  const [newPost, setNewPost] = useState({ content: "", image: null });

  useEffect(() => {
    return () => {
      posts.forEach((post) => {
        if (post.image && typeof post.image === "string") {
          URL.revokeObjectURL(post.image);
        }
      });
    };
  }, [posts]);

  const handlePostUpload = () => {
    if (!newPost.content.trim()) return;

    let imageUrl = null;
    if (newPost.image) {
      imageUrl = URL.createObjectURL(newPost.image);
    }

    const newEntry = {
      id: posts.length + 1,
      userId: loggedInUserId,
      user: "You",
      content: newPost.content,
      image: imageUrl,
      comments: [],
    };

    setPosts((prevPosts) => [newEntry, ...prevPosts]);
    setNewPost({ content: "", image: null });
  };

  const handleAddComment = (postId, commentText) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  userId: loggedInUserId,
                  user: "You",
                  content: commentText,
                  replies: [],
                },
              ],
            }
          : post
      )
    );
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
              onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
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
        {posts.map((post) => (
          <div key={post.id} className="p-4 shadow-md border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="font-semibold text-blue-400">
              {post.userId === loggedInUserId ? "You" : post.user}
            </h3>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="post" className="mt-2 rounded" />}
            <div className="mt-2 text-sm text-gray-300">Comments:</div>
            {post.comments.map((comment) => (
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