import React, { useState } from "react";
import tesimage from '../assets/Test_image.png';

const demoPosts = [
  {
    id: 1,
    user: "GS.Codes",
    content: "Welcome to GS.Codes",
    image: tesimage,
    comments: [
      { id: 1, user: "Teesha", content: "Thank You!!!!", replies: [] },
      {
        id: 2,
        user: "Tanusha",
        content: "Great work!",
        replies:[]
      },
    ],
  },
];

const CommunityPage = () => {
  const [posts, setPosts] = useState(demoPosts);
  const [newPost, setNewPost] = useState({ content: "", image: null });
  const [newComments, setNewComments] = useState({});

  const handlePostUpload = () => {
    if (!newPost.content) return;
    const newEntry = {
      id: posts.length + 1,
      user: "You",
      content: newPost.content,
      image: newPost.image ? URL.createObjectURL(newPost.image) : null,
      comments: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost({ content: "", image: null });
  };

  const handleAddComment = (postId) => {
    if (!newComments[postId]) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: post.comments.length + 1, user: "You", content: newComments[postId], replies: [] },
              ],
            }
          : post
      )
    );
    setNewComments((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {/* Post Upload Section */}
      <div className="p-4 shadow-lg border rounded-lg">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <div className="flex items-center gap-2 mt-2">
          <input
            type="file"
            className="border p-2 rounded"
            onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
          />
          <button
            onClick={handlePostUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
      </div>
      
      {/* Post Feed */}
      {posts.map((post) => (
        <div key={post.id} className="p-4 shadow-md border rounded-lg">
          <h3 className="font-semibold">{post.user}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="post" className="mt-2 rounded" />}
          <div className="mt-2 text-sm text-gray-500">Comments:</div>
          {post.comments.map((comment) => (
            <div key={comment.id} className="ml-4 mt-2">
              <strong>{comment.user}</strong>: {comment.content}
              {comment.replies.map((reply) => (
                <div key={reply.id} className="ml-4 text-gray-600">
                  <strong>{reply.user}</strong>: {reply.content}
                </div>
              ))}
            </div>
          ))}
          {/* Add Comment Section */}
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Add a comment..."
              value={newComments[post.id] || ""}
              onChange={(e) => setNewComments({ ...newComments, [post.id]: e.target.value })}
            />
            <button
              onClick={() => handleAddComment(post.id)}
              className="bg-green-500 text-white px-3 py-2 rounded"
            >
              Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityPage;
