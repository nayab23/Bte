import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertInSentRequests from './ExpertInSentRequests';

describe('<ExpertInSentRequests />', () => {
  test('it should mount', () => {
    render(<ExpertInSentRequests />);
    
    const expertInSentRequests = screen.getByTestId('ExpertInSentRequests');

    expect(expertInSentRequests).toBeInTheDocument();
  });
});