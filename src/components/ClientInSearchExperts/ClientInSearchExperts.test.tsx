import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientInSearchExperts from './ClientInSearchExperts';

describe('<ClientInSearchExperts />', () => {
  test('it should mount', () => {
    render(<ClientInSearchExperts />);
    
    const clientInSearchExperts = screen.getByTestId('ClientInSearchExperts');

    expect(clientInSearchExperts).toBeInTheDocument();
  });
});