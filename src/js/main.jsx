import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../styles/index.css';
import Home from './components/Home';

const app = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;
setInterval(() => {
  counter++;
  app.render(
    <React.StrictMode>
      <Home counter={counter} />
    </React.StrictMode>
  );
}, 1000);
