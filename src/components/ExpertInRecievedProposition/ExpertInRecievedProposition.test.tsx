import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInRecievedProposition from './ExpertInRecievedProposition';

describe('<ExpertInRecievedProposition />', () => {
  test('it should mount', () => {
    render(<ExpertInRecievedProposition />);
    
    const expertInRecievedProposition = screen.getByTestId('ExpertInRecievedProposition');

    expect(expertInRecievedProposition).toBeInTheDocument();
  });
});