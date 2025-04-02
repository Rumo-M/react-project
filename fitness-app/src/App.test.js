// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with the title', () => {
  render(<App />);
  
  // Check if the title is in the document
  const titleElement = screen.getByText(/Health & Wellness Tracker/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the Profile component', () => {
  render(<App />);
  
  // Check if the Profile component exists (assuming you have some text in Profile component)
  const profileElement = screen.getByText(/Profile/i); // Adjust this depending on Profile content
  expect(profileElement).toBeInTheDocument();
});
