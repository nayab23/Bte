import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertNotifications from './ExpertNotifications';

describe('<ExpertNotifications />', () => {
  test('it should mount', () => {
    render(<ExpertNotifications />);
    
    const expertNotifications = screen.getByTestId('ExpertNotifications');

    expect(expertNotifications).toBeInTheDocument();
  });
});