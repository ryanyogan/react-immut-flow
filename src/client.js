require('babel/polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import routes from './routes';

import Perf from 'react-addons-perf'; // Disable for production builds
window.Perf = Perf; // Perf.start(), Perf.stop() in console


ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), document.getElementById('app'));
