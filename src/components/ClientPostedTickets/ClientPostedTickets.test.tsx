import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientPostedTickets from './ClientPostedTickets';

describe('<ClientPostedTickets />', () => {
  test('it should mount', () => {
    render(<ClientPostedTickets />);
    
    const clientPostedTickets = screen.getByTestId('ClientPostedTickets');

    expect(clientPostedTickets).toBeInTheDocument();
  });
});