import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders learn react link in English', () => {
  localStorage.setItem('lang', 'en');
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
