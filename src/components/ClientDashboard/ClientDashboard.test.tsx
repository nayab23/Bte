import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientDashboard from './ClientDashboard';

describe('<ClientDashboard />', () => {
  test('it should mount', () => {
    render(
    <ClientDashboard />
    );
    
    const clientDashboard = screen.getByTestId('ClientDashboard');

    expect(clientDashboard).toBeInTheDocument();
  });
});