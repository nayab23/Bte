import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertPayments from './ExpertPayments';

describe('<ExpertPayments />', () => {
  test('it should mount', () => {
    render(<ExpertPayments />);
    
    const expertPayments = screen.getByTestId('ExpertPayments');

    expect(expertPayments).toBeInTheDocument();
  });
});