import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouters from './AppRouters';

test('renders learn react link', () => {
  render(<AppRouters />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
