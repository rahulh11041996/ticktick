import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss'
import Store from './store/Store';

ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);
