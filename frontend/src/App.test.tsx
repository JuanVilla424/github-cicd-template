// src/App.test.tsx

jest.mock('axios');

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GitHub/i);
  expect(headerElement).toBeInTheDocument();
});
