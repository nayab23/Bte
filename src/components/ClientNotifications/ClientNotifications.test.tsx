import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientNotifications from './ClientNotifications';

describe('<ClientNotifications />', () => {
  test('it should mount', () => {
    render(<ClientNotifications />);
    
    const clientNotifications = screen.getByTestId('ClientNotifications');

    expect(clientNotifications).toBeInTheDocument();
  });
});