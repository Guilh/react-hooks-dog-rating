import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from './Components/Context';
import './index.css';
import App from './Components/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root')
);
