// src/services/authService.ts

import axios from 'axios';

export const login = async (
  apiUrl: string,
  email: string,
  password: string
) => {
  return axios.post(`${apiUrl}/auth/login`, { email, password });
};

export const register = async (
  apiUrl: string,
  email: string,
  password: string,
  fullName: string
) => {
  return axios.post(`${apiUrl}/auth/register`, {
    email,
    password,
    full_name: fullName,
  });
};

export const verifyEmail = async (apiUrl: string, token: string) => {
  return axios.get(`${apiUrl}/auth/verify-email`, {
    params: { token },
  });
};

// Add more authentication-related functions as needed
