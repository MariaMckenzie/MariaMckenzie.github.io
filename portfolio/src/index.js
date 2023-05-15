import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/mariamckenzie.github.io">
    <App />
  </Router>,
  document.getElementById('root')
);

