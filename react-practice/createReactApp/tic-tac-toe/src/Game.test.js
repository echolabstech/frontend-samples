// Link.react.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import {render} from '@testing-library/react'
import {getByText} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

it('Game renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
});

test('WIP', () => {
  // render(<Game />);
  // expect(getByText('Hello, world!')).toBeInTheDocument();
});
