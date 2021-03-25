import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInfeeds from './ExpertInfeeds';

describe('<ExpertInfeeds />', () => {
  test('it should mount', () => {
    render(<ExpertInfeeds />);
    
    const expertInfeeds = screen.getByTestId('ExpertInfeeds');

    expect(expertInfeeds).toBeInTheDocument();
  });
});