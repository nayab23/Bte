import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientInCancelledTickets from './ClientInCancelledTickets';

describe('<ClientInCancelledTickets />', () => {
  test('it should mount', () => {
    render(<ClientInCancelledTickets />);
    
    const clientInCancelledTickets = screen.getByTestId('ClientInCancelledTickets');

    expect(clientInCancelledTickets).toBeInTheDocument();
  });
});