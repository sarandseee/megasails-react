import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/*------Css-------*/
import 'bootstrap/dist/css/bootstrap.min.css';  //React-Bootstrap
import './index.css';
import './axiosInterceptor';
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






