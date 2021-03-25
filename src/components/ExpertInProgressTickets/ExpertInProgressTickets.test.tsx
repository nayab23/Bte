import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInProgressTickets from './ExpertInProgressTickets';

describe('<ExpertInProgressTickets />', () => {
  test('it should mount', () => {
    render(<ExpertInProgressTickets />);
    
    const expertInProgressTickets = screen.getByTestId('ExpertInProgressTickets');

    expect(expertInProgressTickets).toBeInTheDocument();
  });
});