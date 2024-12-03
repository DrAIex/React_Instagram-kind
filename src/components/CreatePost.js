// components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createPost = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/posts', { title, description });
    // Обработка ответа сервера
  };

  return (
    <form onSubmit={createPost}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
