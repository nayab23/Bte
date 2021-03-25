import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientPayments from './ClientPayments';

describe('<ClientPayments />', () => {
  test('it should mount', () => {
    render(<ClientPayments />);
    
    const clientPayments = screen.getByTestId('ClientPayments');

    expect(clientPayments).toBeInTheDocument();
  });
});