require('babel/polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, History, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import Perf from 'react-addons-perf'; // Disable for production builds
window.Perf = Perf; // Perf.start(), Perf.stop() in console

import App from './components/app';
import Dashboard from './components/dashboard';
import Orders from './components/orders';

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="orders" component={Orders} />
    </Route>
  </Router>
), document.getElementById('app'));
