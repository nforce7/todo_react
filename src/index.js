import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  //ovo sam importao za bootstrap. Želimo da bude prvi pa da onda ovo ispod pregazi bootstrap (css kaskade). Bootstrap bi, da je ispod import index.css, pregazio bi taj stil i pošemerio ovo na ekranu što imam -input i button)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
