import { render, screen, within } from '@testing-library/react';
import Footer from './components/Footer';

test('renders footer branding', () => {
  render(<Footer />);
  const footer = screen.getByRole('contentinfo');
  expect(within(footer).getAllByText(/Vraj Hirapara/).length).toBeGreaterThanOrEqual(1);
  expect(screen.getByText(/Flutter & FlutterFlow · India/)).toBeInTheDocument();
});
