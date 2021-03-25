import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Expertpublicprofile from './Expertpublicprofile';

describe('<Expertpublicprofile />', () => {
  test('it should mount', () => {
    render(<Expertpublicprofile />);
    
    const expertpublicprofile = screen.getByTestId('Expertpublicprofile');

    expect(expertpublicprofile).toBeInTheDocument();
  });
});