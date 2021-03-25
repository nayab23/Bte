import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInPostTicket from './ExpertInPostTicket';

describe('<ExpertInPostTicket />', () => {
  test('it should mount', () => {
    render(<ExpertInPostTicket />);
    
    const expertInPostTicket = screen.getByTestId('ExpertInPostTicket');

    expect(expertInPostTicket).toBeInTheDocument();
  });
});