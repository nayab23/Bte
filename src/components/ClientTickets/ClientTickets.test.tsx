import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientTickets from './ClientTickets';

describe('<ClientTickets />', () => {
  test('it should mount', () => {
    render(<ClientTickets />);
    
    const clientTickets = screen.getByTestId('ClientTickets');

    expect(clientTickets).toBeInTheDocument();
  });
});