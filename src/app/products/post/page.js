"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        console.log('API Response:', response.data);  // Debug logging
        setPosts(response.data);
      } catch (error) {
        setError('Failed to fetch posts');
        console.error(error);  // Debug logging
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
      {Array.isArray(posts) && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.post_id}>
              {post.post_title} - ${post.post_price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Posts;
