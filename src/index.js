import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataProvider } from './DataContext';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Squares from './Squares';
import Forms from './Forms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

reportWebVitals();
