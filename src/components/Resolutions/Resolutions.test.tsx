import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resolutions from './Resolutions';

describe('<Resolutions />', () => {
  test('it should mount', () => {
    render(<Resolutions />);
    
    const resolutions = screen.getByTestId('Resolutions');

    expect(resolutions).toBeInTheDocument();
  });
});