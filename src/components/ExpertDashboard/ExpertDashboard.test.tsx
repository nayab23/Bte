import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertDashboard from './ExpertDashboard';

describe('<ExpertDashboard />', () => {
  test('it should mount', () => {
    render(<ExpertDashboard />);
    
    const expertDashboard = screen.getByTestId('ExpertDashboard');

    expect(expertDashboard).toBeInTheDocument();
  });
});