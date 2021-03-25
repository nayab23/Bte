import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertsDialogs from './ExpertsDialogs';

describe('<ExpertsDialogs />', () => {
  test('it should mount', () => {
    render(<ExpertsDialogs />);
    
    const expertsDialogs = screen.getByTestId('ExpertsDialogs');

    expect(expertsDialogs).toBeInTheDocument();
  });
});