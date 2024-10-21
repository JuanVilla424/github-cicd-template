// src/components/VerifyEmail.tsx

import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import { useParams, useNavigate } from 'react-router-dom';

const VerifyEmail: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('Verifying your email...');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axiosClient.post('/auth/verify-email', { token });
        setMessage('Email verified successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } catch (err) {
        setError('Failed to verify email. Please try again.');
        setMessage('');
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setError('Invalid verification link.');
      setMessage('');
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {message && <p className="text-green-600 text-lg">{message}</p>}
        {error && <p className="text-red-600 text-lg">{error}</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
