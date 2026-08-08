/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', async () => {
  // act() fuerza el flush de los efectos asíncronos de React Navigation
  // (useBackButton, screens) antes de que Jest cierre el entorno.
  await act(async () => {
    renderer.create(<App />);
  });
});
