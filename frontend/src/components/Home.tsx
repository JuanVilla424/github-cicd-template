// src/components/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-teal-600 text-white p-4">
        <h1 className="text-xl font-semibold">Yoguis Tickets</h1>
      </header>
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-6">
          Welcome to Yoguis Tickets
        </h2>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Register
          </Link>
        </div>
      </main>
      <footer className="bg-teal-600 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Yoguis Tickets. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
