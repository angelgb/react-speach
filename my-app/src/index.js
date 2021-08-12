import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import Panel from './Components/Panel'

ReactDOM.render(
  <React.StrictMode>
    <Panel></Panel>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
