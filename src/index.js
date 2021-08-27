import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter as Router } from 'react-router-dom';
//HashRouter '/home/s1671848/SD_Project/#'

ReactDOM.render( 
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
