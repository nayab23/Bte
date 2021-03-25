import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInMyFeedOpenTicket from './ExpertInMyFeedOpenTicket';

describe('<ExpertInMyFeedOpenTicket />', () => {
  test('it should mount', () => {
    render(<ExpertInMyFeedOpenTicket />);
    
    const expertInMyFeedOpenTicket = screen.getByTestId('ExpertInMyFeedOpenTicket');

    expect(expertInMyFeedOpenTicket).toBeInTheDocument();
  });
});