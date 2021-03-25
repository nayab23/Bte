import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostTicket from './PostTicket';

describe('<PostTicket />', () => {
  test('it should mount', () => {
    render(<PostTicket />);
    
    const postTicket = screen.getByTestId('PostTicket');

    expect(postTicket).toBeInTheDocument();
  });
});