import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Expertprivateprofile from './Expertprivateprofile';

describe('<Expertprivateprofile />', () => {
  test('it should mount', () => {
    render(<Expertprivateprofile />);
    
    const expertprivateprofile = screen.getByTestId('Expertprivateprofile');

    expect(expertprivateprofile).toBeInTheDocument();
  });
});