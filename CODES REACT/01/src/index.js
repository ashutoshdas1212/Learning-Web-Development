import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Mobile from './Mobile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mobile/>
  </React.StrictMode>   
);
// strict mode is used to catch errors, between it is html part
