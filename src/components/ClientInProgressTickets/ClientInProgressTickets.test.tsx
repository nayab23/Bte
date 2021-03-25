import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientInProgressTickets from './ClientInProgressTickets';

describe('<ClientInProgressTickets />', () => {
  test('it should mount', () => {
    render(<ClientInProgressTickets />);
    
    const clientInProgressTickets = screen.getByTestId('ClientInProgressTickets');

    expect(clientInProgressTickets).toBeInTheDocument();
  });
});