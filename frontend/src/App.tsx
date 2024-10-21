// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VerifyEmail from './components/VerifyEmail';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register apiUrl="YOUR_API_URL" />} />
        <Route path="/login" element={<Login apiUrl="YOUR_API_URL" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
