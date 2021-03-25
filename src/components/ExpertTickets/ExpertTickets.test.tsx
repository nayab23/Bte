import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertTickets from './ExpertTickets';

describe('<ExpertTickets />', () => {
  test('it should mount', () => {
    render(<ExpertTickets />);
    
    const expertTickets = screen.getByTestId('ExpertTickets');

    expect(expertTickets).toBeInTheDocument();
  });
});