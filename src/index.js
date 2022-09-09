import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; //import Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './Context';


ReactDOM.render(
  <React.StrictMode>
   
    <ProductProvider>
 
      <Router>
        <App />
      </Router> 
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
