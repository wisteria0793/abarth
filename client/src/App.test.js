import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders booking CTA in English', () => {
  localStorage.setItem('lang', 'en');
  render(<App />);
  const cta = screen.getByText(/Book Your Stay/i);
  expect(cta).toBeInTheDocument();
});
