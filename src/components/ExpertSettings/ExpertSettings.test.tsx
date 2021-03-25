import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpertSettings from './ExpertSettings';

describe('<ExpertSettings />', () => {
  test('it should mount', () => {
    render(<ExpertSettings />);
    
    const expertSettings = screen.getByTestId('ExpertSettings');

    expect(expertSettings).toBeInTheDocument();
  });
});