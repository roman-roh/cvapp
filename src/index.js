import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import 'react-quill/dist/quill.snow.css';

import CVBuilder from './pages/CVBuilder';
//import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CVBuilder />
  </React.StrictMode>
);