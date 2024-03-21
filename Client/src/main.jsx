import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App.jsx';
import './index.css';

// Utiliza createRoot en lugar de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
