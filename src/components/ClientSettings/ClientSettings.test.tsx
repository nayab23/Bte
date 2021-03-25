import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientSettings from './ClientSettings';

describe('<ClientSettings />', () => {
  test('it should mount', () => {
    render(<ClientSettings />);
    
    const clientSettings = screen.getByTestId('ClientSettings');

    expect(clientSettings).toBeInTheDocument();
  });
});