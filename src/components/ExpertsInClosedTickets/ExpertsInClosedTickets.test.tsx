import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertsInClosedTickets from './ExpertsInClosedTickets';

describe('<ExpertsInClosedTickets />', () => {
  test('it should mount', () => {
    render(<ExpertsInClosedTickets />);
    
    const expertsInClosedTickets = screen.getByTestId('ExpertsInClosedTickets');

    expect(expertsInClosedTickets).toBeInTheDocument();
  });
});