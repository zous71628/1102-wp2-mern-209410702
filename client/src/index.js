import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_02 from './App_02';
import 'normalize.css';
import {AppProvider_02} from './context/appContext_02'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_02>
      <App_02 />
    </AppProvider_02>
  </React.StrictMode>,
  document.getElementById('root')
);
