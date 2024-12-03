import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login.js';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
