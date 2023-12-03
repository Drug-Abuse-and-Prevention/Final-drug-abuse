// HelpDesk.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const HelpDesk = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentPostId, setCommentPostId] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handlePostSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/api/posts", {
        text: newPostText,
      });
      setNewPostText("");
      fetchPosts(); // Refresh the posts after submitting a new one
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await axios.put(`http://localhost:3001/api/posts/${postId}/like`);
      fetchPosts();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = (postId) => {
    setCommentPostId(postId);
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post(
        `http://localhost:3001/api/posts/${commentPostId}/comment`,
        {
          text: commentText,
        }
      );
      setCommentText("");
      setCommentPostId(null);
      fetchPosts(); // Refresh the posts after commenting on a post
    } catch (error) {
      console.error("Error commenting on post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Fetch posts on component mount

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">
        Breaking Chains: Share Your Struggle, Find Support.
      </h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          placeholder="Enter your post..."
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Recent Posts</h2>
        {posts.map((post) => (
          <div
            key={post._id}
            className="mb-4 p-4 border border-gray-300 rounded"
          >
            <p className="mb-2">
              <span className="font-bold">{post.author}:</span> {post.text}
            </p>
            <div className="flex space-x-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => handleLike(post._id)}
              >
                Like ({post.likes})
              </button>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => handleComment(post._id)}
              >
                Comment
              </button>
            </div>
            {commentPostId === post._id && (
              <div className="mt-2">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="2"
                  placeholder="Enter your comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
                  onClick={handleCommentSubmit}
                >
                  Post Comment
                </button>
              </div>
            )}
            {post.comments.length > 0 && (
              <div className="mt-4 p-2 bg-gray-100 rounded">
                <h3 className="font-bold mb-2">Comments:</h3>
                {post.comments.map((comment, index) => (
                  <p key={index} className="mb-1">
                    <span className="font-bold">Anonymous:</span> {comment.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpDesk;
