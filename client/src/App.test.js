import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders booking info page on initial load', () => {
  localStorage.clear();
  localStorage.setItem('lang', 'en');
  render(<App />);
  const bookingTitle = screen.getByText(/Booking Information/i);
  expect(bookingTitle).toBeInTheDocument();
});
