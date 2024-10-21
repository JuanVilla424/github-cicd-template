// src/components/Dashboard.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Yoguis Tickets Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded-md transition-colors"
        >
          Logout
        </button>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to the Dashboard!
        </h2>
        {/* More Dashboard Content */}
      </main>
      <footer className="bg-teal-600 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Yoguis Tickets. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
