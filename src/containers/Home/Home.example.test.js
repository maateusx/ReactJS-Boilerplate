import { render, screen } from '@testing-library/react';
import Home from './index';

test('renders text element', () => {
  render(<Home />);
  const textElement = screen.getByText(/Home/i);
  expect(textElement).toBeInTheDocument();
});
