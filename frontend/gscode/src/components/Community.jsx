import React, { useState, useEffect, useContext } from "react";
import tesimage from "../assets/Test_image.png";
import Header from "./Header";
import Footer from "./Footer";
import { DataContext } from "../context/DataProvider";
import {API} from "../service/api.js"


const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({title: "",content: "", createdBy: "", user: ""});
  const {account} = useContext(DataContext);
  const [editingPostId, setEditingPostId] = useState(null);
const [updatedContent, setUpdatedContent] = useState("");

const updatePost = (post) => {
  setEditingPostId(post._id);
  setUpdatedContent(post.content);
};

const saveUpdatedPost = async (postId) => {
  try {
    if (!updatedContent.trim()) return;

    const response = await API.updatePosts(postId, { content: updatedContent });

    if (response) {
      console.log("Post updated successfully", response);
      setPosts(posts.map((post) => 
        post._id === postId ? { ...post, content: updatedContent } : post
      ));
      setEditingPostId(null);
    }
  } catch (err) {
    console.error("Error updating post:", err);
  }
};

const cancelEdit = () => {
  setEditingPostId(null);  // Exit edit mode
  setUpdatedContent("");   // Clear updated content
};


const deletePost = async (postId) => {
  try {
    const response = await API.deletePosts(postId);
    if (response) {
      console.log("Post deleted successfully");
      setPosts(posts.filter((post) => post._id !== postId)); // Remove post from list
    }
  } catch (err) {
    console.error("Error deleting post:", err);
  }
};
  //to fetch data of all posts
  const fetchData = async() =>{
    try{
      let currPosts = await API.getPosts();
      if(currPosts){
        console.log("Successful in fetching posts");
        setPosts(currPosts.data);
      }else{
        console.log("empty currPosts")
      }
    }catch(err){
      console.log(err, "Error in fetching data");
    }
  }
  useEffect(() => {
   setNewPost((prevPost)=>({
    ...prevPost,
    createdBy: account?._id || 111111111111,
    user: account?.name || "Admin",
   }))
  }, [account._id, account]);

  useEffect(()=>{
   fetchData();
  },[])

  const handlePostUpload = async () => {
    try{
      if (!newPost.content.trim()) return;
      const newEntry = {
        title: newPost.title,
        content: newPost.content,
        createdBy: newPost.createdBy,
        user: newPost.user,
        createdAt: new Date(),
      };
      let response = await API.createPosts(newEntry);
      if(!response){
        console.log("Missing response");
      }else{
        console.log(response,"Post added successfully");
        
      }
    }catch(err){
      console.log(err, "Error in uploading post")
    }

    /* setPosts((prevPosts) => [newEntry, ...prevPosts]);
    console.log(posts); */
    setNewPost({title: "",content: "", createdBy: "",  user: ""});
  };

 

{  /* return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-4 space-y-4 mt-20">
        <div id="community" className="p-4 shadow-lg border border-gray-700 rounded-lg bg-gray-800">
          <input name="title" placeholder="Enter title" onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}  value={newPost.title}></input>
          <textarea
            name="content"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
              <button
                onClick={handlePostUpload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2"
              >
          Post
        </button>
        </div>

        {posts.map((post) => (
  <div key={post._id} className="p-4 shadow-md border border-gray-700 rounded-lg bg-gray-800 flex justify-between">
    <div className="p-4 bg-gray-800">
      <h3 className="font-semibold text-blue-400">
        {post.createdBy === account._id ? "You" : post.user}
      </h3>

      {editingPostId === post._id ? (
        <>
          <textarea
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            value={updatedContent}
            onChange={(e) => {setUpdatedContent(e.target.value); console.log(updatedContent)}}
          />
          <div className="flex gap-2 mt-2">
            <button 
              onClick={() => saveUpdatedPost(post._id)} 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-200"
            >
              Save
            </button>
            <button 
              onClick={cancelEdit} 
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-200"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <p>{post.content}</p>
      )}
    </div>

    {post.createdBy === account._id && (
      <div className="flex flex-col justify-between">
        {editingPostId === post._id ? null : (
          <button 
            onClick={() => updatePost(post)} 
            className="bg-blue-600 mb-0.5 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Update
          </button>
        )}
        <button 
          onClick={() => deletePost(post._id)} 
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Delete
        </button>
      </div>
    )}
  </div>
))}

      </div>
      <Footer />
    </div>
  );
}; */}

return (
  <div className="bg-gray-900 text-white min-h-screen">
    <Header />
    <div className="max-w-2xl mx-auto p-4 space-y-4 mt-20">
      
      {/* Post Upload Section */}
      <div className="p-4 shadow-lg border border-gray-700 rounded-lg bg-gray-800">
        <input
          name="title"
          placeholder="Enter title"
          className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-700 text-white"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          name="content"
          className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={handlePostUpload} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2">
          Post
        </button>
      </div>

      {posts.map((post) => (
        <div key={post._id} className="p-4 shadow-md border border-gray-700 rounded-lg bg-gray-800 flex justify-between">
          <div className="p-4 bg-gray-800">
            <h3 className="font-semibold text-blue-400">{post.createdBy === account._id ? "You" : post.user}</h3>

            {editingPostId === post._id ? (
              <>
                <textarea
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                  value={updatedContent}
                  onChange={(e) => setUpdatedContent(e.target.value)}
                />
                <div className="flex gap-2 mt-2">
                  <button onClick={() => saveUpdatedPost(post._id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Save
                  </button>
                  <button onClick={() => setEditingPostId(null)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <p>{post.content}</p>
            )}
          </div>

          {post.createdBy === account._id && (
            <div className="flex flex-col justify-between">
              {editingPostId !== post._id && (
                <button onClick={() => updatePost(post)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Update
                </button>
              )}
              <button onClick={() => deletePost(post._id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer />
  </div>
);
};

export default CommunityPage;