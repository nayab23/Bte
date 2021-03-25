import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyExperts from './MyExperts';

describe('<MyExperts />', () => {
  test('it should mount', () => {
    render(<MyExperts />);
    
    const myExperts = screen.getByTestId('MyExperts');

    expect(myExperts).toBeInTheDocument();
  });
});