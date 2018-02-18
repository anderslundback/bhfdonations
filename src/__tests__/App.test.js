import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';

xit('Always renders a containing div', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App is defined', () => {
  expect(<App />).toBeDefined();
});