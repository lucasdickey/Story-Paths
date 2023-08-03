/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

it('renders correctly', () => {
  const tree = render(<App />);
  tree.getByText("Child's name", { includeHiddenElements: true });
});
