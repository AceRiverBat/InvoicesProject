import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import HomePage from './Home';
// import Invoice from './Invoice';
import InvoiceForm from './InvoiceForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InvoiceForm />
  </React.StrictMode>
);

reportWebVitals();
