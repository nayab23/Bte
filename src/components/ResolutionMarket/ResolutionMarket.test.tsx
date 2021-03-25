import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResolutionMarket from './ResolutionMarket';

describe('<ResolutionMarket />', () => {
  test('it should mount', () => {
    render(<ResolutionMarket />);
    
    const resolutionMarket = screen.getByTestId('ResolutionMarket');

    expect(resolutionMarket).toBeInTheDocument();
  });
});