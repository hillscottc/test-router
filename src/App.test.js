import { render, screen } from '@testing-library/react';
import NestedRoutesApp from './NestedRoutesApp';

test('renders learn react link', () => {
  // render(<App />);
  render(<NestedRoutesApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
