// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Health & Wellness App heading', () => {
  render(<App />);
  const heading = screen.getByText(/Health & Wellness App/i);
  expect(heading).toBeInTheDocument();
});

test('opens settings modal when button is clicked', () => {
  render(<App />);
  const button = screen.getByText(/Open Settings/i);
  fireEvent.click(button);
  const settingsHeading = screen.getByText(/Settings/i);
  expect(settingsHeading).toBeInTheDocument();
});
