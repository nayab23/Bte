import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientInClosedTickets from './ClientInClosedTickets';

describe('<ClientInClosedTickets />', () => {
  test('it should mount', () => {
    render(<ClientInClosedTickets />);
    
    const clientInClosedTickets = screen.getByTestId('ClientInClosedTickets');

    expect(clientInClosedTickets).toBeInTheDocument();
  });
});