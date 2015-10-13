require('babel/polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Perf from 'react-addons-perf';

window.React = React;
window.Perf = Perf;

ReactDOM.render(<App />, document.querySelector("#app"));
