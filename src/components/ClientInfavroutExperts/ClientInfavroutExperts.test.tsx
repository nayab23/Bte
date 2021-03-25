import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientInfavroutExperts from './ClientInfavroutExperts';

describe('<ClientInfavroutExperts />', () => {
  test('it should mount', () => {
    render(<ClientInfavroutExperts />);
    
    const clientInfavroutExperts = screen.getByTestId('ClientInfavroutExperts');

    expect(clientInfavroutExperts).toBeInTheDocument();
  });
});