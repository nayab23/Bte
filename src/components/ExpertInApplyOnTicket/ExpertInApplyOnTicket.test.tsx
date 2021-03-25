import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInApplyOnTicket from './ExpertInApplyOnTicket';

describe('<ExpertInApplyOnTicket />', () => {
  test('it should mount', () => {
    render(<ExpertInApplyOnTicket />);
    
    const expertInApplyOnTicket = screen.getByTestId('ExpertInApplyOnTicket');

    expect(expertInApplyOnTicket).toBeInTheDocument();
  });
});