import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientDialogs from './ClientDialogs';

describe('<ClientDialogs />', () => {
  test('it should mount', () => {
    render(<ClientDialogs />);
    
    const clientDialogs = screen.getByTestId('ClientDialogs');

    expect(clientDialogs).toBeInTheDocument();
  });
});