import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import CryptoContext from './cryptoContext';

ReactDOM.render(
  <Router>
    <CryptoContext>
      <App />
    </CryptoContext>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
